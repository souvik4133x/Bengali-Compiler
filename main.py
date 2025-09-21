from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import re
import sys
from io import StringIO

app = FastAPI(title="Bengali Script API")

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://bengali-compiler.vercel.app"],
    #allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str
    inputs: list = []  # Add inputs field

class InputRequest(BaseModel):
    input_value: str

def run_bengali_code(code, inputs=None):
    if inputs is None:
        inputs = []
    
    input_index = [0]  # Use list to make it mutable in nested functions
    
    # Custom input function that uses provided inputs
    def custom_input(prompt=""):
        if input_index[0] < len(inputs):
            value = inputs[input_index[0]]
            input_index[0] += 1
            return value
        else:
            # Raise special exception to request input
            raise InputRequiredException(prompt)
    
    replacements = {
        "bol": "print",
        "jodi": "if",
        "noyto": "elif",
        "nahole": "else",
        "jotokkhon": "while",
        "prottek": "for",
        "er": "in",
        "jonno": "range",
        "kaj": "def",
        "phiriye_dau": "return",
        "talika": "list",
        "boi": "dict",
        "shreni": "class",
        "suru": "__init__",
        "etar": "self",
        "ano": "import",
        "thamo": "break",
        "cholo": "continue",
        "sotti": "True",
        "mithya": "False",
        "ebong": "and",
        "othoba": "or",
        "inputnao": "custom_input",
        "sonkha":"int",  # Map nao to our custom input function
        "shuru": "# Entry point"
    }

    # Convert Bengali numerals to English
    numeral_map = {
        '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
        '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
    }
    
    for bn, en in numeral_map.items():
        code = code.replace(bn, en)

    # Process line by line to preserve indentation
    lines = code.split('\n')
    processed_lines = []
    
    for line in lines:
        indentation = len(line) - len(line.lstrip())
        processed_line = line
        for beng, eng in replacements.items():
            processed_line = re.sub(rf'(?<!\w){beng}(?!\w)', eng, processed_line)
        processed_lines.append(processed_line)
    
    code = '\n'.join(processed_lines)
    
    return code

class InputRequiredException(Exception):
    def __init__(self, prompt=""):
        self.prompt = prompt
        super().__init__("Input required")

@app.post("/run")
async def execute_code(request: CodeRequest):
    try:
        # Translate Bengali code to Python
        python_code = run_bengali_code(request.code, request.inputs)
        
        # Add custom input function to globals
        input_index = [0]
        def custom_input(prompt=""):
            if input_index[0] < len(request.inputs):
                value = request.inputs[input_index[0]]
                input_index[0] += 1
                return value
            else:
                raise InputRequiredException(prompt)
        
        # Capture the output
        old_stdout = sys.stdout
        redirected_output = sys.stdout = StringIO()
        
        try:
            # Execute with custom input function
            exec_globals = {
                'custom_input': custom_input,
                'InputRequiredException': InputRequiredException
            }
            exec(python_code, exec_globals)
            output = redirected_output.getvalue()
            
            return {
                "output": output,
                "python_code": python_code,
                "requires_input": False
            }
            
        except InputRequiredException as e:
            output = redirected_output.getvalue()
            return {
                "output": output,
                "python_code": python_code,
                "requires_input": True,
                "input_prompt": str(e.prompt)
            }
        except Exception as e:
            output = redirected_output.getvalue() + f"\nError: {str(e)}"
            return {
                "output": output,
                "python_code": python_code,
                "requires_input": False
            }
        finally:
            sys.stdout = old_stdout
            
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Bengali Script API is running"}
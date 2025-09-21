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
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str

def run_bengali_code(code):
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
        "shuru": "# Entry point"
    }

    # Convert Bengali numerals to English
    numeral_map = {
        '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
        '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
    }
    
    # First convert numerals
    for bn, en in numeral_map.items():
        code = code.replace(bn, en)

    # Process line by line to preserve indentation
    lines = code.split('\n')
    processed_lines = []
    
    for line in lines:
        # Preserve original indentation
        indentation = len(line) - len(line.lstrip())
        
        # Replace keywords in this line
        processed_line = line
        for beng, eng in replacements.items():
            # Use word boundary regex but preserve indentation
            processed_line = re.sub(rf'(?<!\w){beng}(?!\w)', eng, processed_line)
        
        processed_lines.append(processed_line)
    
    # Join the processed lines
    code = '\n'.join(processed_lines)
    
    return code

@app.post("/run")
async def execute_code(request: CodeRequest):
    try:
        # Translate Bengali code to Python
        python_code = run_bengali_code(request.code)
        
        # Capture the output
        old_stdout = sys.stdout
        redirected_output = sys.stdout = StringIO()
        
        try:
            exec(python_code)
            output = redirected_output.getvalue()
        except Exception as e:
            output = f"Error: {str(e)}"
        finally:
            sys.stdout = old_stdout
        
        return {
            "output": output,
            "python_code": python_code
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Bengali Script API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import InputModal from '../components/InputModal';

const EditorPage = () => {
  const [bengaliCode, setBengaliCode] = useState(`
# সংখ্যা ইনপুট নেওয়া
number = sonkha(inputnao())

# সংখ্যায় ২ যোগ করা
number += 2

# বার্তা প্রিন্ট করা
bol("আপনি আরও", number, "বছর বেঁচে থাকবেন")
`);
  
  const [output, setOutput] = useState('আউটপুট এখানে দেখানো হবে');
  const [isLoading, setIsLoading] = useState(false);
  const [userInputs, setUserInputs] = useState([]);
  const [showInputModal, setShowInputModal] = useState(false);
  const [inputPrompt, setInputPrompt] = useState('');

  const runCode = async (inputs = []) => {
    setIsLoading(true);
    setOutput('কোড রান হচ্ছে...');
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          code: bengaliCode,
          inputs: inputs
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`সার্ভার ত্রুটি: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      
      if (data.requires_input) {
        // Show input modal
        setShowInputModal(true);
        setInputPrompt(data.input_prompt || 'দয়া করে একটি মান ইনপুট করুন:');
        setOutput(data.output);
      } else {
        setOutput(data.output || 'কোন আউটপুট তৈরি হয়নি');
        setShowInputModal(false);
      }
    } catch (error) {
      console.error('API ত্রুটি:', error);
      setOutput(`ত্রুটি: ${error.message}`);
      setShowInputModal(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputSubmit = (inputValue) => {
    const newInputs = [...userInputs, inputValue];
    setUserInputs(newInputs);
    setShowInputModal(false);
    runCode(newInputs);
  };

  const handleCloseModal = () => {
    setShowInputModal(false);
    setIsLoading(false);
  };

  const handleRunCode = () => {
    setUserInputs([]);
    runCode([]);
  };

  return (
    <>
      <CodeEditor
        bengaliCode={bengaliCode}
        setBengaliCode={setBengaliCode}
        output={output}
        isLoading={isLoading}
        runCode={handleRunCode}
      />
      
      <InputModal
        isOpen={showInputModal}
        prompt={inputPrompt}
        onSubmit={handleInputSubmit}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default EditorPage;
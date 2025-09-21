import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';

const EditorPage = () => {
  const [bengaliCode, setBengaliCode] = useState(`shuru

# এটি একটি হ্যালো ওয়ার্ল্ড প্রোগ্রাম
bol("Hello World!")

# ভেরিয়েবল
নাম = "রিয়াদ"
বয়স = ২৫
bol("আমার নাম", নাম, "এবং বয়স", বয়স)

# কন্ডিশন
jodi 5 < 3:
    bol("হ্যাঁ")
othoba 5 > 2:
    bol("my god")
noyto:
    bol("না")

# লুপ
bol("১ থেকে ৫ পর্যন্ত সংখ্যা:")
prottek i er jonno(১, ৬):
    bol(i)`);
  
  const [output, setOutput] = useState('আউটপুট এখানে দেখানো হবে');
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    setIsLoading(true);
    setOutput('কোড 실행 হচ্ছে...');
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: bengaliCode })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`সার্ভার ত্রুটি: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      setOutput(data.output || 'কোন আউটপুট তৈরি হয়নি');
    } catch (error) {
      console.error('API ত্রুটি:', error);
      setOutput(`ত্রুটি: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CodeEditor
      bengaliCode={bengaliCode}
      setBengaliCode={setBengaliCode}
      output={output}
      isLoading={isLoading}
      runCode={runCode}
    />
  );
};

export default EditorPage;
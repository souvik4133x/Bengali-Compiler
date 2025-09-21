import React from 'react';
import '../styles/CodeEditor.css';

const CodeEditor = ({ bengaliCode, setBengaliCode, output, isLoading, runCode }) => {
  return (
    <div className="code-editor-page">
      <div className="editor-header-section">
        <div className="header-content">
          <h1 className="editor-main-title">সন্দেশLang কোড এডিটর</h1>
          <p className="editor-subtitle">সন্দেশLang-এ কোড লিখুন এবং রিয়েল-টাইমে আউটপুট দেখুন</p>
        </div>
      </div>

      <div className="editors-container">
        <div className="editor-column">
          <div className="editor-card">
            <div className="editor-header">
              <div className="editor-title">
                <span className="editor-icon">📝</span>
                কোড
              </div>
              <button
                className="run-button"
                onClick={runCode}
                disabled={isLoading}
              >
                {isLoading ? 'চলছে...' : 'রান করুন'}
              </button>
            </div>
            <div className="code-area">
              <textarea
                value={bengaliCode}
                onChange={(e) => setBengaliCode(e.target.value)}
                placeholder="এখানে আপনার বাংলা কোড লিখুন..."
                className="code-textarea"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        <div className="editor-column">
          <div className="editor-card">
            <div className="editor-header">
              <div className="editor-title">
                <span className="editor-icon">📊</span>
                আউটপুট
              </div>
              <div className="output-status">
                {isLoading ? 'কোড চলছে...' : 'প্রস্তুত'}
              </div>
            </div>
            <div className="output-area">
              <pre className="output-content">
                {isLoading ? 'কোড রান হচ্ছে...' : output || 'আউটপুট এখানে দেখানো হবে'}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="code-examples">
        <h3 className="examples-title">এডিটরে চালানোর জন্য উদাহরণ টিপুন</h3>
        <div className="examples-grid">
          <div className="example-card" onClick={() => setBengaliCode(`bol("Hello World!")`)}>
            <div className="example-header">হ্যালো ওয়ার্ল্ড</div>
            <div className="example-code">bol("Hello World!")</div>
          </div>

          <div className="example-card" onClick={() => setBengaliCode(`naam = "আপনার নাম"\nbol(naam)`)}>
            <div className="example-header">ভেরিয়েবল</div>
            <div className="example-code">naam = "আপনার নাম"</div>
            <div className="example-code">bol(naam)</div>
          </div>

          <div className="example-card" onClick={() => setBengaliCode(`jodi ৫ > ৩:\n    bol("সত্য")\nnahole:\n    bol("মিথ্যা")`)}>
            <div className="example-header">কন্ডিশন</div>
            <div className="example-code">{`jodi ৫ > ৩:`}</div>
            <div className="example-code">    bol("সত্য")</div>
            <div className="example-code">nahole:</div>
            <div className="example-code">    bol("মিথ্যা")</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
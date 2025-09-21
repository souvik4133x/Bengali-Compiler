import React, { useState } from 'react';
import '../styles/InputModal.css';

const InputModal = ({ isOpen, prompt, onSubmit, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  const handleClose = () => {
    setInputValue('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>ইনপুট প্রয়োজন</h3>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="input-prompt">{prompt || "দয়া করে একটি মান ইনপুট করুন:"}</p>
          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="আপনার ইনপুট লিখুন..."
              className="input-field"
              autoFocus
            />
            <div className="modal-actions">
              <button type="button" className="cancel-button" onClick={handleClose}>
                বাতিল
              </button>
              <button type="submit" className="submit-button">
                জমা দিন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
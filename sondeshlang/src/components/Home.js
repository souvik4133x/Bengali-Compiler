import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            বাংলায় প্রোগ্রামিং শিখুন
          </h1>
          <p className="hero-description">
            সন্দেশLang হল একটি ইনোভেটিভ প্ল্যাটফর্ম যেখানে আপনি বাংলা ভাষায় প্রোগ্রামিং শিখতে এবং অনুশীলন করতে পারবেন। 
            পাইথনের সকল ফিচার বাংলা কীওয়ার্ড দিয়ে ব্যবহার করুন।
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">এখনই শুরু করুন</button>
            <button className="cta-button secondary">ডেমো দেখুন</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-demo">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">example.bengali</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="keyword">bol</span>(<span className="string">"Hello World!"</span>)</div>
              <div className="code-line"><span className="keyword">jodi</span> ৫ {'>'} ৩:</div>
              <div className="code-line">&nbsp;&nbsp;<span className="keyword">bol</span>(<span className="string">"গণিত কাজ করছে!"</span>)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">কেন সন্দেশLang ব্যবহার করবেন?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>বাংলায় শিখুন</h3>
            <p>ইংরেজি বাধা দূর করে বাংলা ভাষায় প্রোগ্রামিং এর মূল概念 শিখুন</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>রিয়েল-টাইম এক্সিকিউশন</h3>
            <p>আপনার বাংলা কোড রিয়েল-টাইমে রান করুন এবং ফলাফল দেখুন</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>ইন্টারaktive অনুশীলন</h3>
            <p>বিভিন্ন সমস্যা সমাধান করে আপনার Skills উন্নত করুন</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat">
            <div className="stat-number">১০০+</div>
            <div className="stat-label">বাংলা কোড উদাহরণ</div>
          </div>
          <div className="stat">
            <div className="stat-number">৫০+</div>
            <div className="stat-label">প্রোগ্রামিং Concepts</div>
          </div>
          <div className="stat">
            <div className="stat-number">১,০০০+</div>
            <div className="stat-label">সক্রিয় ব্যবহারকারী</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>আজই শুরু করুন আপনার প্রোগ্রামিং Journey</h2>
        <p>বাংলা ভাষায় প্রোগ্রামিং শিখুন এবং কোডিং Skills Develop করুন</p>
        <button className="cta-button large">নিবন্ধন করুন</button>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import '../styles/Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            বাংলায় প্রোগ্রামিং শিখুন
          </h1>
          <p className="hero-description">
            সন্দেশLang হল একটি কোডিং ভাষা যা বিশেষভাবে ডিজাইন করা হয়েছে যাতে সবাই সহজভাবে বুঝতে পারে। এটি পাইথন থেকে অনুপ্রাণিত একটি ভাষা। এখানে এডিটরে আপনি সন্দেশLang এবং পাইথন উভয়ই লিখতে পারবেন।


          </p>
          <div className="hero-buttons">
            <Link to="/editor">
              <button className="cta-button primary">এখনই শুরু করুন</button>
            </Link>
            <a href="https://www.youtube.com/shorts/yRD5DXfMSvQ?feature=share" target="_blank" rel="noopener noreferrer">
              <button className="cta-button secondary">ডেমো দেখুন</button>
            </a>
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
      <p>ইংরেজি বাধা দূর করে বাংলা ভাষায় প্রোগ্রামিং এর মূল ধারণা শিখুন</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon">⚡</div>
      <h3>রিয়েল-টাইম এক্সিকিউশন</h3>
      <p>আপনার বাংলা কোড রিয়েল-টাইমে রান করুন এবং ফলাফল দেখুন</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon">🎯</div>
      <h3>ইন্টারঅ্যাকটিভ অনুশীলন</h3>
      <p>বিভিন্ন সমস্যা সমাধান করে আপনার দক্ষতা উন্নত করুন</p>
    </div>
  </div>
</section>


      

      <section className="cta-section">
        <h2>আজই শুরু করুন আপনার প্রোগ্রামিং Journey</h2>
        <p>সন্দেশLang-এ প্রোগ্রামিং শিখুন এবং কোডিং Skills Develop করুন</p>
        
        <Link to="/docs">
              <button className="cta-button large">ডকুমেন্টেশন পড়ুন</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
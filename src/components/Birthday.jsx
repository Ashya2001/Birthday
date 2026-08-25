import React, { useEffect, useState } from "react";
import {
  Cake,
  Gift,
  Heart,
  Sparkles,
  Star,
  Music,
  PartyPopper,
  ArrowDown,
} from "lucide-react";

import "./Birthday.css";

// =========================
// CHANGE THESE TWO NAMES
// =========================
const FRIEND_NAME = "Advika";
const YOUR_NAME = "Ashish";

// =========================
// CONFETTI
// =========================
function Confetti({ active }) {
  if (!active) return null;

  return (
    <div className="confetti-container">
      {Array.from({ length: 70 }).map((_, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${2.5 + Math.random() * 2}s`,
            backgroundColor: [
              "#ff4f91",
              "#ffd166",
              "#9b5de5",
              "#00f5d4",
              "#ffffff",
            ][i % 5],
          }}
        />
      ))}
    </div>
  );
}

// =========================
// FLOATING HEARTS
// =========================
function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 18 }).map((_, i) => (
        <Heart
          key={i}
          className="floating-heart"
          fill="currentColor"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 7}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${12 + Math.random() * 18}px`,
          }}
        />
      ))}
    </div>
  );
}

// =========================
// BIRTHDAY CAKE
// =========================
function BirthdayCake({ onBlow }) {
  const [lit, setLit] = useState(true);

  const blowCandle = () => {
    if (!lit) return;

    setLit(false);
    onBlow();
  };

  return (
    <div className="cake-area">
      <div className="cake-glow" />

      <div className="cake">
        {/* Cake bottom */}
        <div className="cake-bottom" />

        {/* Cake middle */}
        <div className="cake-middle" />

        {/* Cake top */}
        <div className="cake-top">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Candle */}
        <button
          className="candle"
          onClick={blowCandle}
          aria-label="Blow the birthday candle"
        >
          <div className="candle-stick" />

          {lit ? (
            <div className="flame">
              <div className="flame-inner" />
            </div>
          ) : (
            <div className="smoke">
              <i />
              <i />
              <i />
            </div>
          )}
        </button>
      </div>

      {lit ? (
        <p className="blow-text">
          Tap the candle & make a wish 🕯️
        </p>
      ) : (
        <p className="wish-message">
          ✨ Wish made! May all your dreams come true ✨
        </p>
      )}
    </div>
  );
}

// =========================
// BIRTHDAY CARD
// =========================
function BirthdayCard({ onCelebrate }) {
  return (
    <section className="hero-section">
      <div className="hero-card">
        <div className="card-shine" />

        {/* Top label */}
        <div className="top-label">
          <Sparkles size={16} />
          <span>A SPECIAL DAY</span>
          <Sparkles size={16} />
        </div>

        {/* Crown */}
        <div className="mini-crown">👑</div>

        {/* Heading */}
        <h1>
          Happy Birthday
          <span>{FRIEND_NAME}</span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          Today isn't just another day...
          <br />
          it's the day my amazing best friend was born. 💕
        </p>

        {/* Cake */}
        <BirthdayCake onBlow={onCelebrate} />

        {/* Celebrate button */}
        <button
          className="celebrate-btn"
          onClick={onCelebrate}
        >
          <PartyPopper size={19} />
          Celebrate 🎉
          <Sparkles size={18} />
        </button>

        {/* Footer */}
        <div className="made-with">
          <Heart size={13} fill="currentColor" />

          <span>
            Made specially for my best friend
          </span>

          <Heart size={13} fill="currentColor" />
        </div>
      </div>
    </section>
  );
}

// =========================
// MEMORIES
// =========================
function Memories() {
  const memories = [
    {
      emoji: "😂",
      title: "Endless Laughs",
      text:
        "Tumhare saath boring moment bhi somehow funny ban jaata hai.",
    },
    {
      emoji: "🤝",
      title: "Always There",
      text:
        "Good days ho ya bad days, ek dusre ka saath kabhi nahi chhoda.",
    },
    {
      emoji: "💖",
      title: "Best Memories",
      text:
        "Har chhoti si memory bhi tumhare saath special lagti hai.",
    },
  ];

  return (
    <section className="memories-section">
      <div className="section-heading">
        <span>OUR LITTLE STORY</span>

        <h2>Why You're So Special 💗</h2>

        <p>
          Some things about our friendship that I'll always cherish.
        </p>
      </div>

      <div className="memory-grid">
        {memories.map((memory, index) => (
          <div className="memory-card" key={index}>
            <div className="memory-number">
              0{index + 1}
            </div>

            <div className="memory-icon">
              {memory.emoji}
            </div>

            <h3>{memory.title}</h3>

            <p>{memory.text}</p>

            <div className="memory-line" />
          </div>
        ))}
      </div>
    </section>
  );
}

// =========================
// FINAL WISH
// =========================
function FinalWish() {
  return (
    <section className="final-section">
      <div className="final-card">
        <div className="stars">
          <Star />
          <Sparkles />
          <Star />
        </div>

        <Gift className="gift-icon" size={45} />

        <h2>One Last Wish...</h2>

        <p>
          May this new year of your life bring you endless
          happiness, beautiful memories, success, peace and
          everything your heart wishes for.
        </p>

        <div className="big-wish">
          <span>Happy Birthday</span>

          <strong>
            {FRIEND_NAME} 💖
          </strong>
        </div>

        <div className="signature">
          With lots of love,
          <br />

          <strong>{YOUR_NAME}</strong>
        </div>

        <div className="heart-row">
          ❤️ ❤️ ❤️
        </div>
      </div>
    </section>
  );
}

// =========================
// MAIN BIRTHDAY COMPONENT
// =========================
export default function Birthday() {
  const [celebrate, setCelebrate] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    if (!celebrate) return;

    const timer = setTimeout(() => {
      setCelebrate(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, [celebrate]);

  const handleCelebrate = () => {
    setCelebrate(false);

    setTimeout(() => {
      setCelebrate(true);
    }, 50);
  };

  return (
    <main className="birthday-page">

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Celebration confetti */}
      <Confetti active={celebrate} />

      {/* ================= NAVBAR ================= */}
      <nav className="birthday-nav">
        <div className="logo">
          <Cake size={22} />

          <span>
            Birthday<span>Girl</span>
          </span>
        </div>

        <button
          className={`music-btn ${
            musicOn ? "active" : ""
          }`}
          onClick={() => setMusicOn(!musicOn)}
        >
          <Music size={17} />

          {musicOn ? "Music On" : "Music"}
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <BirthdayCard
        onCelebrate={handleCelebrate}
      />

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>
          Scroll for a little more love
        </span>

        <ArrowDown size={17} />
      </div>

      {/* ================= MEMORIES ================= */}
      <Memories />

      {/* ================= FINAL WISH ================= */}
      <FinalWish />

      {/* ================= FOOTER ================= */}
      <footer>
        <Heart size={14} fill="currentColor" />

        Made with love for {FRIEND_NAME}

        <Heart size={14} fill="currentColor" />
      </footer>
    </main>
  );
}
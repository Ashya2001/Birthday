import React, { useEffect, useState } from "react";
import {
  Heart,
  Sparkles,
  Star,
  PawPrint,
  Cat,
  Moon,
  Quote,
  ArrowDown,
  Smile,
  ShieldCheck,
  Gem,
  WandSparkles,
} from "lucide-react";

import "./Birthday.css";

const FRIEND_NAME = "Inaya";
const NICKNAME = "Billi";
const YOUR_NAME = "Ashish";

function FloatingBilli() {
  const items = [
    "billi 🐱",
    "hehe",
    "cutie",
    "✨",
    "meri billi",
    "🤍",
    "hehehe",
    "🐾",
    "special",
    "🌙",
  ];

  return (
    <div className="billi-particles">
      {Array.from({ length: 20 }).map((_, index) => (
        <span
          key={index}
          className="billi-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 9}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
          }}
        >
          {items[index % items.length]}
        </span>
      ))}
    </div>
  );
}

/* =========================
   NAVBAR
========================= */

function Navbar() {
  return (
    <nav className="bf-nav">
      <div className="bf-logo">
        <span className="logo-heart">
          <Heart size={16} fill="currentColor" />
        </span>

        <span>
          just for <strong>{FRIEND_NAME}</strong>
        </span>
      </div>

      <div className="billi-mini">
        <Cat size={16} />
        <span>{NICKNAME}</span>
      </div>
    </nav>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLine(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bf-hero">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="hero-content">
        <div className="eyebrow">
          <span />
          <Sparkles size={13} />
          <span>NOT A BIG THING</span>
          <Sparkles size={13} />
          <span />
        </div>

        <div className="floating-cat">
          🐱
        </div>

        <p className="hero-small">
          There is a person I call...
        </p>

        <h1>
          My
          <span>{NICKNAME}</span>
        </h1>

        <div className="nickname-glow">
          <div className="nickname-ring ring-one" />
          <div className="nickname-ring ring-two" />
        </div>

        <p className="hero-description">
          And no, it's not because you're actually a cat. 😭
          <br />
          It's just one of those names that somehow
          <strong> belongs to you.</strong>
        </p>

        {showLine && (
          <div className="hero-reveal">
            <Heart size={14} fill="currentColor" />

            <span>
              {FRIEND_NAME} — my favourite kind of chaos.
            </span>

            <Heart size={14} fill="currentColor" />
          </div>
        )}
      </div>

      <div className="hero-scroll">
        <span>keep scrolling, billi</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}

/* =========================
   BILLI PERSONALITY
========================= */

function BilliTraits() {
  const traits = [
    {
      number: "01",
      icon: Smile,
      title: "That Smile",
      text:
        "Tumhari smile mein kuch toh hai. Normal day bhi thoda better feel hone lagta hai.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Your Energy",
      text:
        "Tumhari random baatein aur chhoti-chhoti harkatein hi toh tumhe tum banati hain.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Your Heart",
      text:
        "Tum jitni cute ho, usse zyada achhi tumhari nature hai. Aur ye cheez genuinely rare hai.",
    },
    {
      number: "04",
      icon: Gem,
      title: "Simply You",
      text:
        "Sabse achhi baat ye hai ki tumhe kisi aur jaisa banne ki zarurat nahi. Tum already enough ho.",
    },
  ];

  return (
    <section className="traits-section">
      <div className="section-heading">
        <div className="section-kicker">
          <PawPrint size={13} />
          LITTLE THINGS
        </div>

        <h2>
          Things I secretly
          <span>like about you.</span>
        </h2>

        <p>
          Okay... secretly nahi.
          <br />
          Ab toh openly bol raha hoon. 😌
        </p>
      </div>

      <div className="traits-grid">
        {traits.map((trait) => {
          const Icon = trait.icon;

          return (
            <article className="trait-card" key={trait.number}>
              <span className="trait-number">
                {trait.number}
              </span>

              <div className="trait-icon">
                <Icon size={23} strokeWidth={1.7} />
              </div>

              <h3>{trait.title}</h3>

              <p>{trait.text}</p>

              <div className="trait-arrow">↗</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* =========================
   SPECIAL BILLI CARD
========================= */

function BilliCard() {
  const [active, setActive] = useState(false);

  return (
    <section className="billi-section">
      <div className="billi-card">
        <div className="billi-card-glow" />

        <div className="billi-left">
          <div className="billi-icon-large">
            <Cat size={48} strokeWidth={1.3} />

            <span className="spark spark-a">✦</span>
            <span className="spark spark-b">✧</span>
          </div>
        </div>

        <div className="billi-right">
          <div className="billi-label">
            <WandSparkles size={14} />
            <span>THE NICKNAME</span>
          </div>

          <h2>
            Why
            <span>“Billi”?</span>
          </h2>

          <p>
            Kyunki kuch nicknames explain nahi kiye jaate.
            Bas kisi ek person ke liye naturally perfect lagte hain.
          </p>

          <p>
            Aur tumhare case mein...
            <strong> Billi just fits.</strong>
          </p>

          <button
            className={`billi-button ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
          >
            {active ? "Okay okay, enough 😭" : "One more thing..."}
          </button>

          {active && (
            <div className="hidden-message">
              <Heart size={14} fill="currentColor" />
              <span>
                Tu genuinely bahut achhi hai, Billi.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================
   FRIENDSHIP NOTE
========================= */

function PersonalNote() {
  return (
    <section className="personal-section">
      <div className="paper-shadow" />

      <div className="personal-card">
        <div className="note-corner">♡</div>

        <div className="note-heading">
          <Moon size={15} />
          <span>A NOTE FROM ASHISH</span>
          <Moon size={15} />
        </div>

        <Quote className="quote-icon" size={28} />

        <h2>
          Billi, ek baat
          <span>seriously.</span>
        </h2>

        <div className="letter">
          <p>
            Mujhe nahi pata main ye cheez normally kabhi bolta
            ya nahi, but aaj bol deta hoon.
          </p>

          <p>
            <strong>Tu mujhe achhi lagti hai.</strong>
          </p>

          <p>
            Teri personality, tera nature, teri random baatein,
            tera cute sa attitude aur woh bina reason wali
            hasi... sab kuch apne aap mein special hai.
          </p>

          <p>
            Tere saath friendship ko explain karne ke liye
            koi fancy word nahi chahiye.
            Bas itna kaafi hai ki
            <strong> tu meri favourite people mein se hai.</strong>
          </p>

          <p>
            Aur haan, kabhi kabhi irritate bhi karti hai...
            but unfortunately,
            <strong> meri Billi hai toh tolerate karna padega. 😭🐱</strong>
          </p>
        </div>

        <div className="hand-sign">
          <span>— with genuine affection</span>
          <strong>{YOUR_NAME}</strong>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FINAL
========================= */

function FinalSection() {
  return (
    <section className="final-section">
      <div className="final-stars">
        <Star size={13} />
        <Sparkles size={18} />
        <Star size={13} />
      </div>

      <div className="final-cat">
        🐱
      </div>

      <p className="final-top">
        If you ever forget how special you are...
      </p>

      <h2>
        Meri Pyari Dost,
        <span>Billi.</span>
      </h2>

      <p className="final-text">
        Because someone somewhere thinks you're
        pretty damn amazing exactly the way you are.
      </p>

      <div className="final-divider">
        <span />
        <Heart size={17} fill="currentColor" />
        <span />
      </div>

      <div className="final-name">
        {FRIEND_NAME}
      </div>

      <div className="final-tag">
        my favourite billi • my good vibe • my person 🤍
      </div>
    </section>
  );
}

/* =========================
   MAIN
========================= */

export default function Birthday() {
  return (
    <main className="bestfriend-page">
      <FloatingBilli />

      <Navbar />

      <Hero />

      <BilliTraits />

      <BilliCard />

      <PersonalNote />

      <FinalSection />

      <footer className="bf-footer">
        <Heart size={13} fill="currentColor" />

        <span>
          made specially for {FRIEND_NAME}
        </span>

        <Heart size={13} fill="currentColor" />
      </footer>
    </main>
  );
}
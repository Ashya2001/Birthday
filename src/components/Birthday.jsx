import React, { useEffect, useState } from "react";
import {
  Heart, Sparkles, Stars, Gift, Crown, MoonStar, Flower2,
  ArrowDown, LockKeyhole, MailOpen, PartyPopper, Music2, WandSparkles
} from "lucide-react";
import "./Birthday.css";

const FRIEND_NAME = "Inaya";
const NICKNAME = "Billi";
const YOUR_NAME = "Ashish";
const BIRTHDAY_DATE = "12 OCTOBER";

function IntroScreen({ onEnter }) {
  useEffect(() => {
    const timer = window.setTimeout(onEnter, 4200);
    return () => window.clearTimeout(timer);
  }, [onEnter]);

  return (
    <section className="intro-screen" aria-label="Birthday surprise opening">
      <div className="intro-orbit orbit-one" />
      <div className="intro-orbit orbit-two" />
      <div className="intro-grain" />
      <div className="intro-content">
        <div className="intro-topline"><Sparkles size={14} /> A LITTLE SOMETHING FOR YOU <Sparkles size={14} /></div>
        <div className="intro-emblem"><span className="emblem-glow" /><Heart size={44} fill="currentColor" strokeWidth={1.2} /></div>
        <p className="intro-eyebrow">made with love, just for</p>
        <h1 className="intro-name">{FRIEND_NAME}<span>.</span></h1>
        <p className="intro-nickname">my favourite human · my Billi ♡</p>
        <div className="intro-loading"><span /></div>
        <p className="intro-small">Your little world is getting ready…</p>
        <button className="intro-skip" onClick={onEnter}>Open my surprise <ArrowDown size={14} /></button>
      </div>
      <div className="intro-date">{BIRTHDAY_DATE} <span>✦</span> BIRTHDAY EDITION</div>
      <span className="intro-floating float-a">✧</span><span className="intro-floating float-b">♡</span>
      <span className="intro-floating float-c">✦</span><span className="intro-floating float-d">✧</span>
    </section>
  );
}

function FloatingStars() {
  return (
    <div className="ambient-stars" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <span key={i} style={{
          left: `${(i * 37 + 8) % 100}%`,
          top: `${(i * 23 + 4) % 100}%`,
          animationDelay: `${(i % 7) * -0.8}s`,
          animationDuration: `${3 + (i % 4)}s`
        }}>{i % 3 === 0 ? "✦" : i % 3 === 1 ? "·" : "✧"}</span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
      <div className="hero-inner">
        <div className="hero-overline"><span /> THE WORLD IS BETTER WITH YOU IN IT <span /></div>
        <div className="hero-crown"><Crown size={20} /><span>THE BIRTHDAY GIRL</span><Crown size={20} /></div>
        <div className="hero-heart-art"><div className="heart-ring ring-a" /><div className="heart-ring ring-b" /><div className="heart-core"><Heart size={55} fill="currentColor" strokeWidth={1} /></div><span className="heart-spark spark-a">✦</span><span className="heart-spark spark-b">✧</span><span className="heart-spark spark-c">♡</span></div>
        <p className="hero-pretitle">Happy Birthday to my</p>
        <h1 className="hero-title">Inaya<span className="title-period">.</span></h1>
        <div className="hero-subtitle"><span /> my Billi, my bestie <span /></div>
        <p className="hero-message">Aaj ka din sirf tera hai. And honestly, duniya ko thoda aur beautiful banane ke liye bas tera hona hi kaafi hai. 💗</p>
        <a className="hero-button" href="#little-things">Enter your little world <ArrowDown size={16} /></a>
        <div className="hero-bottom-note"><MoonStar size={15} /> a tiny website, a very big amount of love <Heart size={13} fill="currentColor" /></div>
      </div>
      <div className="hero-side-note">12 · 10 · FOREVER</div>
    </section>
  );
}

function LittleThings() {
  const things = [
    { n: "01", icon: "♡", title: "Teri smile", copy: "Teri ek smile boring se boring din ko bhi thoda special bana deti hai." },
    { n: "02", icon: "✧", title: "Teri pagalpan", copy: "Thodi drama queen, thodi cute si troublemaker — and completely irreplaceable." },
    { n: "03", icon: "✦", title: "Tera dil", copy: "I hope life tujhe utni hi kindness de, jitni tu apne aas-paas baantti hai." },
    { n: "04", icon: "∞", title: "Our bond", copy: "Bestie ek hi hai meri. Teri jagah kisi aur ko dene ka option hi nahi hai." },
  ];
  return (
    <section className="little-section section-pad" id="little-things">
      <div className="section-heading">
        <span className="eyebrow"><Stars size={14} /> THE LITTLE THINGS</span>
        <h2>Reasons you're<br /><em>one of a kind.</em></h2>
        <p>Just a few things about you that deserve a little spotlight.</p>
      </div>
      <div className="things-grid">
        {things.map((item, i) => (
          <article className={`thing-card thing-${i + 1}`} key={item.n}>
            <div className="thing-top"><span className="thing-number">{item.n}</span><span className="thing-symbol">{item.icon}</span></div>
            <h3>{item.title}</h3><p>{item.copy}</p><div className="thing-line" />
          </article>
        ))}
      </div>
    </section>
  );
}

function LoveLetter() {
  return (
    <section className="letter-section section-pad" id="letter">
      <div className="letter-aura" />
      <div className="letter-card">
        <div className="letter-header"><span><MailOpen size={15} /> A LETTER FOR BILLI</span><span className="letter-stamp">WITH LOVE ♡</span></div>
        <div className="letter-divider"><span /><Heart size={16} fill="currentColor" /><span /></div>
        <p className="letter-dear">Sun na, Billi…</p>
        <p>Aaj tere birthday par bas itna bolna hai — thank you for being <em>you.</em> Teri random baatein, teri hasi, tera cute sa pagalpan… these little things make our friendship special.</p>
        <p>Life hamesha perfect nahi hoti, but I hope tere paas hamesha reasons ho smile karne ke, people who genuinely care for you, aur dreams jo ek-ek karke poore hote jaayein.</p>
        <p>Khud ko kabhi kam mat samajhna. You deserve the softest happiness, the biggest wins, real love, peace of mind, and all the beautiful things this world can offer.</p>
        <p>Aur haan, chahe tu kitni bhi annoying ho jaaye… meri bestie toh tu hi rahegi. No exchange, no refund. 😂💗</p>
        <div className="letter-signoff">Always on your team,</div>
        <div className="letter-signature">{YOUR_NAME}<span> ♡</span></div>
        <div className="letter-bottom-flower">✿</div>
      </div>
    </section>
  );
}

function SecretSurprise() {
  const [opened, setOpened] = useState(false);
  return (
    <section className="surprise-section section-pad" id="surprise">
      <div className="section-heading surprise-heading">
        <span className="eyebrow"><LockKeyhole size={14} /> A LITTLE SECRET</span>
        <h2>One last thing,<br /><em>just for you.</em></h2>
        <p>There's a birthday wish waiting inside. Tap to unlock it. ✨</p>
      </div>
      <button className={`surprise-button ${opened ? "is-open" : ""}`} onClick={() => setOpened(v => !v)} aria-expanded={opened}>
        <span className="surprise-halo" /><span className="surprise-bow">୨୧</span>
        <span className="surprise-gift"><span className="gift-lid" /><span className="gift-ribbon-v" /><span className="gift-ribbon-h" /><span className="gift-star">✦</span></span>
        <span className="surprise-action">{opened ? "Close your little surprise" : "Tap to open your gift"} <Heart size={13} fill="currentColor" /></span>
      </button>
      {opened && (
        <div className="surprise-reveal">
          <div className="reveal-icons"><Sparkles size={22} /><Heart size={26} fill="currentColor" /><Sparkles size={22} /></div>
          <p className="reveal-kicker">A WISH FOR YOUR NEW YEAR</p>
          <h3>Keep shining, meri Billi.</h3>
          <p>May this year bring you unexpected happiness, peaceful days, loyal people, beautiful memories, courage for every dream, and a million tiny reasons to feel loved.</p>
          <div className="reveal-promise">One bestie. One bond. So many memories still to make. ♡</div>
        </div>
      )}
    </section>
  );
}

function FinalWish() {
  return (
    <footer className="final-section">
      <div className="footer-moon"><MoonStar size={28} /></div>
      <div className="footer-kicker"><PartyPopper size={15} /> HAPPY BIRTHDAY, INAYA <PartyPopper size={15} /></div>
      <h2>Stay golden,<br /><em>stay you.</em></h2>
      <p>Some people make life brighter just by being in it.<br />You're one of those people, Billi.</p>
      <div className="footer-heartline"><span /><Heart size={18} fill="currentColor" /><span /></div>
      <div className="footer-signature">with love, {YOUR_NAME} <span>♡</span></div>
      <div className="footer-date">{BIRTHDAY_DATE} <span>·</span> YOUR DAY, YOUR MAGIC</div>
      <a className="back-top" href="#home">Back to the beginning ↑</a>
    </footer>
  );
}

export default function Birthday() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.classList.add("birthday-body");
    return () => document.body.classList.remove("birthday-body");
  }, []);

  return (
    <main className="birthday-page">
      {!entered && <IntroScreen onEnter={() => setEntered(true)} />}
      <div className={`main-world ${entered ? "world-visible" : ""}`} aria-hidden={!entered}>
        <FloatingStars />
        <nav className="birthday-nav">
          <a href="#home" className="nav-logo"><span>♡</span> for {FRIEND_NAME}</a>
          <a href="#letter" className="nav-link">A little note <Heart size={12} /></a>
        </nav>
        <Hero />
        <LittleThings />
        <LoveLetter />
        <SecretSurprise />
        <FinalWish />
      </div>
    </main>
  );
}

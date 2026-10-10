
import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Heart,
  Sparkles,
  Cake,
  Gift,
  Music2,
} from "lucide-react";
import FloatingDecor from "./FloatingDecor";
import SecretLetter from "./SecretLetter";

const kittyFallback =
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85";

export default function BirthdayPage() {
  const [wished, setWished] = useState(false);
  const [photo, setPhoto] = useState("/inaya.jpg");

  function celebrate() {
    setWished(true);

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.65 },
      colors: ["#ffd6e7", "#e9c5ff", "#f8d78b", "#ffffff"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 65,
        spread: 120,
        startVelocity: 25,
        origin: { x: 0.5, y: 0.65 },
        colors: ["#ff8db7", "#c6a0ff", "#f8d78b"],
      });
    }, 350);
  }

  return (
    <div className="birthday-page">
      <FloatingDecor />

      <nav className="top-nav">
        <a className="brand-mark" href="#home">
          <Heart size={17} fill="currentColor" />
          <span>little universe</span>
        </a>
        <span className="nav-label">MADE JUST FOR INAYA ♡</span>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <div className="section-kicker">
            <Sparkles size={15} />
            TODAY IS ALL ABOUT YOU
          </div>

          <h1 className="hero-title">
            Happy Birthday,
            <br />
            <span>My Billi!</span>
          </h1>

          <p className="hero-description">
            To the sweetest soul, the prettiest smile,
            and my one-of-a-kind bestie.
          </p>

          <p className="hero-hindi">
            Aaj ka din tumhari tarah hi khoobsurat ho. ♡
          </p>

          <button
            className="magic-button hero-button"
            onClick={() => {
              document
                .getElementById("letter")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            A little something for you
            <Heart size={17} />
          </button>

          <div className="hero-signoff">
            <Heart size={15} fill="currentColor" />
            <span>From your bestie, Ashish</span>
          </div>
        </div>

        <div className="portrait-area">
          <div className="portrait-halo" />

          <div className="portrait-frame">
            <img
              src={photo}
              alt="A special birthday portrait for Inaya"
              onError={() => setPhoto(kittyFallback)}
            />

            <span className="portrait-badge badge-top">
              <Sparkles size={16} />
            </span>

            <span className="portrait-badge badge-bottom">
              <Heart size={19} fill="currentColor" />
            </span>
          </div>

          <div className="portrait-caption">
            <span>♡</span>
            <span>One very special girl</span>
            <span>♡</span>
          </div>

          <span className="orbit-word orbit-one">sweet soul</span>
          <span className="orbit-word orbit-two">bestie forever</span>
        </div>
      </section>

      <section className="birthday-wish">
        <div className="wish-icon">
          <Cake size={27} />
        </div>

        <p className="wish-overline">A WISH FROM MY HEART</p>

        <h2>
          You deserve a life full of
          <br />
          <span>little beautiful things.</span>
        </h2>

        <p className="wish-copy">
          May you always find reasons to laugh, courage
          to follow your dreams, and people who make you
          feel loved exactly as you are.
        </p>

        <div className="wish-pills">
          <span>More smiles</span>
          <span>Beautiful dreams</span>
          <span>Endless happiness</span>
        </div>
      </section>

      <section className="celebration-section">
        <div className="gift-icon">
          <Gift size={27} />
        </div>

        <p className="wish-overline">YOUR DAY, YOUR MAGIC</p>
        <h2>
          Make a little <span>wish, Billi!</span>
        </h2>

        <p className="section-description">
          Close your eyes for a second and wish for
          something your heart truly wants.
        </p>

        <div className="cake-illustration" aria-label="Birthday cake">
          <div className="cake-sparkle sparkle-left">✦</div>
          <div className="cake-sparkle sparkle-right">✧</div>
          <div className="cake-candles">
            <i />
            <i />
            <i />
          </div>
          <div className="cake-top" />
          <div className="cake-middle" />
          <div className="cake-bottom" />
          <div className="cake-plate" />
        </div>

        <button className="wish-button" onClick={celebrate}>
          {wished ? (
            <>
              <Heart size={18} fill="currentColor" />
              Your wish is on its way!
            </>
          ) : (
            <>
              <Sparkles size={18} />
              Make a wish!
            </>
          )}
        </button>

        {wished && (
          <p className="wish-confirmation">
            The universe is sending a little extra magic your way. ♡
          </p>
        )}
      </section>

      <SecretLetter />

      <footer className="birthday-footer">
        <Music2 size={17} />
        <p>
          Made with a little code, a lot of love,
          and one very special bestie in mind.
        </p>
        <div className="footer-heart">
          Happy Birthday, Inaya ♡
        </div>
        <span className="footer-credit">— Ashish</span>
      </footer>
    </div>
  );
}

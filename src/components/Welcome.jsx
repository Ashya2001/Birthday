
import { Heart, Sparkles, PawPrint } from "lucide-react";

export default function Welcome({ onEnter }) {
  return (
    <section className="welcome-screen">
      <div className="welcome-glow glow-one" />
      <div className="welcome-glow glow-two" />

      <div className="welcome-content">
        <span className="welcome-icon">
          <PawPrint size={22} />
        </span>

        <p className="eyebrow">
          A LITTLE SECRET FOR SOMEONE SPECIAL
        </p>

        <h1>
          Hey, <span>Billi!</span>
        </h1>

        <p className="welcome-copy">
          Someone has made a tiny little universe
          just to make you smile today.
        </p>

        <div className="welcome-divider">
          <span />
          <Heart size={15} fill="currentColor" />
          <span />
        </div>

        <p className="welcome-hint">
          No ordinary gift. Just a little piece of heart.
        </p>

        <button className="magic-button" onClick={onEnter}>
          Open your surprise
          <Sparkles size={18} />
        </button>

        <p className="made-with-love">
          Made with love by Ashish ♡
        </p>
      </div>
    </section>
  );
}

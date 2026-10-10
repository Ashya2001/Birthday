
import { useState } from "react";
import { Heart, MailOpen, Sparkles } from "lucide-react";

export default function SecretLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="letter-section" id="letter">
      <div className="section-kicker">
        <Sparkles size={15} /> A LITTLE NOTE FOR YOU
      </div>

      <h2>
        One last little <span>surprise...</span>
      </h2>

      <p className="section-description">
        Some feelings deserve their own little space.
      </p>

      {!opened ? (
        <button
          className="letter-button"
          onClick={() => setOpened(true)}
        >
          <MailOpen size={19} />
          Open your little letter
          <Heart size={16} />
        </button>
      ) : (
        <article className="letter-card">
          <div className="letter-heart">
            <Heart fill="currentColor" size={27} />
          </div>

          <p className="letter-greeting">Dear Inaya, my Billi,</p>

          <p>
            Happy Birthday to the girl who holds such a
            special place in my life. ♡
          </p>

          <p>
            Pata hai, duniya mein bahut log milte hain,
            lekin har koi apna nahi ban pata. Tum meri
            life ki un special people mein se ho jinki
            friendship mere liye genuinely precious hai.
          </p>

          <p>
            I hope your life is always filled with little
            reasons to smile, people who understand your
            heart, dreams that come true, and happiness
            that stays even after your birthday is over.
          </p>

          <p>
            Hamesha apni sweet si smile banaye rakhna,
            apna khayal rakhna, aur kabhi mat bhoolna
            ki tum bahut special ho. Tumhari friendship
            mere liye ek beautiful gift hai.
          </p>

          <p className="letter-signature">
            Always cheering for you,
            <br />
            <span>— Ashish ♡</span>
          </p>

          <div className="letter-bottom">
            <Heart size={14} fill="currentColor" />
            <span>One bestie. A thousand memories to make.</span>
            <Heart size={14} fill="currentColor" />
          </div>
        </article>
      )}
    </section>
  );
}

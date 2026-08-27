"use client";
import { useEffect, useState } from "react";
import { ChaosLayer } from "./ChaosLayer";

export default function Home() {
  const [blessings, setBlessings] = useState(0);
  const [visitorCount, setVisitorCount] = useState(42069);
  const [guestbook, setGuestbook] = useState("SIGN MY GUESTBOOK");
  const jumpTo = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  useEffect(() => {
    const savedBlessings = Number.parseInt(
      localStorage.getItem("ugandalen-blessings") ?? "0",
      10,
    );
    if (Number.isFinite(savedBlessings) && savedBlessings > 0)
      setBlessings(savedBlessings);
    const previousVisits = Number.parseInt(
      localStorage.getItem("ugandalen-visits") ?? "42068",
      10,
    );
    const nextVisit = Number.isFinite(previousVisits)
      ? previousVisits + 1
      : 42069;
    localStorage.setItem("ugandalen-visits", String(nextVisit));
    setVisitorCount(nextVisit);
    const visitorTicker = window.setInterval(() => {
      setVisitorCount((current) => {
        const next = current + Math.floor(Math.random() * 3) + 1;
        localStorage.setItem("ugandalen-visits", String(next));
        return next;
      });
    }, 1600);
    return () => window.clearInterval(visitorTicker);
  }, []);
  const blessPage = () => {
    setBlessings((current) => {
      const next = current + 1;
      localStorage.setItem("ugandalen-blessings", String(next));
      window.dispatchEvent(new Event("ugandalen-blessed"));
      return next;
    });
  };
  return (
    <main>
      <ChaosLayer blessings={blessings} />
      <div className="top-stripes" aria-hidden="true" />
      <div className="marquee" aria-label="Breaking news">
        <div className="marquee-track">
          ★ WELCOME TO UGANDALEN DOT COM ★ THE PEARL OF THE INTERNET ★ BEST
          VIEWED WITH YOUR EYES OPEN ★ NO HATERS ALLOWED ★ WELCOME TO UGANDALEN
          DOT COM ★ THE PEARL OF THE INTERNET ★ BEST VIEWED WITH YOUR EYES OPEN
          ★ NO HATERS ALLOWED ★
        </div>
      </div>
      <section className="page-shell">
        <header className="hero panel">
          <div className="construction">
            🚧 WEBSITE UNDER ETERNAL CONSTRUCTION 🚧
          </div>
          <img className="flag" src="/Flag-Uganda.webp" alt="Flag of Uganda" />
          <p className="eyebrow">OFFICIAL CYBER-HOME OF</p>
          <h1>UGANDALEN</h1>
          <p className="subtitle">
            THE UNIDENTIFIED DRIP PHENOMENON OF THE DIGITAL REALM
          </p>
          <div className="hero-grid">
            <div className="sticker sticker-one">
              100%
              <br />
              REAL
            </div>
            <div className="portrait-frame">
              <img
                src="/ugandalen_portrait.png"
                alt="The legendary Ugandalen"
              />
              <span>👑 SAY HIS NAME 👑</span>
            </div>
            <div className="sticker sticker-two">
              CERTIFIED
              <br />
              ICON
            </div>
          </div>
          <p className="blink">✨ YOU ARE WITNESSING GREATNESS ✨</p>
          <p className="blink">✨ HIS NAME IS UGANDALEN ✨</p>
        </header>
        <div className="content-grid">
          <aside className="panel side-panel">
            <h2>⚡ NAVIGATION ⚡</h2>
            <button className="nav-button" onClick={() => jumpTo("about")}>
              WHO IS HE?
            </button>
            <button className="nav-button" onClick={() => jumpTo("facts")}>
              FORBIDDEN LORE
            </button>
            <button className="nav-button" onClick={() => jumpTo("guestbook")}>
              GUESTBOOK
            </button>
            <button className="hot-button" onClick={blessPage}>
              BLESS THIS PAGE
            </button>
            <p className="blessing-count">
              Blessings received: <strong>{blessings}</strong>
            </p>
            <div className="award">
              🏆
              <br />
              <b>COOLEST SITE</b>
              <br />
              ON MY COMPUTER
              <br />
              <small>2026 WINNER</small>
            </div>
          </aside>
          <div className="content-stack">
            <section className="panel main-copy" id="about">
              <h2>🔥 WHO EVEN IS UGANDALEN? 🔥</h2>
              <p className="intro">
                <b>ATTENTION, INTERNET TRAVELLER!</b> You have entered the
                official cyber-archive of <span>Ugandalen</span>: the
                unidentified figure behind the most powerful outfit on the
                platform.
              </p>
              <p>
                Nobody knows who is inside. Ugandalen appears without warning,
                dressed head-to-toe in the sacred pattern, says little, serves
                an unreasonable amount of presence, then vanishes before
                witnesses can ask the important questions.
              </p>
              <p>
                The outfit has inspired devotion, confusion and several failed
                attempts at imitation. Is Ugandalen a person? A title? A signal
                transmitted through fabric? Investigation continues.
              </p>
              <div className="retired-quote" aria-hidden="true">
                <span>
                  “You do not find Ugandalen. Ugandalen finds you.”
                  <small>— ugdandalen witness</small>
                </span>
              </div>
              <div className="quote">
                &ldquo;You do not find Ugandalen. Ugandalen finds you.&rdquo;
                <small>&mdash; ugandalen witness</small>
              </div>
            </section>
            <section className="panel main-copy" id="facts">
              <h2>💯 TOTALLY VERIFIED FACTS 💯</h2>
              <ul className="facts">
                <li>🥽 Manifests when the vibe reaches critical levels</li>
                <li>
                  🧵 The outfit has never been seen twice in exactly the same
                  way
                </li>
                <li>
                  👁️ Nobody has confirmed the identity beneath the pattern
                </li>
                <li>📸 Every sighting produces at least one new believer</li>
                <li>🇺🇬 Removing the outfit is impossible</li>
              </ul>
            </section>
          </div>
        </div>
        <section className="panel guestbook" id="guestbook">
          <div>
            <h2>📖 THE SACRED GUESTBOOK 📖</h2>
            <p>
              Prove you were here before Ugandalen went globally extremely
              famous.
            </p>
          </div>
          <button
            onClick={() => setGuestbook("SIGNED!!! YOU ARE NOW LEGENDARY ✅")}
          >
            {guestbook}
          </button>
        </section>
        <footer className="panel">
          <p className="counter-label">YOU ARE VISITOR NUMBER</p>
          <div className="counter">
            {String(visitorCount).padStart(8, "0").split("").join(" ")}
          </div>
          <p>
            © 1997–FOREVER UGANDALEN INDUSTRIES • MADE WITH THE POWER OF UGANDA
          </p>
          <p className="tiny">
            This page is optimized for Netscape Navigator, a 640×480 monitor,
            and a complete lack of shame.
          </p>
        </footer>
      </section>
    </main>
  );
}

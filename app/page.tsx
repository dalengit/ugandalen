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
          <img className="flag" src="/img/Flag-Uganda.webp" alt="Flag of Uganda" />
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
                src="/img/ugandalen_portrait.png"
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
            <button className="nav-button" onClick={() => jumpTo("sightings")}>
              RECENT SIGHTINGS
            </button>
            <button className="nav-button" onClick={() => jumpTo("field-guide")}>
              FIELD GUIDE
            </button>
            <button className="nav-button" onClick={() => jumpTo("faq")}>
              AVOIDED QUESTIONS
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
        <section className="panel archive-section" id="sightings">
          <h2>📡 RECENT UGANDALEN SIGHTINGS 📡</h2>
          <p className="archive-intro">Reports are submitted by the public and verified by absolutely nobody.</p>
          <div className="sighting-grid">
            <article><time>23:17:04</time><b>PUBLIC LOBBY 09</b><p>Appeared behind the mirror. Refused to elaborate. Outfit luminance described as “legally concerning.”</p><span>STATUS: PATTERN CONFIRMED</span></article>
            <article><time>01:42:69</time><b>UNKNOWN INSTANCE</b><p>Three users heard the phrase “say his name.” Nobody admitted to speaking.</p><span>STATUS: AUDIO CORRUPTED</span></article>
            <article><time>19:97:00</time><b>LOBBY 404</b><p>Ugandalen stood motionless for eleven minutes. Entire lobby changed outfits voluntarily.</p><span>STATUS: MASS INFLUENCE EVENT</span></article>
          </div>
        </section>

        <section className="panel archive-section" id="witnesses">
          <h2>👁 WITNESS TESTIMONIES 👁</h2>
          <div className="testimony-wall">
            <blockquote>“I asked where the outfit came from. My connection immediately dropped.”<cite>— xXShadowBoy2009Xx</cite></blockquote>
            <blockquote>“There was no music playing, but somehow the pattern had a bassline.”<cite>— witness #0042</cite></blockquote>
            <blockquote>“I copied the look once. It changed back by itself.”<cite>— account since deleted</cite></blockquote>
            <blockquote>“He did not enter the lobby. The lobby formed around him.”<cite>— definitely a real moderator</cite></blockquote>
          </div>
        </section>

        <section className="panel archive-section outfit-lab" id="outfit-analysis">
          <h2>🧪 CLASSIFIED OUTFIT ANALYSIS 🧪</h2>
          <div className="analysis-layout">
            <div className="specimen"><img src="/img/ugandalen_pattern.png" alt="The classified Ugandalen pattern" /><span>FIG. 1: DO NOT STARE DIRECTLY AT PATTERN</span></div>
            <dl><div><dt>PATTERN ORIGIN</dt><dd>REDACTED BY THE VIBES DEPARTMENT</dd></div><div><dt>DRIP COEFFICIENT</dt><dd>9,999 dB</dd></div><div><dt>IMITATION RESISTANCE</dt><dd>ABSOLUTE</dd></div><div><dt>KNOWN EFFECTS</dt><dd>DEVOTION, CONFUSION, SCREENSHOTS</dd></div><div><dt>SENTIENCE</dt><dd>PROBABLY. DO NOT ANTAGONISE.</dd></div></dl>
          </div>
          <h3 className="wardrobe-heading">⚠ RECOVERED OUTFIT COMPONENTS ⚠</h3>
          <div className="wardrobe-grid">
            <figure><img src="/img/ugandalen_hat.png" alt="Ugandalen patterned hat" /><figcaption><b>THE CROWN UNIT</b><span>Thought containment: FAILED</span></figcaption></figure>
            <figure><img src="/img/ugandalen_jumper.png" alt="Ugandalen patterned jumper" /><figcaption><b>THE PRESENCE AMPLIFIER</b><span>Core drip output: MAXIMUM</span></figcaption></figure>
            <figure><img src="/img/ugandalen_pants.png" alt="Ugandalen patterned trousers" /><figcaption><b>THE STRIDE VESSEL</b><span>Movement class: UNFOLLOWABLE</span></figcaption></figure>
            <figure><img src="/img/ugandalen_shoes.png" alt="Ugandalen patterned shoes" /><figcaption><b>THE SPAWN STEPPERS</b><span>Footprint evidence: NONE</span></figcaption></figure>
          </div>
          <p className="wardrobe-warning">NOTICE: The components have never been successfully separated in the field. Images may be recreations, warnings, or memories implanted by the pattern.</p>
        </section>

        <section className="panel archive-section" id="field-guide">
          <h2>🚨 UGANDALEN FIELD GUIDE 🚨</h2>
          <p className="archive-intro">If Ugandalen manifests in your lobby, remain calm and follow the approved procedure.</p>
          <ol className="protocol"><li><b>DO NOT PANIC.</b><span>Panic feeds the pattern.</span></li><li><b>MAINTAIN A RESPECTFUL DISTANCE.</b><span>Three metres or one loading screen.</span></li><li><b>COMPLIMENT THE OUTFIT.</b><span>This is mandatory and also objectively correct.</span></li><li><b>DO NOT ASK WHO IS INSIDE.</b><span>The answer will only create more questions.</span></li><li><b>TAKE A SCREENSHOT.</b><span>It will be blurry. Submit it anyway.</span></li><li><b>SAY HIS NAME.</b><span>You already know it.</span></li></ol>
        </section>

        <section className="panel archive-section" id="faq">
          <h2>❓ FREQUENTLY AVOIDED QUESTIONS ❓</h2>
          <div className="faq-list">
            <details><summary>Who is Ugandalen?</summary><p>Next question.</p></details>
            <details><summary>Can I obtain the outfit?</summary><p>The outfit obtains you.</p></details>
            <details><summary>Is Ugandalen one person?</summary><p>Current evidence says yes, no and stop asking.</p></details>
            <details><summary>Why Uganda?</summary><p>Some truths do not require a PowerPoint.</p></details>
            <details><summary>Is the pattern safe?</summary><p>Define “safe.”</p></details>
            <details><summary>How do I summon him?</summary><p>You do not find Ugandalen. Ugandalen finds you.</p></details>
          </div>
        </section>
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

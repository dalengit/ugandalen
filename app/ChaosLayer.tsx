"use client";

import { useEffect, useRef, useState } from "react";

type TrailDot = { id: number; x: number; y: number };

const transmissions = [
  "OUTFIT SIGNAL DETECTED IN LOBBY 7",
  "IDENTITY SCAN: INCONCLUSIVE",
  "PATTERN DENSITY APPROACHING CRITICAL",
  "ANOTHER WITNESS HAS REFUSED TO ELABORATE",
  "UGANDALEN MAY ALREADY BE BEHIND YOU",
];

export function ChaosLayer({ blessings }: { blessings: number }) {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState("UGANDALEN SIGNAL ACQUIRED");
  const [transmission, setTransmission] = useState(transmissions[0]);
  const [watchers, setWatchers] = useState(73);
  const [corruption, setCorruption] = useState(0);
  const [overdrive, setOverdrive] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const typedRef = useRef("");

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2100);
    const move = (event: PointerEvent) => {
      const dot = { id: Date.now() + Math.random(), x: event.clientX, y: event.clientY };
      setTrail((old) => [...old.slice(-18), dot]);
    };
    const key = (event: KeyboardEvent) => {
      typedRef.current = (typedRef.current + event.key.toUpperCase()).slice(-9);
      if (typedRef.current === "UGANDALEN") setOverdrive((value) => !value);
    };
    const blessing = () => {
      document.body.classList.remove("blessing-quake");
      void document.body.offsetWidth;
      document.body.classList.add("blessing-quake");
      window.setTimeout(() => document.body.classList.remove("blessing-quake"), 550);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("keydown", key);
    window.addEventListener("ugandalen-blessed", blessing);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("keydown", key);
      window.removeEventListener("ugandalen-blessed", blessing);
    };
  }, []);

  useEffect(() => {
    const chaos = window.setInterval(() => {
      setAlert([
        "⚠ UGANDALEN HAS SPAWNED ⚠",
        "⚠ OUTFIT POWER EXCEEDS SAFE LEVELS ⚠",
        "⚠ DO NOT ATTEMPT TO COPY THE PATTERN ⚠",
      ][Math.floor(Math.random() * 3)]);
      setWatchers((count) => count + Math.floor(Math.random() * 8) + 1);
    }, 5200);
    const lore = window.setInterval(() => {
      setTransmission(transmissions[Math.floor(Math.random() * transmissions.length)]);
    }, 3100);
    return () => { window.clearInterval(chaos); window.clearInterval(lore); };
  }, []);

  useEffect(() => {
    document.body.dataset.corruption = String(corruption);
    return () => { delete document.body.dataset.corruption; };
  }, [corruption]);

  useEffect(() => {
    document.body.classList.toggle("ugandalen-overdrive", overdrive);
    return () => document.body.classList.remove("ugandalen-overdrive");
  }, [overdrive]);

  const toggleSound = () => {
    if (soundOn) {
      audioRef.current?.close();
      audioRef.current = null;
      setSoundOn(false);
      return;
    }
    const AudioEngine = window.AudioContext || window.webkitAudioContext;
    const context = new AudioEngine();
    audioRef.current = context;
    const playBlip = () => {
      if (context.state === "closed") return;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "square";
      oscillator.frequency.value = [110, 146, 196, 220][Math.floor(Math.random() * 4)];
      gain.gain.setValueAtTime(0.035, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.14);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.14);
    };
    playBlip();
    const soundTimer = window.setInterval(playBlip, 420);
    context.addEventListener("statechange", () => {
      if (context.state === "closed") window.clearInterval(soundTimer);
    });
    setSoundOn(true);
  };

  const corrupt = () => setCorruption((level) => Math.min(level + 1, 5));

  return (
    <>
      {loading && <div className="chaos-loader"><b>DOWNLOADING MORE UGANDALEN...</b><span><i /></span><small>PLEASE DO NOT TURN OFF YOUR MODEM</small></div>}
      <div className="falling-flags" aria-hidden="true">{Array.from({ length: 16 }, (_, i) => <span key={i} style={{ "--i": i } as React.CSSProperties}><img src="/img/Flag-Uganda.webp" alt="" /></span>)}</div>
      <div className="cursor-trail" aria-hidden="true">{trail.map((dot) => <img key={dot.id} src="/img/ugandalen_portrait.png" alt="" style={{ left: dot.x, top: dot.y }} />)}</div>
      <div className="bouncer" aria-hidden="true"><img src="/img/ugandalen_portrait.png" alt="" /></div>
      <aside className="system-alert">{alert}</aside>
      <aside className="lore-transmission">📡 INCOMING TRANSMISSION:<br /><b>{transmission}</b></aside>
      <aside className="watcher-counter">🔴 LIVE<br /><b>UGANDALEN IS WATCHING</b><br />{watchers} USERS</aside>
      <aside className="power-meter"><b>OUTFIT POWER</b><span><i /></span><strong>{9999 + blessings}%</strong></aside>
      {blessings > 0 && blessings % 5 === 0 && <div className="milestone-lightning" aria-hidden="true" />}
      <div className="chaos-controls">
        <button onClick={toggleSound}>{soundOn ? "🔇 SILENCE THE MIDI" : "🔊 ENABLE CURSED MIDI"}</button>
        <button className="do-not-click" onClick={corrupt}>☢ DO NOT CLICK ({corruption}/5)</button>
        <button onClick={() => setOverdrive((value) => !value)}>⚡ {overdrive ? "DISABLE" : "ENABLE"} OVERDRIVE</button>
      </div>
      {corruption >= 5 && <div className="corruption-message">YOU WERE WARNED.<br />UGANDALEN OWNS THIS BROWSER NOW.</div>}
    </>
  );
}

declare global {
  interface Window { webkitAudioContext: typeof AudioContext; }
}

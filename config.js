/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "John Favour",
  photo: "./img/Favour.jpg",       // Place your photo in the img/ folder
  music: "./music/Happy Birthday Song in Japanese [お誕生日のうた].mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#7B3F00",           // Main accent color (rose pink)
    accent: "#D2691E",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi.",
      subtitle: "I know you didn't expect this.",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "I caught you smiling.",
    },
    {
      type: "chatbox",
      message: "Here comes your lil surprise..",
    
      buttonText: "Click",
    },
    {
      type: "ideas",
      lines: [
        "Thought that's what its gonna be.",
        "But rather than that.",
        "I ought to consider something out of <strong>complexity</strong>",
        "Because",
        "You are more than your doubt <span></span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "The North Star is exactly in its place for you.",
      author: "Ryuichi",
    },
    {
      type: "solar system",
      count: 10,
    },
    {
      type: "stars",
      count: 100,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday.",
      wishText: "Should you never lose yourself.",
    },
    {
      type: "fireworks",
      count: 16,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Well what do you think.",
      replayText: "Click, if you want to watch it again."
    },
    ]
    }

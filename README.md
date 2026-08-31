# 🧮 React Expression Calculator

> **A clean, responsive arithmetic calculator built with React 19 and Vite — featuring real-time expression evaluation, bracket support, and dynamic result previews.**

---

## 📖 Overview

**React Expression Calculator** is an intuitive, web-based calculator designed for fast and seamless arithmetic operations. Built with a component-driven React architecture, it supports standard mathematical operators, floating-point decimals, parentheses grouping for order of operations, granular backspace deletion, and a live calculation preview that displays the answer dynamically before hitting equals.

- **What it does**: Takes user inputs as mathematical tokens, dynamically renders the expression chain, safely calculates intermediate results in real-time, and surfaces final answers upon evaluation.
- **Target audience**: Students, developers, and users looking for a clean, distraction-free, and snappy web calculator.
- **Key benefits**:
  - **Live Evaluation**: Shows real-time computed results as you type valid mathematical expressions.
  - **Parentheses Support**: Allows grouping and sub-expressions `(` and `)` with standard operator precedence.
  - **Modular Architecture**: Clean separation between state management and reusable button components (`Btn.jsx`).
  - **Zero External UI Libraries**: Fast, lightweight vanilla CSS and modern React 19.

---

## ✨ Features

- [x] **Real-Time Live Calculation** — Dynamically evaluates expressions as they are typed, displaying a subtle preview of the answer.
- [x] **Order of Operations & Parentheses** — Full support for bracketed expressions `(` and `)` adhering to standard PEMDAS/BODMAS math rules.
- [x] **Standard Arithmetic Operators** — Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), and Decimals (`.`).
- [x] **Granular Backspace (`<X`)** — Delete the most recent character or token without clearing the entire screen.
- [x] **Full Clear (`clear`)** — Instantly resets the calculator screen and calculation state.
- [x] **Fault-Tolerant Math Parser** — Gracefully handles incomplete or malformed expressions during live preview without crashing.
- [x] **Responsive Retro UI** — Centered keypad layout with custom styling, hover states, and clear visual hierarchy.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 19.2+ |
| Build Tool | Vite 8.2+ |
| Styling | CSS3 (Grid / Flexbox layout) |
| Language | JavaScript (ES6+ / JSX) |
| Runtime | Node.js (Browser execution) |

**Third-party UI libraries: None.** Pure React 19 and modern CSS.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** or **yarn** / **pnpm**
- A modern web browser

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jayansh16/calculator.git
cd calculator

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser to use the calculator.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 🎮 How to Use

### Keypad Mapping

| Key | Action / Function |
|---|---|
| `0` – `9` | Numeric digits input |
| `.` | Decimal point |
| `+`, `-`, `*`, `/` | Basic arithmetic operators |
| `(`, `)` | Parentheses for sub-expressions / order of operations |
| `<X` | Backspace (removes the last entered character) |
| `clear` | Resets the screen and clears memory |
| `=` | Commits calculation and displays final answer |

### Example Walkthroughs

- **Basic Arithmetic**:
  ```text
  Input: 25 * 4 + 10
  Live Preview: 110
  Press [=] → Displays 110 in primary display
  ```

- **Parentheses & Operator Precedence**:
  ```text
  Input: (15 + 5) * (10 - 6)
  Live Preview: 80
  Press [=] → Displays 80
  ```

- **Editing Mistyped Input**:
  ```text
  Input: 125 * 55
  Press [<X] → 125 * 5
  Input: 2 → 125 * 52
  ```

---

## 📁 Project Structure

```text
calculator/
├── main/
│   ├── app.jsx           # Core calculator logic, evaluation engine & screen state
│   ├── btn.jsx           # Reusable Button component
│   ├── main.jsx          # React DOM root render
│   └── style.css         # Keypad grid styling, screen display & button themes
├── index.html            # Web entry point
├── package.json          # Project configuration & React 19 dependencies
└── README.md
```

### Code Map

| File / Component | Responsibility |
|---|---|
| `main/app.jsx` | Maintains `screen` token array and `ansshown` boolean state; evaluates mathematical expressions safely using `new Function()`; dispatches input events. |
| `main/btn.jsx` | Functional button component rendering values and handling click actions with dynamic class naming (`val-btn` vs `equal-btn`). |
| `main/style.css` | Implements keypad layout, responsive sizing, active/hover transitions, and display typography. |
| `main/main.jsx` | Mounts the root component into the DOM. |

---

## 🗺️ Roadmap

- [ ] Keyboard event listeners (type directly from physical keyboard numpad)
- [ ] Scientific calculator functions (`sin`, `cos`, `tan`, `sqrt`, `^`, `%`)
- [ ] Calculation history log panel (review past computations)
- [ ] Light / Dark theme toggle
- [ ] Copy result to clipboard button

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👤 Contact & Support

- **Author**: [jayansh16](https://github.com/jayansh16)
- **Repository**: [https://github.com/jayansh16/calculator](https://github.com/jayansh16/calculator)
- **Issues**: [GitHub Issues](https://github.com/jayansh16/calculator/issues)

---

## 🙏 Acknowledgments

- Built with React 19 and Vite.
- Designed with simplicity and clean component structure in mind.

---

**Made with ❤️ by [jayansh16](https://github.com/jayansh16)**

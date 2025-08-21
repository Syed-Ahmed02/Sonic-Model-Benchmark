# 🎮 Sonic AI Landing Page

A fun, interactive landing page that promotes the Sonic AI model, built to test the capabilities of different AI models using a creative prompt.

## 🚀 Project Overview

This project was created to test how well different AI models can handle creative, detailed prompts that require:
- **Visual Design**: Creating a cohesive theme with specific color palettes
- **Interactive Elements**: Implementing animations and gamification
- **Content Strategy**: Crafting engaging sections with character integration
- **Technical Implementation**: Building a complete, functional web application

## 🎯 The Test Prompt

The following prompt was used to test AI model capabilities:

```
Create a fun, interactive landing page that promotes the Sonic AI model. The page should:

THEME & CHARACTERS:
- Feature characters from the original Sonic the Hedgehog movie (Sonic, Dr. Robotnik/Eggman, Tails, etc.)
- Use the movie's visual style and color palette (blues, golds, tech elements)

INTERACTIVE ELEMENTS:
- Animated Sonic running across the screen when users scroll
- Speed-themed transitions and hover effects
- Ring collection animation or counter
- Chaos Emerald power-up effects for key features

CONTENT SECTIONS:
- Hero section with Sonic introducing the AI model
- "Gotta Go Fast" speed demonstrations of the model's capabilities
- Dr. Robotnik's "evil" testimonial about how powerful the AI is
- Feature showcase with ring-collecting gamification
- Call-to-action styled as "Join Sonic's Adventure"

Make it feel like users are entering Sonic's world while learning about the AI's capabilities
```

## ✨ Features Implemented

### 🎨 Sonic Movie Theme
- **Color Palette**: Sonic blue (#0066CC), gold (#FFD700), chaos emerald cyan, Robotnik's evil purple
- **Typography**: Press Start 2P font for classic gaming feel
- **Visual Style**: Dark gradients with blue-purple-indigo backgrounds

### 🏃‍♂️ Interactive Animations
- **Running Sonic**: Animated character that runs across the screen
- **Ring Collection**: 7 rings to collect through feature interactions
- **Chaos Emeralds**: Floating background elements with color-changing effects
- **Speed Demonstrations**: Instant speed demo overlay
- **Hover Effects**: Scale transforms and color transitions

### 📱 Complete Page Sections

1. **Hero Section**
   - Animated Sonic character introduction
   - "Gotta Go Fast!" tagline
   - Interactive speed demo button
   - Live ring collection counter

2. **Speed Demo Section**
   - "Gotta Go Fast!" showcase
   - Three feature cards (Instant Response, Precision, Power)
   - Sonic-themed descriptions

3. **Robotnik Testimonial**
   - Evil Doctor Robotnik character SVG
   - Humorous villain testimonial
   - Evil laughter effects floating in background

4. **Feature Showcase**
   - 6 interactive feature cards with ring collection
   - Click to collect rings (gamification)
   - Chaos Emeralds unlock message at 7 rings
   - Features: Code Generation, Problem Solving, Creative Writing, Data Analysis, Learning, Translation

5. **Call-to-Action**
   - "Join Sonic's Adventure!" section
   - Adventure-themed buttons
   - Yellow-to-red gradient background

## 🛠️ Technical Stack

- **Framework**: Next.js 15.5.0 with Turbopack
- **Styling**: Tailwind CSS with custom CSS animations
- **Language**: TypeScript
- **Fonts**: Google Fonts (Press Start 2P)
- **Animations**: CSS keyframes and React state management

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sonic-vibes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Testing Different AI Models

This project serves as a benchmark to test how well different AI models can:

- **Follow Complex Instructions**: The prompt includes multiple detailed requirements
- **Create Cohesive Designs**: Maintaining a consistent theme throughout
- **Implement Interactive Elements**: Building functional animations and interactions
- **Generate Engaging Content**: Crafting compelling copy that fits the theme
- **Handle Technical Implementation**: Producing working code with proper structure

### What to Look For When Testing:

1. **Prompt Adherence**: How closely does the model follow the original prompt?
2. **Visual Consistency**: Does the design maintain the Sonic movie aesthetic?
3. **Interactive Functionality**: Are the animations and interactions working?
4. **Code Quality**: Is the implementation clean and maintainable?
5. **Creativity**: Does the model add unique touches beyond the basic requirements?

## 🎮 Interactive Elements

- **Ring Collection System**: Click features to collect rings
- **Speed Demo Toggle**: Interactive speed demonstration
- **Hover Animations**: Scale effects and color transitions
- **Floating Elements**: Animated Chaos Emeralds in background
- **Scroll-based Interactions**: Dynamic elements that respond to scrolling

## 🎨 Custom CSS Animations

The project includes several custom animations:
- `sonicRun`: Sonic running across the screen
- `spinDash`: Sonic's signature spin dash move
- `ringPulse`: Ring collection animation
- `chaosEmerald`: Chaos Emerald power effects
- `float`: Floating background elements

## 📝 Project Structure

```
sonic-vibes/
├── src/
│   └── app/
│       ├── globals.css      # Sonic-themed styles and animations
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Main landing page component
├── public/                  # Static assets
├── package.json
└── README.md
```

## 🤝 Contributing

This is a test project, but contributions are welcome! Feel free to:
- Add new interactive elements
- Improve animations
- Enhance the Sonic theme
- Add more character interactions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with 💙 and Chaos Energy by Sonic AI**

*"Gotta Go Fast!"* ⚡

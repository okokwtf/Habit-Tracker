# HabitFlow - Couple's Edition ❤️

A beautiful, privacy-focused habit tracking and wellness app built for couples. Track habits, focus sessions, budgets, journaling, and more - all while staying connected with your partner.

## ✨ Features

### 🎯 Habit Tracking
- Personalized habit tracking with custom categories
- Streak counter - keep track of your consistency
- Habit completion progress bars
- Visual weekly chart showing your progress
- Drag-and-drop reordering
- Swipe gestures: right to complete, left to delete
- Habit categories (Fitness, Wellness, Study, etc.)
- Category filter to view specific habit types

### ⏱️ Focus Timer
- Pomodoro timer (15m, 25m, 45m, 60m options)
- Circular progress indicator
- Start, pause, and reset controls
- Visual timer with ring animation

### 💰 Budget Tracker
- Track daily, monthly, or yearly expenses
- Category breakdown with visual bars
- Monthly budget target with progress indicator
- Recent expenses list
- Filter by time period

### 📓 Journal & Planning
- Calendar planner with date selection
- Add notes/reminders to any date
- Scratchpad for quick notes
- Voice memos (device only)

### ❤️ Partner Sync
- Real-time partner progress tracking
- Nudge your partner to stay on track
- Partner's streak counter
- Daily love notes from your partner

### 🎨 Customization
- Multiple themes (Dark, Light, Dark Glass, True Dark, Auto)
- Custom accent color picker
- Adjustable glow intensity
- Personal profile (Grv/Eku mode)

### 🔔 Smart Reminders
- Daily notification reminders
- Browser notifications (work outside app)
- Vibration feedback
- Milestone celebrations with confetti

### 📱 PWA Features
- Install as app on home screen
- Offline mode support
- Work like a native app
- Push notifications

## 🎨 Themes

| Theme | Description |
|-------|-------------|
| **Dark** | Classic dark mode with neon accents |
| **Light** | Clean white theme for readability |
| **Dark Glass** | Semi-transparent frosted glass effect |
| **True Dark** | Pure black for OLED displays |
| **Auto** | Automatically switches based on system theme |

## 🚀 Installation

### Browser Version
Just open the `index.html` file in your browser.

### PWA (Install to Home Screen)
1. Open the app in your mobile browser
2. Tap the share/share button
3. Select "Add to Home Screen"
4. Launch from your home screen

### GitHub Installation
1. Download or clone this repository
2. Open `index.html` in your browser
3. For offline use, enable service worker caching

## 📁 File Structure

```
habitflow/
├── index.html          # Main application file
├── manifest.json       # PWA manifest for installation
├── sw.js               # Service worker for offline support
└── icons/              # App icons for installation
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-maskable-512.png
    ├── apple-touch-icon.png
    ├── favicon-32.png
    └── favicon-48.png
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **Vanilla JavaScript** - No framework dependencies
- **Firebase** - Real-time partner sync
- **Service Worker API** - Offline support
- **Web Notifications API** - Browser notifications
- **Local Storage** - Data persistence

## 🎯 How to Use

1. **Select Your Profile** - Choose "Grv's Side" or "Eku's Side"
2. **Add Habits** - Tap the + button to create new habits
3. **Track Progress** - Toggle habits to mark complete
4. **Check Partner** - View partner's daily progress
5. **Customize** - Change themes and colors in Settings

## 🔐 Privacy

- All data stored locally in browser storage
- Firebase sync only for partner progress
- No personal data sent to third parties
- Voice memos are device-only

## 📝 License

Personal use - created with love for couples.

## 💖 Credits

Built by Grv for Eku ❤️

---

*Made with ❤️ for couples who want to grow together*

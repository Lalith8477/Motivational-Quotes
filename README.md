# 🌞 Daily Motivation Dashboard

## 🧩 Problem Context

Students need daily motivation. This app fetches random motivational quotes and allows users to like their favorites.

---

## 🚀 Features

### 🔄 Quote System
- Fetch random quote using API
- Load quote on page start (`useEffect`)
- "New Quote" button to fetch new quote

### ❤️ Like System
- Like / Unlike quotes
- Toggle liked state
- Store liked quotes in array

### 📊 Stats
- Display total number of liked quotes

### ⏳ UI States
- Show loading text while fetching
- Disable buttons during API call

---

## 💾 Bonus Features

- Store liked quotes in `localStorage`
- Persist likes after refresh
- Show list of all liked quotes

---

## 🛠️ Tech Stack

- React (Functional Components)
- useState
- useEffect
- Fetch API
- localStorage

---

## 📡 API Used

https://api.quotable.io/random

---

## 📂 State Management

- quote → stores current quote  
- author → stores quote author  
- loading → API loading state  
- likedQuotes → array of liked quotes  

---

## ⚙️ App Flow

### 1. Load App
- Fetch random quote using `useEffect`

### 2. New Quote Button
- Fetch new quote from API
- Disabled while loading

### 3. Like Button
- Toggle quote in liked list
- Update liked count

### 4. Persistence (Bonus)
- Save liked quotes to localStorage
- Load saved quotes on startup

---

## 🖥️ UI Behavior

- Shows loading state when fetching
- Buttons disabled during API call
- Displays quote and author
- Like button toggles state instantly

---

## 📦 Setup

```bash
git clone https://github.com/your-username/daily-motivation-dashboard.git
cd daily-motivation-dashboard
npm install
npm start
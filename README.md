<p align="center">
    <img alt="retroachievements" src="https://github.com/user-attachments/assets/7abac26d-1c72-4323-aa97-1873d0e5bca5"/>
</p>

<div align="center">
   
   [![Extension](https://img.shields.io/badge/Type-Chrome%20Extension-blue)](https://developer.chrome.com/docs/extensions/)
   [![Version](https://img.shields.io/badge/Version-v1.0-blueviolet)](https://github.com/yourusername/ra-beaten-toggle)   
</div>

## 🧩 Project

**RA Beaten Toggle** is a Chrome extension that adds a checkbox to the [RetroAchievements](https://retroachievements.org) user page.  
When enabled, the checkbox hides all games marked as **Beaten**, allowing you to focus only on what remains.  
Uncheck it anytime to bring them back.

## ⚙️ Features
- Adds a "Hide beaten games" checkbox to the completed games section.  
- Dynamically hides/shows items with `title*="Beaten"`.  
- Saves user preference using `localStorage`, keeping the state after page reload.  
- Keeps the original "Hide completed games" checkbox side by side with the new control.  

## 🚀 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/lucasfsilva94/ra-beaten-toggle.git

2. Open Google Chrome and go to:
   ```bash
   chrome://extensions/
  
3. Enable **Developer Mode**.

4. Click **Load unpacked**.

5. Select the project folder.

6. Open your RetroAchievements user page (https://retroachievements.org/user/...) and see the extension in action.   

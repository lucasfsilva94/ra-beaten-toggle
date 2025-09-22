<p align="center">
    <img alt="retroachievements" src="https://github-production-user-asset-6210df.s3.amazonaws.com/22107794/492061015-3eaa57c4-d2b0-4b18-a577-78a109bbeb2c.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250921%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250921T212210Z&X-Amz-Expires=300&X-Amz-Signature=158cb45519ca2ff4ca29fe942b4a01f5ee0b595b3b2293f910d69e365e9e203f&X-Amz-SignedHeaders=host"/>
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

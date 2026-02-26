# Tariff Blocker

A lightweight browser extension that replaces specific words on websites.

## What It Does

- Scans webpages automatically
- Detects predefined words
- Replaces them instantly
- Runs silently in the background; no tracking, no external libraries, no background scripts

## How It Works

The extension uses a content script that:

1. Walks through the DOM tree
2. Finds text nodes
3. Replaces matching words using regular expressions

It runs on all URLs using `<all_urls>` permission.

## Installation (Temporary Load)

### Firefox

1. Open `about:debugging`
2. Click **This Firefox**
3. Click **Load Temporary Add-on**
4. Select `manifest.json`

### Chrome / Chromium-based Browsers (Chrome, Edge, Brave, Opera)

1. Open `chrome://extensions/`
2. Enable Developer Mode
3. Click **Load unpacked**
4. Select the extension folder

## Project Structure

- `manifest.json` — defines the extension
- `content.js` — content script that replaces words

## Possible Future Improvements

- Add popup ON/OFF toggle
- Allow users to add/remove custom words
- Convert to Manifest V3
- Skip `<input>` and `<textarea>` fields
- Support dynamically loaded content (using MutationObserver)

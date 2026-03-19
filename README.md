# OnlyFans Downloader — Save Videos, Images, and Posts

A browser extension that downloads videos, images, GIFs, and text posts from OnlyFans directly to your computer. Navigate to any creator's page, and the extension detects all visible media. Download individually with overlay buttons or use bulk tools to save everything at once. All videos are saved as MP4. No external software needed.

**Product page:** https://serp.ly/onlyfans-downloade<br>
**Help center:** [https://help.serp.co/en/](https://help.serp.co/en/)<br>
**Latest release:** [https://github.com/serpapps/onlyfans-downloader/releases/latest](https://github.com/serpapps/onlyfans-downloader/releases/latest)

## Why

OnlyFans uses HLS streaming, so you cannot right-click and save videos. There is no built-in download option for images or posts. The OnlyFans API requires signed requests, which means generic download tools fail. Manually saving content one item at a time is slow and frustrating. This extension handles all of that inside your browser, with no desktop software or command-line tools required.

## Key features

- In-page download overlay buttons on every image and video
- Bulk gallery scanner with auto-scroll to collect all media from a creator's page
- Automatic HLS-to-MP4 conversion in the browser
- Per-creator folder organization (OnlyFans/{creator}/Videos/)
- Side panel UI with tabs for Videos, Images/GIFs, Text, and Bulk
- Real-time download manager with progress, speed, and cancel controls
- DRM detection that flags protected content before download attempts
- File System Access API lets you choose a save folder for bulk operations

## How it works

1. **Install** the extension in your browser.
2. **Browse** to any OnlyFans creator's page while logged in.
3. **Download** individual items using the overlay buttons that appear on each photo and video, or open the side panel for bulk tools.
4. **Save** — videos are saved as MP4, images in their original format, all organized by creator.

## Supported formats

- **Video output:** MP4 (converted automatically from HLS streams)
- **Video quality:** 720p, 1080p, source, and original depending on availability
- **Images:** JPG, PNG, GIF, WebP, AVIF in original quality
- **Text posts:** Saved as-is

## Who it's for

- OnlyFans subscribers who want to save content they have paid for
- Users who want to archive creator media for offline viewing
- Anyone who wants a simple, reliable download solution without desktop apps or command-line tools

## Common use cases

- Save a video from an OnlyFans post for offline viewing
- Download all images from a creator's media gallery
- Archive an entire creator's content library using bulk tools
- Organize downloads by creator into named subfolders automatically

## Trial & access

Trial downloads are included when you sign in with your email. No credit card required. For unlimited downloads, upgrade to a license at the product page.

## FAQ

**How do I download a video**
Go to any OnlyFans page with video content, hover over the video, and click the download overlay button. You can also open the side panel and select the video from the list.

**Can I download images and GIFs too**
Yes. The extension detects videos, images, GIFs, and text posts. Each media item gets a download overlay button, and the side panel organizes content by type.

**How does bulk download work**
Open the Bulk tab in the side panel. The extension auto-scrolls through the creator's media page, detects all content, and downloads everything. You can filter by media type.

**What format are downloaded videos**
All videos are saved as standard MP4 files that play on any device or media player. HLS streams are converted automatically.

**Where are my downloads saved**
Videos save to an OnlyFans/{creator}/Videos/ subfolder inside your Downloads directory. For bulk operations, you can choose a custom folder.

**Why does a video show "DRM Protected"**
Some OnlyFans content uses DRM encryption. The extension detects this and notifies you before attempting a download. DRM-protected videos cannot be downloaded.

**Which browsers are supported**
Chrome, Edge, Brave, Opera, Whale, Yandex, and Firefox.

**Is my data safe**
All video processing happens locally in your browser. Authentication uses secure OTP with no passwords stored. The extension uses your existing logged-in session.

## Notes

Users are responsible for ensuring they have the right to download content. This extension is intended for downloading content you have paid for and have permission to save. An active OnlyFans subscription is required. You must be logged in to OnlyFans for the extension to function.

## Get it

**Start here:** https://serp.cc/VDM-onlyfans-downloader

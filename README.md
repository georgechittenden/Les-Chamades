# Les Chamades

International Church Music Job Listings

## Overview

Les Chamades is a minimalist, stylish website for displaying international church music job listings. The design is inspired by the Yale Institute of Sacred Music, featuring clean typography and card-based layouts.

## Features

- **Clean, Minimalist Design**: Elegant typography using Cormorant Garamond and Lato fonts
- **Responsive Layout**: Works beautifully on desktop, tablet, and mobile devices
- **Google Sheets Integration**: Syncs job listings from a Google Sheets spreadsheet
- **Card-Based Display**: Each job shown as a clean card with:
  - Job Title
  - Institution Name
  - City and Country
  - Institution Website

## Setup

### 1. Basic Setup (View Sample Data)

Simply open `index.html` in a web browser to see sample job listings.

### 2. Google Sheets Integration

To connect your own job listings spreadsheet:

**Note:** While the website pulls data from Google Sheets, you can maintain your master document in **Apple Pages** or **Apple Numbers** (see [Apple Pages / Numbers Workflow](#3-apple-pages--numbers-workflow) below for details).

#### Create a Google Sheets Spreadsheet

1. Create a new Google Sheets spreadsheet
2. Set up columns in this order:
   - Column A: **Title** (Job title)
   - Column B: **Institution** (Institution name)
   - Column C: **City**
   - Column D: **Country**
   - Column E: **Website** (Institution website)

Example:

| Title | Institution | City | Country | Website |
|-------|------------|------|---------|---------|
| Director of Music | Cathedral of Saint John | New York | United States | www.stjohndivine.org |
| Organist | King's College Chapel | Cambridge | United Kingdom | www.kings.cam.ac.uk |

#### Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API
4. Create credentials (API Key)
5. Copy your API key

#### Configure the Website

1. Copy `config.example.js` to create your own `config.js`
2. Edit `config.js` with your values:

```javascript
const SHEET_CONFIG = {
    SHEET_ID: 'your-spreadsheet-id',
    API_KEY: 'your-api-key',
    RANGE: 'Sheet1!A1:E100'
};
```

3. Find your SHEET_ID in the spreadsheet URL:
   `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`

#### Make Spreadsheet Public

1. Click "Share" in your Google Sheets
2. Change access to "Anyone with the link can view"
3. Save

### 3. Apple Pages / Numbers Workflow

**Yes, you can use Apple Pages or Apple Numbers as your master document!**

The website needs to pull data from Google Sheets for display, but you can maintain your master job listings in Apple's ecosystem and sync to Google Sheets.

**For detailed instructions, see [APPLE_WORKFLOW.md](APPLE_WORKFLOW.md).**

#### Option A: Using Apple Numbers (Recommended)

1. **Create your master spreadsheet in Apple Numbers** with the same columns: Title, Institution, City, Country, Website
2. **Export to Google Sheets:**
   - File → Export To → CSV
   - Go to Google Sheets and create a new spreadsheet
   - File → Import → Upload tab → Choose your CSV file
   - Import location: Replace current sheet
   - Click "Import data"
3. **Set up the website** using the Google Sheets instructions above
4. **Update workflow:** When you update your Numbers document:
   - Export as CSV
   - In Google Sheets: File → Import → Upload the new CSV
   - Choose "Replace current sheet"
   - Your website will automatically show the updates on refresh

#### Option B: Using Apple Pages

While Apple Pages is primarily a word processor, you can maintain a formatted document:

1. **Create a table in Apple Pages** with your job listings
2. **Copy to Google Sheets (Recommended):**
   - Select and copy the table directly from Pages
   - Paste into Google Sheets starting at cell A1
3. **Alternative method:** If direct copy doesn't work:
   - Export the Pages document to Word format (.docx)
   - Open in Google Docs
   - Copy the table into Google Sheets

#### Option C: Two-Way Sync (Advanced)

For automatic syncing, consider:
- Using Apple Numbers with iCloud
- Setting up a workflow using automation tools (Zapier, Make.com) to sync Numbers to Google Sheets
- Using Google Sheets on Mac/iOS while maintaining your source in Numbers

### 4. Deploy

You can deploy this website to:
- **GitHub Pages**: Enable in repository settings
- **Netlify**: Connect your repository
- **Vercel**: Import your repository
- Any static web hosting service

## File Structure

```
Les-Chamades/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with minimalist design
├── script.js           # JavaScript for fetching and displaying jobs
├── config.js           # Your Google Sheets configuration
├── config.example.js   # Example configuration file
└── README.md          # This file
```

## Fonts & Typography

This project uses two elegant Google Fonts to create a sophisticated, readable design:

### Cormorant Garamond (Serif)
- **Usage**: All headings (h1, h2, h3)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Purpose**: Provides an elegant, classical feel appropriate for church music positions
- **Applied to**: Site title, job titles, and other headings

### Lato (Sans-serif)
- **Usage**: Body text and general content
- **Weights**: 300 (Light), 400 (Regular), 700 (Bold)
- **Purpose**: Ensures excellent readability for descriptions and supporting text
- **Applied to**: All body text, subtitles, locations, and links

### Font Loading
Fonts are loaded via Google Fonts CDN in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

### License
Both fonts are open source and available under the SIL Open Font License.

## Customization

### Design Changes

Edit `styles.css` to customize:
- Colors
- Fonts
- Card layouts
- Spacing

### Data Structure

The script supports flexible column naming. It will look for these field names:
- Title: `title`, `job_title`
- Institution: `institution`, `institution_name`
- City: `city`
- Country: `country`
- Website: `website`, `institution_website`

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2024 Les Chamades. All rights reserved.

## Support

For issues or questions, please open an issue in the GitHub repository.
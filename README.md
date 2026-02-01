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

### 3. Deploy

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
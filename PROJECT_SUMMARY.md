# Les Chamades - Project Summary

## Overview
Les Chamades is a minimalist, elegant website for displaying international church music job listings. The design is inspired by the Yale Institute of Sacred Music with clean typography and professional card-based layouts.

## Key Features

### Design
- **Minimalist Aesthetic**: Clean, professional design with elegant typography
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Card-Based Display**: Each job listing displayed as a clean, bordered card
- **Elegant Typography**: Uses Cormorant Garamond (serif) for headings and Lato (sans-serif) for body text
- **Subtle Interactions**: Hover effects on cards for enhanced user experience

### Functionality
- **Google Sheets Integration**: Backend powered by Google Sheets for easy updates
- **Real-time Sync**: Automatically fetches latest data on page load
- **Sample Data**: Shows example job listings when not connected to a spreadsheet
- **Error Handling**: Graceful error messages with helpful setup instructions
- **Clean URLs**: External links open in new tabs with security attributes

### Job Display Format
Each job card shows:
1. **Job Title** - Large, prominent heading
2. **Institution Name** - Secondary heading
3. **Location** - City and country
4. **Website** - Clickable link to institution

## Technical Implementation

### Frontend
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks needed)
- Google Fonts API for typography
- Google Sheets API v4 for data fetching
- Flexible data parsing to support various column names

### Backend
- Google Sheets as database
- Simple spreadsheet format (5 columns: Title, Institution, City, Country, Website)
- **Master document can be maintained in Apple Pages, Apple Numbers, Excel, or any spreadsheet app** - just export/sync to Google Sheets
- Manual updates by editing the spreadsheet
- No server-side code required

### Security
- API key configuration separate from code
- .gitignore prevents accidental commits of credentials
- Example configuration file provided
- Links use rel="noopener noreferrer" for security

## Files Structure

```
Les-Chamades/
├── index.html                  # Main HTML structure
├── styles.css                  # All styling and responsive design
├── script.js                   # Data fetching and card generation
├── config.js                   # User's configuration (ignored by git)
├── config.example.js           # Configuration template
├── .gitignore                  # Protects config.js from commits
├── README.md                   # Main documentation
├── SETUP.md                    # Step-by-step setup guide
├── SPREADSHEET_TEMPLATE.md     # Spreadsheet structure guide
├── APPLE_WORKFLOW.md           # Apple Pages/Numbers integration guide
└── PROJECT_SUMMARY.md          # This file
```

## Usage Workflow

1. **Initial Setup** (5-10 minutes)
   - Create Google Sheets spreadsheet (or maintain master in Apple Numbers/Pages)
   - Get Google Sheets API key
   - Configure config.js

2. **Adding Jobs** (ongoing)
   - **Option A (Direct)**: Add new row to Google Sheets
   - **Option B (Apple Numbers)**: Edit Numbers, export CSV, import to Google Sheets
   - **Option C (Apple Pages)**: Update Pages table, copy to Google Sheets
   - Fill in: Title, Institution, City, Country, Website
   - Save (auto-saves)

3. **Viewing Updates**
   - Refresh website
   - New listings appear automatically

## Deployment Options

The site is static HTML/CSS/JS and can be deployed to:
- **GitHub Pages** (free, recommended)
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- Any static hosting service

## Design Inspiration

The design draws inspiration from Yale Institute of Sacred Music:
- Sophisticated serif typography for elegance
- Generous white space for clarity
- Subtle borders instead of heavy shadows
- Professional color palette (blacks, grays, subtle blues)
- Academic/cultural institution aesthetic

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements (Optional)

Potential additions that could be made:
- Search/filter functionality
- Application deadline dates
- Job categories/types
- RSS feed
- Email notifications
- Direct application links
- Sorting options (by date, location, etc.)

## Maintenance

The site requires minimal maintenance:
- Update job listings in spreadsheet
- Occasionally review and update expired listings
- Keep Google Sheets API key active
- Monitor for any API changes from Google

## Support

For issues or questions:
- Check SETUP.md for troubleshooting
- Review SPREADSHEET_TEMPLATE.md for data format
- Open an issue in the GitHub repository

---

**Created**: February 2026  
**Status**: Complete and ready to use  
**Version**: 1.0

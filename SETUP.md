# Setup Instructions for Les Chamades

## Quick Start (5 minutes)

**Note:** The website uses Google Sheets for live data, but you can maintain your master document in **Apple Pages** or **Apple Numbers**. See [Apple Workflow section](#apple-pagesnumbers-workflow) below.

### Step 1: Create Your Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Les Chamades Jobs" (or any name you prefer)
4. Add these column headers in row 1:
   - A1: `Title`
   - B1: `Institution`
   - C1: `City`
   - D1: `Country`
   - E1: `Website`

5. Add your job listings starting from row 2

### Step 2: Make Spreadsheet Public

1. Click the "Share" button (top right)
2. Click "Change to anyone with the link"
3. Make sure it's set to "Viewer"
4. Click "Done"

### Step 3: Get Your Sheet ID

Look at your spreadsheet URL:
```
https://docs.google.com/spreadsheets/d/1aBC123xyz-ExampleSheetID/edit
                                    ^^^^^^^^^^^^^^^^^^^^^^^^
                                    This is your Sheet ID
```

Copy the Sheet ID (the part between `/d/` and `/edit`)

### Step 4: Get a Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project (or select existing)
3. Click "+ CREATE CREDENTIALS" → "API Key"
4. Copy the API key that appears
5. (Optional but recommended) Click "Restrict Key":
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Sheets API"
   - Save

### Step 5: Enable Google Sheets API

1. In Google Cloud Console, go to [API Library](https://console.cloud.google.com/apis/library)
2. Search for "Google Sheets API"
3. Click on it and click "ENABLE"

### Step 6: Configure Your Website

1. Open `config.js` in a text editor
2. Replace the content with:

```javascript
const SHEET_CONFIG = {
    SHEET_ID: 'paste-your-sheet-id-here',
    API_KEY: 'paste-your-api-key-here',
    RANGE: 'Sheet1!A1:E100'
};
```

3. Save the file

### Step 7: Test Locally

1. Open `index.html` in your web browser
2. You should see your job listings!

## Troubleshooting

### "Error loading job listings"

- Check that your spreadsheet is public (shared with "Anyone with the link")
- Verify your Sheet ID is correct
- Verify your API Key is correct
- Make sure Google Sheets API is enabled in your Google Cloud project

### "No job listings found"

- Check that your spreadsheet has data starting from row 2
- Verify the column headers match: Title, Institution, City, Country, Website
- Make sure the Range in config.js covers your data (default is A1:E100)

### Jobs not updating

- The website fetches data each time the page loads
- Simply refresh the page to see updated listings
- Clear your browser cache if needed (Ctrl+F5 or Cmd+Shift+R)

## Updating Job Listings

To add, edit, or remove job listings:

1. Open your Google Sheets spreadsheet
2. Make your changes (add rows, edit cells, delete rows)
3. Save (it auto-saves)
4. Refresh your website to see the changes

That's it! No need to redeploy or update any code.

## Deployment Options

### GitHub Pages (Free)

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select your branch (usually `main`)
4. Select `/ (root)` folder
5. Click "Save"
6. Your site will be live at `https://yourusername.github.io/Les-Chamades/`

### Netlify (Free)

1. Go to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Deploy!

### Vercel (Free)

1. Go to [Vercel](https://vercel.com/)
2. Click "Import Project"
3. Connect your GitHub repository
4. Deploy!

## Security Note

Your API key will be visible in the source code. To keep it more secure:

1. Use API key restrictions in Google Cloud Console
2. Restrict it to only the Google Sheets API
3. Consider adding HTTP referrer restrictions to only allow your domain

For maximum security, consider building a backend API that handles the Google Sheets requests server-side.

## Apple Pages/Numbers Workflow

### Can I use Apple Pages or Numbers instead of Google Sheets?

**Yes!** You can maintain your master job listings in Apple Pages or Apple Numbers. The website will still pull from Google Sheets, but you can work in your preferred Apple application and sync your changes.

### Using Apple Numbers (Easiest)

1. **Create your spreadsheet in Apple Numbers:**
   - Open Apple Numbers
   - Create a new spreadsheet
   - Set up columns: Title | Institution | City | Country | Website
   - Add your job listings

2. **Initial setup - Export to Google Sheets:**
   - File → Export To → CSV
   - Save the CSV file
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - File → Import → Upload tab
   - Select your CSV file
   - Choose "Replace current sheet"
   - Click "Import data"

3. **Make the Google Sheet public** (follow Step 2 above)

4. **Set up your website** (follow Steps 3-7 above)

5. **Updating your listings:**
   - Edit your Apple Numbers document
   - File → Export To → CSV (save to the same location)
   - In Google Sheets: File → Import → Upload
   - Select your updated CSV file
   - Choose "Replace current sheet"
   - Click "Import data"
   - Refresh your website to see changes

### Using Apple Pages

Apple Pages is a word processor (like Microsoft Word), but you can still use it:

1. **Create a table in Pages:**
   - Insert → Table
   - Set up 5 columns: Title | Institution | City | Country | Website
   - Add your job listings to the table

2. **Export and transfer to Google Sheets:**
   
   **Method 1: Via CSV**
   - Select your table in Pages
   - Copy the table (Cmd+C)
   - Open Apple Numbers
   - Paste into a new spreadsheet
   - Follow the "Using Apple Numbers" steps above
   
   **Method 2: Direct copy**
   - Select your table in Pages
   - Copy the table (Cmd+C)
   - Go to Google Sheets
   - Paste (Cmd+V) into cell A1
   - The table will be imported as spreadsheet data

3. **Follow the setup steps** as described above

### Workflow Comparison

| Method | Ease of Use | Best For |
|--------|-------------|----------|
| **Google Sheets only** | ⭐⭐⭐⭐⭐ | Simplest, no sync needed |
| **Apple Numbers + export** | ⭐⭐⭐⭐ | Mac users who prefer Numbers |
| **Apple Pages + copy** | ⭐⭐⭐ | Users already maintaining a Pages document |

### Tips for Apple Users

- **Save time:** Keep your CSV export location consistent for quick re-exports
- **Automation:** You can create an Apple Shortcuts automation to automate the export-and-upload process
- **iCloud:** Both Numbers and Google Sheets work on iCloud, so you can edit from iPhone/iPad
- **Template:** Save your Apple Numbers document as a template for consistent formatting

### Automatic Sync Options (Advanced)

If you want automatic syncing from Apple Numbers to Google Sheets:

1. **Zapier/Make.com:** Set up automation workflows
2. **Apple Shortcuts app:** Create an automation that exports and uploads via Google Drive
3. **Script Bridge:** Use AppleScript + Google Sheets API for direct updates

These options require technical setup but eliminate manual CSV imports.

# Using Apple Pages or Numbers with Les Chamades

## Quick Answer

**Yes, you can use Apple Pages or Apple Numbers as your master document!**

The Les Chamades website pulls data from Google Sheets, but you can maintain your job listings in Apple's applications and sync them to Google Sheets.

## Why This Setup?

- **Your preference**: Work in the Apple apps you prefer (Pages or Numbers)
- **Website functionality**: The website uses Google Sheets API for live data fetching
- **Best of both worlds**: Edit in Apple apps, display on the web via Google Sheets

## Recommended: Apple Numbers

### Initial Setup

1. **Create your spreadsheet in Apple Numbers:**
   ```
   Column A: Title
   Column B: Institution  
   Column C: City
   Column D: Country
   Column E: Website
   ```

2. **Add your job listings** starting from row 2

3. **Export to CSV:**
   - File → Export To → CSV
   - Save as `les-chamades-jobs.csv`

4. **Import to Google Sheets:**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create new spreadsheet → File → Import
   - Upload tab → Select your CSV
   - Import location: "Replace current sheet"
   - Click "Import data"

5. **Make Google Sheet public:**
   - Click "Share" → "Anyone with the link" → "Viewer"

6. **Complete website setup:**
   - Follow [SETUP.md](SETUP.md) steps 3-7 for API configuration

### Updating Job Listings

1. **Edit** your Apple Numbers document
2. **Export** as CSV (File → Export To → CSV)
3. **Import** to Google Sheets:
   - File → Import → Upload
   - Select your CSV
   - Choose "Replace current sheet"
4. **Refresh** your website to see updates

### Tips for Numbers Users

- **Save your CSV location**: Always export to the same file for consistency
- **Use templates**: Save your Numbers file as a template
- **Export shortcut**: Use Shift+⌘E to open the export dialog quickly
- **iCloud sync**: Keep your Numbers file in iCloud for access on all devices

## Alternative: Apple Pages

### Why Pages?

- You prefer a document-based workflow
- You're already maintaining job listings in a Pages document
- You want formatted documents with tables

### Setup with Apple Pages

1. **Create a table in Pages:**
   - Insert → Table
   - 5 columns × multiple rows
   - Headers: Title | Institution | City | Country | Website

2. **Add your job listings** to table rows

3. **Transfer to Google Sheets:**

   **Option A: Via Numbers (Recommended)**
   - Select and copy your table
   - Open Apple Numbers
   - Paste into new spreadsheet
   - Export as CSV
   - Import CSV to Google Sheets

   **Option B: Direct Copy**
   - Select your entire table in Pages
   - Copy (⌘C)
   - Go to Google Sheets
   - Click cell A1
   - Paste (⌘V)

4. **Complete setup** following [SETUP.md](SETUP.md)

### Tips for Pages Users

- **Table formatting**: Keep formatting simple for easier export
- **Keep a copy**: Save both Pages (master) and Google Sheets (web display)
- **Update workflow**: Copy-paste or re-export when updating listings

## Comparison Table

| Feature | Apple Numbers | Apple Pages | Google Sheets Only |
|---------|--------------|-------------|-------------------|
| Ease of setup | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Update workflow | Export → Import | Copy → Paste | Edit directly |
| Best for | Spreadsheet users | Document users | Simplest option |
| Offline editing | ✅ | ✅ | ❌ (needs internet) |
| Apple ecosystem | ✅ Native | ✅ Native | ⚠️ Web only |

## Advanced: Automation

### Automating the Sync

For power users who want automatic syncing:

#### Option 1: Apple Shortcuts App

Create an automation using the Apple Shortcuts app that:
1. Exports your Numbers file as CSV
2. Uploads to Google Drive
3. Triggers a Google Sheets import

#### Option 2: Zapier/Make.com

Set up automation:
- Trigger: File change in iCloud Drive
- Action: Update Google Sheets

#### Option 3: Google Apps Script

Write a script that:
- Reads from a CSV in Google Drive
- Updates your Google Sheet automatically
- Runs on a schedule (hourly/daily)

#### Option 4: Custom Sync Tool

Build a small app using:
- Apple Shortcuts app or Automator
- Google Sheets API
- Python script for batch operations

## Workflow Examples

### Scenario 1: Weekly Updates

**You maintain master in Numbers, update weekly**

1. Monday: Edit Apple Numbers with new job listings
2. Export to CSV
3. Import to Google Sheets (30 seconds)
4. Website updates automatically

### Scenario 2: Collaborative Editing

**Team uses Google Sheets, you use Numbers for reports**

1. Team updates Google Sheets throughout the week
2. Friday: Export from Google Sheets to CSV
3. Import CSV to your Apple Numbers for reports/analysis
4. Reverse sync when adding your listings

### Scenario 3: Pages Document Workflow

**You maintain formatted documents in Pages**

1. Keep master document in Pages with formatted tables
2. Monthly: Copy table to Google Sheets
3. Website displays current listings
4. Archive old listings in Pages for records

## Frequently Asked Questions

### Do I need to use Google Sheets?

Yes, the website code requires Google Sheets API. However, Google Sheets can be just your "publishing" layer while you work in Apple apps.

### Will my formatting in Numbers transfer?

No, formatting (colors, fonts, borders) won't transfer. Google Sheets will receive plain data only. This is fine since the website applies its own styling.

### Can I use iCloud Numbers?

Yes! Numbers works on Mac, iPad, and iPhone. You can edit on any device, then export from Mac.

### Can multiple people edit?

- **Numbers**: Use iCloud sharing for collaborative editing
- **Google Sheets**: Direct collaboration built-in
- **Best approach**: Use Google Sheets for collaboration, export to Numbers for personal records

### What about Excel?

The same workflow works for Microsoft Excel:
- Create spreadsheet in Excel
- Export as CSV
- Import to Google Sheets
- Follow setup instructions

### Can I automate this completely?

Yes, with scripting knowledge. The simplest automatic sync:
1. Keep master in Google Sheets
2. Export to Numbers for offline reading/analysis when needed

For Apple → Google sync, you'll need custom automation (Apple Shortcuts app, Zapier, or scripts).

## Troubleshooting

### Import issues

**Problem**: CSV import doesn't look right in Google Sheets

**Solutions**:
- Ensure UTF-8 encoding when exporting
- Check that commas in data are properly escaped
- Verify column alignment matches expected structure

### Data not updating on website

**Problem**: Updated Google Sheets but website shows old data

**Solutions**:
- Hard refresh browser (Cmd+Shift+R)
- Clear browser cache
- Verify Google Sheet is still public
- Check API key is still valid

### Export errors from Numbers

**Problem**: Can't export or CSV looks wrong

**Solutions**:
- Update to latest Numbers version
- Try File → Export To → Excel, then open in Google Sheets
- Manually copy-paste as fallback

## Summary

✅ **You can absolutely use Apple Pages or Apple Numbers as your master document**

✅ **The website needs Google Sheets, but that's just for web display**

✅ **Work in your preferred Apple app, sync to Google Sheets when ready**

✅ **Simple workflow: Edit → Export → Import (takes 30 seconds)**

For most users, we recommend:
- **Apple Numbers** if you want spreadsheet features
- **Direct Google Sheets** if you want the simplest workflow
- **Apple Pages** only if you're already maintaining a formatted document

---

**Need help?** Check [SETUP.md](SETUP.md) for complete setup instructions or open an issue on GitHub.

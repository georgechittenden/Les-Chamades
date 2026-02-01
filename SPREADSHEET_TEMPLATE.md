# Google Sheets Template for Les Chamades

## Can I Use Apple Pages or Apple Numbers?

**Yes!** While this file describes the Google Sheets format, you can maintain your master document in:
- **Apple Numbers**: Export as CSV and import to Google Sheets
- **Apple Pages**: Create a table, copy to Google Sheets
- **Microsoft Excel**: Export as CSV and import to Google Sheets
- **Any spreadsheet software**: As long as you sync to Google Sheets

See [SETUP.md](SETUP.md#apple-pagesnumbers-workflow) for detailed Apple workflow instructions.

## Spreadsheet Structure

Create a Google Sheets spreadsheet with the following columns:

### Column Headers (Row 1)

| A | B | C | D | E |
|---|---|---|---|---|
| Title | Institution | City | Country | Website |

### Sample Data

| Title | Institution | City | Country | Website |
|-------|-------------|------|---------|---------|
| Director of Music | Cathedral of Saint John the Divine | New York | United States | www.stjohndivine.org |
| Organist and Choirmaster | King's College Chapel | Cambridge | United Kingdom | www.kings.cam.ac.uk/chapel |
| Assistant Organist | Notre-Dame de Paris | Paris | France | www.notredamedeparis.fr |
| Music Director | Westminster Abbey | London | United Kingdom | www.westminster-abbey.org |
| Organ Scholar | Trinity College | Cambridge | United Kingdom | www.trin.cam.ac.uk/chapel |
| Director of Liturgical Music | Chartres Cathedral | Chartres | France | www.cathedrale-chartres.org |

## Field Descriptions

- **Title**: The job title or position name (e.g., "Director of Music", "Organist", "Choir Director")
- **Institution**: The full name of the church or institution (e.g., "Cathedral of Saint John the Divine")
- **City**: The city where the position is located (e.g., "New York")
- **Country**: The country where the position is located (e.g., "United States")
- **Website**: The institution's website URL (can include or exclude "https://")

## Tips

1. **Keep it simple**: Don't add extra columns or formatting that might interfere with the data fetch
2. **Row 1 must be headers**: The first row should always contain the column names exactly as shown
3. **Start data in Row 2**: All job listings should start from row 2 onwards
4. **Empty rows are ignored**: The script automatically filters out empty rows
5. **Website URLs**: URLs can be entered with or without "http://" or "https://"
6. **Update anytime**: Simply edit the spreadsheet and refresh your website to see changes

## Making the Spreadsheet

You can either:

1. **Create from scratch in Google Sheets**: Follow the structure above
2. **Copy template**: Make a copy of this [sample spreadsheet](#) (link to be added)
3. **Import CSV**: Create a CSV file with this structure and import it to Google Sheets
4. **Use Apple Numbers**: Create in Numbers, export as CSV, import to Google Sheets (see [SETUP.md](SETUP.md#apple-pagesnumbers-workflow))
5. **Use Apple Pages**: Create a table in Pages, copy and paste into Google Sheets

### For Apple Numbers Users

Apple Numbers format:
```
Row 1: Title | Institution | City | Country | Website
Row 2+: Your job listings
```

Export steps:
1. File → Export To → CSV
2. Import the CSV to Google Sheets
3. Complete the setup as described in [SETUP.md](SETUP.md)

### For Apple Pages Users

1. Create a table with 5 columns
2. Add headers: Title | Institution | City | Country | Website  
3. Add your job listings
4. Copy the entire table
5. Paste into Google Sheets starting at cell A1

## Sharing Settings

Remember to:
1. Click "Share" button
2. Change to "Anyone with the link" 
3. Set permission to "Viewer"
4. Copy the Sheet ID from the URL

The Sheet ID is found in the URL:
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
```

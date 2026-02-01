// Configuration for Google Sheets integration
// Copy this file to config.js and fill in your values

const SHEET_CONFIG = {
    // Your Google Sheets spreadsheet ID
    // Find this in the URL: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
    SHEET_ID: 'YOUR_SHEET_ID_HERE',
    
    // Your Google Sheets API key
    // Get one at: https://console.cloud.google.com/apis/credentials
    API_KEY: 'YOUR_API_KEY_HERE',
    
    // The range of cells to fetch (e.g., 'Sheet1!A1:E100')
    // Expected columns: Title, Institution, City, Country, Website
    RANGE: 'Sheet1!A1:E100'
};

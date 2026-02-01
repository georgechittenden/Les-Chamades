// Main script for Les Chamades job listings

// Function to fetch jobs from Google Sheets
async function fetchJobs() {
    const loadingElement = document.getElementById('loading');
    const jobsContainer = document.getElementById('jobs-container');
    const errorElement = document.getElementById('error');

    try {
        // Check if config is available
        if (typeof SHEET_CONFIG === 'undefined') {
            throw new Error('Configuration not found. Please set up config.js');
        }

        const { SHEET_ID, API_KEY, RANGE } = SHEET_CONFIG;

        // Construct the Google Sheets API URL
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.values || data.values.length === 0) {
            throw new Error('No job listings found');
        }

        // Parse the data (assuming first row is headers)
        const headers = data.values[0];
        const jobs = data.values.slice(1).map(row => {
            const job = {};
            headers.forEach((header, index) => {
                job[header.toLowerCase().replace(/\s+/g, '_')] = row[index] || '';
            });
            return job;
        });

        // Filter out empty rows
        const validJobs = jobs.filter(job => job.title || job.institution);

        displayJobs(validJobs);
        loadingElement.style.display = 'none';

    } catch (error) {
        console.error('Error fetching jobs:', error);
        loadingElement.style.display = 'none';
        errorElement.textContent = `Error loading job listings. ${error.message}`;
        errorElement.style.display = 'block';
        
        // If config is not set up, show sample data
        if (error.message.includes('Configuration not found')) {
            displaySampleData();
        }
    }
}

// Function to display jobs as cards
function displayJobs(jobs) {
    const jobsContainer = document.getElementById('jobs-container');
    jobsContainer.innerHTML = '';

    if (jobs.length === 0) {
        jobsContainer.innerHTML = '<p class="no-jobs">No job listings available at this time.</p>';
        return;
    }

    jobs.forEach(job => {
        const card = createJobCard(job);
        jobsContainer.appendChild(card);
    });
}

// Function to create a job card element
function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';

    // Title
    const title = document.createElement('h2');
    title.textContent = job.title || job.job_title || 'Untitled Position';
    card.appendChild(title);

    // Institution
    const institution = document.createElement('div');
    institution.className = 'institution';
    institution.textContent = job.institution || job.institution_name || '';
    card.appendChild(institution);

    // Location
    const location = document.createElement('div');
    location.className = 'location';
    
    const city = document.createElement('span');
    city.className = 'city';
    city.textContent = job.city || '';
    
    const country = document.createElement('span');
    country.className = 'country';
    country.textContent = job.country || '';
    
    if (city.textContent && country.textContent) {
        location.appendChild(city);
        location.appendChild(document.createTextNode(', '));
        location.appendChild(country);
    } else if (city.textContent) {
        location.appendChild(city);
    } else if (country.textContent) {
        location.appendChild(country);
    }
    
    card.appendChild(location);

    // Website
    if (job.website || job.institution_website) {
        const websiteDiv = document.createElement('div');
        websiteDiv.className = 'website';
        
        const websiteLink = document.createElement('a');
        const websiteUrl = job.website || job.institution_website;
        websiteLink.href = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;
        websiteLink.target = '_blank';
        websiteLink.rel = 'noopener noreferrer';
        websiteLink.textContent = websiteUrl;
        
        websiteDiv.appendChild(websiteLink);
        card.appendChild(websiteDiv);
    }

    return card;
}

// Function to display sample data when config is not available
function displaySampleData() {
    const sampleJobs = [
        {
            title: 'Director of Music',
            institution: 'Cathedral of Saint John the Divine',
            city: 'New York',
            country: 'United States',
            website: 'www.stjohndivine.org'
        },
        {
            title: 'Organist and Choirmaster',
            institution: 'King\'s College Chapel',
            city: 'Cambridge',
            country: 'United Kingdom',
            website: 'www.kings.cam.ac.uk/chapel'
        },
        {
            title: 'Assistant Organist',
            institution: 'Notre-Dame de Paris',
            city: 'Paris',
            country: 'France',
            website: 'www.notredamedeparis.fr'
        }
    ];

    displayJobs(sampleJobs);
    
    const errorElement = document.getElementById('error');
    errorElement.innerHTML = `
        <p><strong>Sample data displayed.</strong></p>
        <p>To connect to your Google Sheets spreadsheet, please set up the config.js file with your Sheet ID and API key.</p>
    `;
    errorElement.style.display = 'block';
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchJobs);

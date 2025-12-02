# Figma Design Analysis Project

## Setup Instructions

1. Create a new virtual environment: `python -m venv venv`
2. Activate the virtual environment: `source venv/bin/activate`
3. Install dependencies: `pip install -r requirements.txt`
4. Create a new database: `python -m app.database`
5. Run the application: `uvicorn app.main:app --host 0.0.0.0 --port 8000`

## API Endpoints

* GET /api/data: Retrieve data for chart UI components
* POST /api/filter: Apply filter to data for chart UI components
* POST /token: Login and obtain an access token
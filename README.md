# 1-figma-design-analysis

FIGMA DESIGN LINK: https://www.figma.com/design/fzvMscSRhEdiO9Cqj77mcv/30--Chart-UI-Components-%7C-BRIX-Templates--Community-?node-id=15-4&t=r0tdqiHATOC6zXDN-1

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: FastAPI + SQLAlchemy
- **Design**: Figma ([View Design](https://www.figma.com/design/fzvMscSRhEdiO9Cqj77mcv))

## Project Structure

```
1-figma-design-analysis/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- {'name': 'Chart UI Components', 'description': 'Display data in chart format'}
- {'name': 'Filtering and Sorting', 'description': 'Allow users to filter and sort data'}

## API Endpoints

- `GET /api/data` - Retrieve data for chart UI components
- `POST /api/filter` - Apply filter to data for chart UI components

## License

MIT

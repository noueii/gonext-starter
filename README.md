# Gonext Starter

A full-stack starter template with Go backend and Next.js frontend, featuring authentication, database integration, and API documentation.

## Features

- **Backend**: Go with Gin web framework
- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Database**: PostgreSQL with migrations
- **Authentication**: JWT and PASETO token support
- **API Documentation**: OpenAPI/Swagger
- **State Management**: Redux Toolkit with RTK Query
- **Containerization**: Docker support

## Project Structure

```
.
├── api/                  # API documentation and specs
├── cmd/                  # Main application entry point
├── internal/             # Core application code
│   ├── api/             # API handlers
│   ├── db/              # Database code and migrations
│   ├── gapi/            # gRPC API implementation
│   ├── pb/              # Generated protobuf code
│   ├── proto/           # Protocol buffer definitions
│   ├── token/           # Token management
│   └── util/            # Utility functions
├── web/                 # Frontend application
│   ├── public/          # Static files
│   ├── src/             # Source code
│   │   ├── app/        # Next.js app directory
│   │   ├── store/      # Redux store and API client
│   │   └── providers/  # React providers
│   └── package.json    # Frontend dependencies
├── .env.example        # Example environment variables
├── docker-compose.yml  # Docker Compose configuration
└── Makefile           # Common tasks
```

## Getting Started

### Prerequisites

- Go 1.24+
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gonext-starter.git
   cd gonext-starter
   ```

2. Set up the database:
   ```bash
   # Start PostgreSQL with Docker
   docker-compose up -d postgres
   
   # Create and migrate database
   make createdb
   make migrateup
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the backend:
   ```bash
   make server
   ```

5. Start the frontend:
   ```bash
   cd web
   npm install
   npm run dev
   ```

## Development

### Generating API Client

After making changes to the API, update the frontend client:

```bash
cd web
npm run api:generate
```

### Running Tests

```bash
# Run backend tests
make test

# Run frontend tests
cd web
npm test
```

## API Documentation

API documentation is available at `http://localhost:8080/swagger/index.html` when the backend is running.

## License

[MIT](LICENSE)

# AI Blog — Backend

Backend for the AI Blog project, built with [Strapi v5](https://strapi.io/).

## Tech Stack

- **Strapi v5** — headless CMS
- **SQLite** — database (for development)
- **Node.js 20+**
- **TypeScript**

## Collections

- **Blog** — blog posts collection with fields: `name`, `slug`, `description`, `image`, `content`, `seoTitle`, `seoDescription`

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/blogs` | Get all blogs |
| GET | `/api/blogs/:documentId` | Get a single blog by documentId |
| GET | `/api/blogs?filters[slug][$eq]=my-slug` | Get a single blog by slug |

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start in development mode

```bash
npm run develop
```

Admin panel will be available at `http://localhost:1337/admin`

### 3. Build and start in production mode

```bash
npm run build
npm run start
```

---

## Running with Docker

### Requirements

- [Docker](https://www.docker.com/) and Docker Compose

### 1. Create `.env` file

Copy `.env.example` and fill in the values:

```bash
cp .env.example .env
```

### 2. Start the container

```bash
docker-compose up -d
```

The app will be available at `http://localhost:1337`

### 3. Stop the container

```bash
docker-compose down
```

### 4. View logs

```bash
docker-compose logs -f
```

> Database and uploaded files are stored in Docker volumes and persist between restarts.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `HOST` | Server host (default: `0.0.0.0`) |
| `PORT` | Server port (default: `1337`) |
| `APP_KEYS` | Application keys |
| `API_TOKEN_SALT` | Salt for API tokens |
| `ADMIN_JWT_SECRET` | Secret for admin JWT tokens |
| `JWT_SECRET` | Secret for user JWT tokens |

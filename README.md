# Full-Stack User Management App

A secure, full-stack user management application built with **Spring Boot 3.x (Java 17+)** and **React**. This assignment demonstrates REST API design, business logic, security (JWT + role-based auth), frontend best practices, and testing.

---

## Project Structure

```
/
├── backend/        # Spring Boot REST API
│   ├── src/
│   └── pom.xml
├── frontend/       # React frontend (with Material-UI or Tailwind)
│   ├── public/
│   ├── src/
│   └── package.json
├── docker-compose.yml     # (Optional) Docker Compose for app+db
├── README.md
```

---

## Setup Instructions

### Prerequisites

- Java 17+ & Maven (for backend)
- Node.js 18+ & npm/yarn (for frontend)
- (Optional) Docker

### Run Backend Locally

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

- API available at: [http://localhost:8080/api](http://localhost:8080/api)

### Run Frontend Locally

```bash
cd frontend
npm install
npm install react-router-dom
npm install react-scripts
npm run build
npm start
```

- App available at: [http://localhost:3000](http://localhost:3000)

### (Optional) Run with Docker

```bash
docker-compose up --build
```

---

## API Endpoints

| Method | Endpoint                | Description                 | Access         |
|--------|-------------------------|-----------------------------|---------------|
| POST   | /api/users              | Create user                 | ADMIN         |
| GET    | /api/users              | Retrieve all users          | ADMIN         |
| GET    | /api/users/{id}         | Retrieve user by ID         | ADMIN/SELF    |
| PUT    | /api/users/{id}         | Update user                 | ADMIN         |
| DELETE | /api/users/{id}         | Delete user                 | ADMIN         |
| POST   | /api/auth/login         | Authenticate (JWT)          | Public        |
| ...    | /api/roles, /api/privileges | Role & privilege mgmt  | ADMIN         |

- See backend code for full API spec.
- (Bonus) Swagger UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## Testing

**Backend**: JUnit 5, Mockito, Spring Boot Test  
**Frontend**: React Testing Library, Jest, Cypress

- To run backend tests: `cd backend && mvn test`
- To run frontend tests: `cd frontend && npm test`

---

## Extended Requirements for Senior-Level Evaluation

### **1. Architectural**

- **Domain-Driven Design (DDD) / Hexagonal Architecture:**  
  Structure your backend code to clearly separate API (controllers), application/service, domain, and infrastructure layers.
- **Modularity:**  
  Your codebase should be modular, making it easy to extend or change business rules without affecting unrelated components.
- **Organization Support (Multi-tenancy):**  
  Users must belong to an Organization. Support for multiple organizations, with organization admins managing their users and roles. Prevent cross-organization access.

### **2. Scalability**

- **Pagination, Filtering, and Sorting:**  
  All user list endpoints must support server-side pagination, filtering, and sorting.
- **High-Load Consideration:**  
  Design your data access and API endpoints to handle high concurrency.  
  (Bonus) Use caching for frequently accessed user data (e.g., Redis).
- **Optimistic Locking:**  
  Implement versioning on user records to handle concurrent updates gracefully.

### **3. Security**

- **Advanced JWT Handling:**  
  Support refresh tokens, JWT invalidation/blacklisting (e.g., after logout or password change).
- **OAuth2 Support:**  
  Implement optional OAuth2 login (e.g., Google, GitHub) for users.
- **Audit Logging:**  
  Log all security-sensitive actions (login, user/role changes, failed logins, etc.) with user and timestamp.
- **Rate Limiting:**  
  Apply rate limiting to sensitive endpoints (e.g., login, user CRUD) to prevent brute-force attacks.
- **Input Validation:**  
  Securely validate and sanitize all incoming data on backend and frontend.

### **4. DevOps/Production-Readiness**

- **CI/CD Pipeline:**  
  Provide a working GitHub Actions workflow (or similar) that runs build, tests, and lints both backend and frontend on PRs and pushes.
- **Docker Compose:**  
  Deliver a `docker-compose.yml` that runs backend, frontend, and a production-grade database (PostgreSQL).  
  (Bonus) Add Redis for caching.
- **Configuration Management:**  
  Use environment variables for sensitive or environment-specific configuration.  
  Do not hard-code secrets or DB credentials.
- **Health Checks & Metrics:**  
  Expose health and metrics endpoints for backend (e.g., `/actuator/health`, `/actuator/metrics`).
- **Production-Ready Logging:**  
  Use structured logging, and ensure error logs are meaningful for troubleshooting.
- **API Documentation:**  
  Use SpringDoc OpenAPI (Swagger UI) and keep it up to date.

---

## Assumptions & Notes

- JWT stored securely (e.g., HttpOnly cookie or secure storage)
- H2 (in-memory) used by default; switch to PostgreSQL via properties
- Input validation on both backend and frontend
- Role-based UI: Admin vs. Regular User
- Organization admins can only manage users in their org
- You may add any additional packages, files, or libraries as you see fit to meet the requirements.
- See code comments and this README for further assumptions

---

## Bonus

- Dockerization (`Dockerfile`, `docker-compose.yml`)
- API documentation with SpringDoc OpenAPI (Swagger)
- CI/CD pipeline (e.g., GitHub Actions)
- Caching with Redis
- Internationalization (i18n) on frontend
- Responsive/mobile-friendly UI

---

## License

MIT (or specify your license)
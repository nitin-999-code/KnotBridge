# MediBook

MediBook is a full-stack doctor appointment booking platform that allows patients to search for doctors, view available schedules, and book appointments online. Doctors can manage their profiles, availability, and patient appointments through a dedicated dashboard. The system supports role-based authentication, secure API communication, and real-time appointment management.

## Features

* User registration and login
* Role-based authentication (Patient and Doctor)
* Doctor search and listing
* Appointment booking system
* Time slot scheduling
* Patient dashboard
* Doctor dashboard
* Profile management
* Responsive UI
* Secure REST APIs
* Cloud deployment

## Tech Stack

**Frontend:**
* React
* Tailwind CSS
* Axios
* React Router

**Backend:**
* Node.js
* Express.js
* JWT Authentication

**Database:**
* PostgreSQL
* Supabase

**Deployment:**
* Vercel (Frontend)
* Render (Backend)

## System Architecture

The application follows a decoupled client-server architecture. The frontend application communicates with backend REST APIs using asynchronous HTTP requests. The backend processes incoming requests, enforces business validation logic, and interacts with the PostgreSQL database. Authentication and session state are managed securely utilizing stateless JWT tokens.

## Installation

Clone the repository and install the standard dependencies required for local development.

```bash
git clone repository_url
cd medibook
npm install
```

## Environment Variables

Create a configuration file at the application root containing the necessary system parameters.

```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

## Running Locally

To initialize the application locally, execute the following commands in separate terminal sessions.

Start the backend server process:
```bash
npm run dev
```

Start the frontend development server:
```bash
npm start
```

## API Endpoints

Below are foundational examples of the core endpoints exposed by the backend service.

* `POST /api/auth/register` - Registers a new user account
* `POST /api/auth/login` - Authenticates credentials and issues a JWT token
* `GET /api/doctors` - Retrieves a paginated list of available doctors
* `GET /api/doctors/:id` - Fetches specific doctor details and scheduling availability
* `POST /api/appointments` - Initiates a new appointment booking
* `GET /api/appointments/:id` - Retrieves appointment history for a specific user

## Deployment

The application utilizes cloud infrastructure optimized for JavaScript workloads. The React frontend is deployed to Vercel for high-performance edge delivery. The built Express server runs via Render, establishing a continuous connection with the cloud-hosted PostgreSQL database provisioned through Supabase.

## Folder Structure

```text
medibook/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── utils/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
├── .env.example
└── README.md
```

## Future Improvements

* Online payment integration
* Email notifications
* Admin dashboard
* Appointment reminders
* Real-time chat system

## Author

Developed for professional portfolio presentation.
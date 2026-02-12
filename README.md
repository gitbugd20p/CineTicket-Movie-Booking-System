# 🎬 CineTicket – Movie Booking System(Learning Project)

CineTicket is a full-stack Movie Ticket Booking System built with the MERN stack.
This project simulates a real-world cinema booking platform with user authentication, seat selection, admin dashboard, and Stripe payment integration.

> ⚡ Built as a hands-on learning project to master full-stack architecture, clean code structure, Clerk authentication, and Stripe payment integration.

🔗 **Live Demo:** [https://cine-ticket-movie-booking-system.vercel.app/](https://cine-ticket-movie-booking-system.vercel.app/)
🔗 **GitHub Repository:** [https://github.com/gitbugd20p/CineTicket-Movie-Booking-System](https://github.com/gitbugd20p/CineTicket-Movie-Booking-System)

---

## 🚀 Tech Stack

### 🔹 Frontend (Client)

- React (Vite)
- Context API
- Clerk Authentication
- Stripe Integration
- Responsive UI
- Custom Utility Functions
- Vercel Deployment

### 🔹 Backend (Server)

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT/Auth Middleware
- Stripe Webhooks
- REST API Architecture
- Inngest (Event-driven workflows)

---

## ✨ Key Features

### 👤 User Features

- Secure authentication using **Clerk**
- Browse available movies
- View movie details & trailers
- Select show date & time
- Interactive seat selection layout
- Book tickets securely via **Stripe**
- View booking history
- Add to favorites

### 🛠 Admin Features

- Admin dashboard
- Add new shows
- Manage movies
- View all bookings
- Manage show listings
- Protected admin routes

## Future Improvements

- Automatic Seat Release
- Real-time Seat Updates
- Email confirmation system
- Ticket and QR System

---

## 📂 Project Structure

```
CineTicket
├── client (React + Vite Frontend)
└── server (Node + Express Backend)
```

### Frontend Highlights

- Component-based architecture
- Separate admin layout
- Context API for global state
- Reusable utility functions for date/time formatting
- Clean folder organization

### Backend Highlights

- MVC architecture
- Modular route handling
- Stripe webhook integration
- Authentication middleware
- Structured controllers and models

---

## 🔐 Authentication & Payments

- 🔑 Authentication handled using **Clerk**
- 💳 Stripe used for secure payment processing
- 📡 Webhooks implemented for payment verification
- 🔒 Protected API routes for admin & bookings

---

## 📸 Screens Included

- Home Page
- Movie Details Page
- Seat Layout System
- Booking History
- Admin Dashboard
- Add Shows Panel

---

## 🛠 Installation & Setup (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/gitbugd20p/CineTicket-Movie-Booking-System.git
cd CineTicket-Movie-Booking-System
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
npm start
```

Create a `.env` file and configure:

```
MONGO_URI=
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
TMDB_API_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌍 Deployment

- **Frontend:** Vercel
- **Backend:** Vercel (Serverless Functions)

---

## 📚 What I Learned From This Project

- Structuring a full-stack MERN project
- Integrating third-party authentication (Clerk)
- Stripe payment integration with webhooks
- Role-based access control
- Admin panel architecture
- Managing complex booking logic
- Clean and scalable folder structure
- Deployment workflow with Vercel

---

## 🎯 Why This Project Matters

This project demonstrates:

✔ Real-world full-stack development
✔ Secure authentication & payment systems
✔ Admin dashboard implementation
✔ Scalable project structure
✔ Production deployment

---

## 👨‍💻 Author

**Md. Sabur**
GitHub: [https://github.com/gitbugd20p](https://github.com/gitbugd20p)

---

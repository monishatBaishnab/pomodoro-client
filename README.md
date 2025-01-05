# Pomodoro Time Management and Focus Tracker

### Overview

The **Pomodoro Time Management and Focus Tracker** is a web application designed to help students manage their study time effectively using the Pomodoro Technique. This technique consists of focused study intervals of 25 minutes, followed by short 5-minute breaks. The application features a timer, detailed analytics of study sessions, and a gamified system to reward consistent study habits.

This project integrates several technologies to offer a seamless user experience, providing a timer, tracking features, and motivational rewards to encourage productive study habits.

---

### Features

1. **Pomodoro Timer**
   - Start, pause, and reset functionality.
   - Clearly indicated "Focus" and "Break" periods.
   - Session count and streak progress tracking.
   - Sound and visual notifications when a session ends.
2. **Focus Analytics**

   - Tracks completed focus sessions and total time spent on study.
   - Motivational messages, such as "Great job! You're on a 5-day streak!"

3. **Gamification**

   - Streaks for consecutive focus sessions.
   - Badges to motivate consistent usage.
   - Highlight the longest streak and badge achievements.

4. **Real-time Updates**

   - Real-time timer updates without refreshing the page.

5. **Responsiveness**
   - Optimized for a seamless experience across devices (mobile, tablet, desktop).

---

### Technologies Used

- **Frontend**:

  - Next.js
  - Redux Toolkit
  - TypeScript
  - TailwindCSS
  - Recharts for visualizations

- **Backend**:
  - Express.js
  - PostgreSQL (for storing focus session data)
  - Redis (for caching metrics)
  - JWT (for authentication)

---

### Demo Credentials

- **Admin**

  - Email: `admin@example.com`
  - Password: `password123`

- **Student**
  - Email: `student@example.com`
  - Password: `password123`

---

### Evaluation Criteria

- **Frontend**:

  - User-friendly UI with engaging gamification features.
  - Full functionality of the Pomodoro timer and dashboard.
  - Responsive design for multiple devices.
  - Efficient state management with Redux.

- **Backend**:
  - Well-structured API endpoints.
  - Optimized performance using Redis caching.
  - Proper gamification logic for streaks and badges.
  - Scalable database schema.

---

This Pomodoro Time Management and Focus Tracker project aims to provide students with an effective tool to improve their productivity by leveraging time management techniques and gamification. It combines real-time tracking, visual analytics, and motivation through rewards to ensure sustained focus and academic success.

Here’s a simplified setup instruction for your Next.js and Express project:

---

## **1. Clone and Set Up Instruction**

1. **Clone the Pomodoro project**:

   ```bash
   git clonehttps://github.com/monishatBaishnab/pomodoro-client
   cd pomodoro-client
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**:

   - Create a `.env.local` file in the root and add your environment variables if needed.

4. **Run the Next.js project**:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser.

---

## **2. Clone and Set Up Express Server**

1. **Clone the Express project**:

   ```bash
   git clone https://github.com/monishatBaishnab/pomodoro-server
   cd pomodoro-server
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**:
   - Create a `.env` file in the root and add any required environment variables.

Here are the environment variable names for your server setup:

```bash
DATABASE_URL=<Your database URL>
ENABLE_PRISMA_CACHING=<true/false>  # Enable Prisma caching (true/false)
PORT=<Port number>  # Port on which the server will run, default is 5000
BCRYPT_SALT=<Salt rounds for bcrypt encryption>  # e.g., 10

APP_PASS=<Your app's password for internal use>

JWT_SECRET=<Secret key for JWT token generation>

CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
CLOUDINARY_API_KEY=<Your Cloudinary API key>
CLOUDINARY_API_SECRET=<Your Cloudinary API secret>

BASE_URL=<Base URL of your app, e.g., 'http://localhost:5000'>
STORE_ID=<Store ID for Cloudinary or related services>
SIGNATURE_KEY=<Secret key used for verifying signatures>
```

4. **Run the Express server**:

   ```bash
   node server.js
   ```

   The Express server will be available at `http://localhost:5000`.

---

## **3. Connect API Between Next.js and Express**

- Ensure your Next.js frontend makes requests to the correct Express API endpoint (`http://localhost:5000`).
- Make sure CORS is configured in your Express project to allow connections from the Next.js app.

---

## **4. Project Running**

- **Next.js**: `http://localhost:3000`
- **Express API**: `http://localhost:5000`

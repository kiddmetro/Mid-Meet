# Mid Meet

Mid Meet is an online video conferencing platform designed to facilitate instant meetings and scheduled sessions seamlessly. Developed with modern web technologies, it uses Next.js as the core framework, Shadcn for the UI components, Stream for video conferencing, and Clerk for user authentication and management.

# Note
This project is a work in progress. Certain features may not be fully implemented.

# Features
* Instant Meetings: Start a meeting instantly with just a click.
* Scheduled Meetings: Plan your meetings ahead with custom schedules.
* User Authentication: Sign-up and sign-in functionality powered by Clerk.
* Video Conferencing: Reliable video calling feature integrated with Stream.

# Tech Stack
* Next.js: React framework with server-side rendering and static site generation.
* Shadcn: Component library for building interfaces.
* Stream: API and SDK for handling video conferencing.
* Clerk: Authentication and user management.

# Installation
1. Clone the repository:
git clone https://github.com/your-username/mid-meet.git
cd mid-meet

2. Install dependencies:
npm install

3. Set up environment variables:
Create a .env.local file in the root directory:
touch .env.local
Add the necessary environment variables to the .env.local file as shown below.
Environment Variables
In the .env.local file, add the following variables:

env
Copy code
* Clerk API Keys
> NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
```code``` CLERK_SECRET_KEY=<your_clerk_secret_key>

# Clerk Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Stream API Keys
NEXT_PUBLIC_STREAM_API_KEY=<your_stream_api_key>
STREAM_API_SECRET=<your_stream_api_secret>
Replace <your_clerk_publishable_key>, <your_clerk_secret_key>, <your_stream_api_key>, and <your_stream_api_secret> with your actual Clerk and Stream API keys and secrets.

Run the Project
After setting up environment variables, start the development server:

bash
Copy code
npm run dev
# or
yarn dev
Visit http://localhost:3000 to access the application.

Usage
Authentication
Access the /sign-in and /sign-up routes for user authentication. These routes are managed by Clerk.
Starting and Scheduling Meetings
New Meeting: Click "New Meeting" to start an instant meeting.
Scheduled Meeting: Plan a meeting for a future date and time.
Contributing
Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.
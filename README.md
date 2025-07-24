## Phone Authentication System
A simple Next.js 14 application implementing phone-based OTP authentication with a mock backend for demonstration.
This project includes Login, OTP Verification, and Profile pages with protected routing.

## Features
Phone number authentication (Login/Register)

OTP verification (mocked for demo)

Protected Profile page with middleware-based authentication

Logout functionality

Mock backend API using Next.js API routes (no separate server needed)

Responsive design using Tailwind CSS

##Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone <your-repo-url>
cd phone-auth
2. Install dependencies
bash
Copy
Edit
npm install
3. Create .env.local
Create a .env.local file in the root directory:

env
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:3000/api
4. Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

Environment Variables
NEXT_PUBLIC_API_URL – The base URL for API requests.

For mock API: http://localhost:3000/api

For real backend: http://localhost:3004

Pages
/login → Enter phone number and request OTP.

/verify-otp → Enter OTP and verify.

/profile → View user profile (protected route).

/ → Redirects to /login.

## Mock API Endpoints
This project includes a mock backend (using Next.js API routes) for testing:

POST /api/auth/send-otp → Simulates sending OTP.

POST /api/auth/verify-otp → Simulates verifying OTP & returns a token.

GET /api/auth/profile → Returns a mock user profile.

POST /api/auth/logout → Simulates logout.
## screen shots
<img width="1915" height="501" alt="image" src="https://github.com/user-attachments/assets/da1472cd-52a4-43a4-bead-63e1c82d3720" />
<img width="1916" height="448" alt="image" src="https://github.com/user-attachments/assets/2501171e-5dc3-41c9-9f42-6976c082169d" />

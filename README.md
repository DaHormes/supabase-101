# Full-Stack TypeScript Project with React, Node.js, and Supabase

This project is a full-stack application using React for the frontend, Node.js with Express for the backend, and Supabase for database and authentication.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-project-name.git
   cd your-project-name
   ```

2. Install dependencies:
   ```
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `client` directory with the following content:
     ```
     REACT_APP_SUPABASE_URL=your_supabase_url
     REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```
   - Create a `.env` file in the `server` directory with the following content:
     ```
     SUPABASE_URL=your_supabase_url
     SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
     ```

4. Start the development servers:
   - For the client:
     ```
     cd client && npm start
     ```
   - For the server:
     ```
     cd server && npm run dev
     ```

## Running Tests

- To run frontend tests:
  ```
  cd client && npm test
  ```
- To run backend tests:
  ```
  cd server && npm test
  ```

## Deployment

1. Build the frontend:
   ```
   cd client && npm run build
   ```

2. Deploy the backend to your preferred hosting service (e.g., Heroku, DigitalOcean, AWS).

3. Set up the necessary environment variables on your hosting service.

4. Deploy the frontend build to a static hosting service (e.g., Netlify, Vercel, AWS S3).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Rentify is a modern real estate web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a platform for users to search, list, and explore various properties, whether for sale or rent. The application offers a user-friendly interface, advanced search options, and a seamless user experience.

Check out the live app: 

## Features

- **Property Listings**: View a wide range of property listings with detailed information, including descriptions, prices, addresses, and more.

- **Advanced Search**: Customize your property search by type (short time/long time), amenities, sorting options, and more.

- **User Profiles**: Registered users can create and manage their profiles with profile pictures and listings also.

- **Authentication**: Secure user registration and login functionality with Google OAuth.

- 1. Clone the repository:

   ```bash
   git clone https://github.com/alphadev97/AlphaEstate.git
   ```

2. Change into the project directory:
   ```bash
   cd rentify
   ```
3. Install server dependencies:

   ```bash
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

5. Create a .env file in the root directory with your configuration settings.

   ```bash
   MONGO = "MONGODB URI"
   JWT_SECRET = "JWTSECRET"
   ```

6. Create a .env file in the ./client directory with your configuration settings.

   ```bash
   VITE_FIREBASE_API_KEY = "ADD YOUR FIREBASE KEY"
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

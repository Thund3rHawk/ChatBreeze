🚀 ChatBreeze
=============

Welcome to **ChatBreeze**, a full-stack real-time chat application built with modern web technologies. This app supports multiple users, private and group messaging, and is designed to be **scalable** and **maintainable**. 💬✨

📜 Table of Contents
--------------------

*   [🌟 Features](#-features)
*   [🏗️ Architecture](#️-architecture)
*   [🛠️ Technologies Used](#️-technologies-used)
*   [⚙️ Environment Variables](#️-environment-variables)
*   [💻 Run Locally](#-run-locally)
*   [🚀 Usage](#-usage)
*   [🤝 Contributing](#-contributing)
*   [📜 License](#-license)
    

🌟 Features
-----------

*   **Real-time Messaging** 🔥
*   **User Authentication and Authorization** 🔐
*   **Two-Step Verification** 🔄
*   **Profile Management** 📝
*   **Message Notifications** 🔔
    

🏗️ Architecture
----------------

ChatBreeze follows a **monorepo** structure, organizing both the frontend and backend within a single repository for streamlined development and deployment.

*   **Frontend**: Located in the apps/website directory, the frontend is built with [Next.js](https://nextjs.org/), providing a seamless user experience with server-side rendering and efficient routing.
*   **Backend**: The backend resides in the root directory and is powered by [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/). It manages API endpoints, authentication, and real-time communication using [Socket.IO](https://socket.io/).
*   **Database**: [MongoDB](https://www.mongodb.com/) serves as the primary database, offering scalability and flexibility for storing user data and messages.
    

🛠️ Technologies Used
---------------------

*   **Frontend**:
    
    *   [Next.js](https://nextjs.org/)
    *   [Tailwind CSS](https://tailwindcss.com/)
        
*   **Backend**:
    
    *   [Node.js](https://nodejs.org/)
    *   [Express](https://expressjs.com/)
    *   [Socket.IO](https://socket.io/)
    *   [Prisma ORM](https://www.prisma.io/)
        
*   **Database**:
    
    *   [MongoDB](https://www.mongodb.com/)
        


⚙️ Environment Variables
------------------------

To configure the application, set up the following environment variables:

### 🔹 Frontend (Website)

Create a .env file in the apps/website directory with:

`   NEXT_PUBLIC_API_ENDPOINT=http://localhost:8080   `

### 🔹 Backend (Server)

Create a .env file in the **root** directory with:

`   PORT=8080 `

` DATABASE_URL=mongodb+srv://:@/chatbreeze?  `

`AUTH_EMAIL=  <your_email>`

`AUTH_EMAIL_PASS= <your_auth_email_password>  `

Replace _<username>_, _<db_password>_, _<host>_, _<your_email>_, and _<your_auth_email_password>_ with your actual credentials.

💻 Run Locally
--------------

### Prerequisites

Ensure you have the following installed:

*   **Node.js** (>=18.x) 🟢
*   **MongoDB** 🍃
*   **Git** 🔗
    

### Clone the Repository

`   git clone https://github.com/Thund3rHawk/ChatBreeze.git `

` cd ChatBreeze   `

### Install and Run the Backend

`   npm install `

` npx prisma generate `

` npm run dev   `

### Install and Run the Frontend

Open another terminal:

`   cd apps/website `

` npm install `

` npm run dev   `

The frontend should now be running at **http://localhost:3000.**

🚀 Usage
--------

*   **Sign Up or Log In**: New users can sign up and verify their email using an OTP. Existing users can log in with their credentials.
*   **Create or Join Chats**: Start a chat by searching for a user by their email.
*   **Send Messages**: Type and send messages in real-time. Receive notifications for new messages.
    

🤝 Contributing
---------------

Contributions are always welcome! Please refer to the [CONTRIBUTING.md](https://github.com/Thund3rHawk/ChatBreeze/CONTRIBUTING.md) file for guidelines on how to contribute. 🚀

📜 License
----------

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/Thund3rHawk/ChatBreeze/blob/main/LICENSE) file for more details. 📄
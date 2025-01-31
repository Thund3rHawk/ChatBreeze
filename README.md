# ChatBreeze

Welcome to the Full Stack Chat Application! This project is a real-time chat application built using modern web technologies. The app supports multiple users, private and group messaging, and is designed to be scalable and maintainable.

## Features

- Real-time messaging
- Private and group chats
- User authentication and authorization
- Two step verification
- Profile management
- Message notifications

## Environment Variables

To run the website, you will need to add the following environment variables to your .env file inside app/website directory

`NEXT_PUBLIC_API_ENDPOINT =  http://localhost:8080`

To run the server, you will need to add the following environment variables to your .env file inside root directory

`PORT = 8080`

`DATABASE_URL = mongodb+srv://<username>:<db_password>@<host>/chatbreeze?<options>`

`AUTH_EMAIL`

`AUTH_EMAIL_PASS`

## Run Locally

**Prerequisites**

- Node.js (>=18.x)
- MongoDB
- Git

Clone the project

```bash
  git clone https://github.com/Thund3rHawk/ChatBreeze.git
```

Go to the project directory

```bash
  cd ChatBreeze
```

Install client and run with npm

```bash
  cd apps/website
  npm install
  npm run dev
```

Open another terminal and install server and run with npm

```bash
  npm install
  npx prisma generate
  npm run dev
```

## Usage

1. **Sign up or log in:**

   - New users can sign up for an account.
   - Verify their provided email id using OTP.
   - Existing users can log in with their credentials.

2. **Create or join chats:**

   - Start a chat by searching for a user by their email.

3. **Send messages:**
   - Type and send messages in real-time.
   - Receive notifications for new messages.

## Contributing

Contributions are always welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

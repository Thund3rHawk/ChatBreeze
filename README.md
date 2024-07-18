
# ChatBreeze

Welcome to the Full Stack Chat Application! This project is a real-time chat application built using modern web technologies. The app supports multiple users, private and group messaging, and is designed to be scalable and maintainable.




## Features

- Real-time messaging
- Private and group chats
- User authentication and authorization
- Two step verification
- Profile management
- Message notifications


## Run Locally


**Prerequisites**

- Node.js (>=14.x)
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
  cd client
  npm install
  npm run dev
```

Open another terminal and install server and run with npm
```bash
  cd server
  npm install
  npm start
```

## Environment Variables

To run this client, you will need to add the following environment variables to your .env file inside client directory

`NEXT_PUBLIC_API_ENDPOINT`

To run this server, you will need to add the following environment variables to your .env file inside server directory

`PORT`

`DATABASE_URL`

`AUTH_EMAIL`

`AUTH_EMAIL_PASS`



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

Contributions are always welcome!

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Commit your changes and push them to your fork.
- Open a pull request to the main repository.
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


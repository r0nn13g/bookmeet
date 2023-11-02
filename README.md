https://bookmeet.netlify.app/

### Technical Challenge
BookMeet is a web application built with the PERN (PostgreSQL, Express, React, Node.js) stack. This README provides detailed instructions on how to deploy the application on your local machine from a zip file.

***Prerequisites***
Before you begin, ensure you have the following software installed on your system:

Node.js
```
 Download and Install Node.js
```
PostgreSQL
```
 Download and Install PostgreSQL
```
Git
```
 Download and Install Git
```
Clone the Repository
```
git clone https://github.com/your-username/bookmeet.git
```
Navigate to the Project Directory

```
cd bookmeet
```
Navigate to the client and server directories and install the dependencies for both the client and server:
```
cd client
npm install
```
```
cd ../server
npm install
```

###Create a PostgreSQL Database

Launch PostgreSQL and create a new database.
```
CREATE DATABASE bookmeet;
```
Update the database configuration in server/config/db.js with your PostgreSQL connection details:
```
const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'bookmeet', // Use the name of your created database
  password: 'your-password',
  port: 5432, // Default PostgreSQL port
});
```
Initialize and seed the database
You can populate the database with sample data by running the following command in the server directory:

```
npm run db:init
npm run db:seed
```
In the server directory, start the Express server:
```
npm start
```
Your server should be running at http://localhost:8888.

***REACT***
In the client directory, start the React development server:
```
npm start
```
Your client should be running at http://localhost:3000.

Usage
You can now access the BookMeet application by opening your web browser and navigating to http://localhost:3000.

Features
List available meeting rooms.
Book a meeting room.
View upcoming bookings.
Delete bookings.


![bookmeet_mobile](https://github.com/r0nn13g/Meeting-app-take-home-challenge/assets/86433181/2697420c-2db7-4b41-815e-dfb3acb909a5)


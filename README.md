# Mechasys Project

This web application has been tested using only google chrome for the moment.
I made it responsive so that it gets displayed properly on smaller sized devices. Use the chrome dev tools to view it on different sized devices.

# Setup intructions:

### Steps to setup database on your computer

1. Install MySQL and MySQL Workbench on your computer.
2. Open MySQL workbench and click on the '+' icon to create a new connection.
3. Type `Mechasys` as the connection name.
4. Ensure hostname is set to `127.0.0.1`.
5. Enter your username and password that you used when installing MySQL.
6. Press 'OK' once done to save the connection.
7. Open the .env file located in the server folder of the project using a text editor and type in your MySQL user and password next to `DB_USER` and `DB_PASS` fields respectively.

- This is to allow the application to connect to your MySQL database.

8. Open your Mechasys connection in MySQL workbench and create a new schema called 'mechasys'. You can do so by right clicking under schema and press 'Create Schema'.
9. In your project folder, go to `server/database/queries/` to find and run both sql scripts to create a new user table and to populate it.

### Steps to run application on your computer

1. Open the project folder using either Git Bash or the command prompt and run `npm install`.
2. cd to server folder and run `npm install` again.
3. cd back and go to client folder and run `npm install` again.

- NOTE: You have to npm install for root, server, and client folders since they all have their own package.json files.

4. To start the backend, cd to server folder and run `npm start`.
5. To start the frontend, open a new Git Bash or Command prompt window and cd to client folder and run `npm start`.

- NOTE: You can also run `npm start` in the root folder to run both frontend and backend concurrently, however, this may only work on Windows computers. Otherwise see steps 4 and 5 to run both in seperate windows.

6. The web application should now be working.

- NOTE: If the backend or database doesn't seem to be working, it may have to do with either the version of MySQL or because a root user may be used. You can try running this script on your MySQL workbench: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'` where `password` is replaced by your current password. Restart the application and it should work.

# Premium Commands Discord Bot

Project code for my Discord Premium Commands Bot with Stripe Integration & React.

Please find the tutorial links here for full reference:

Find the tutorial playlist [here](https://www.youtube.com/playlist?list=PL_cUvD4qzbkxWAuRwfZLqAh_F0FatQdvI)

# Installation

_Be sure you have server intents enabled on your Discord Bot Application in the Developer Portal._

1. Clone the repo
2. Run `npm install` or `yarn install`
3. Get a Discord Bot Token & then go to `slappey.json` and place your bot token as a value for `token`.
4. Configure the prefix to something of your choice in `slappey.json`

Setting up MySQL:

5. Install MySQL, or a supported database from TypeORM.
6. Create a `.env` file if one is not present and paste this in there:
   ```
   MYSQL_DB_HOST=
   MYSQL_DB_PORT=
   MYSQL_DB_USERNAME=
   MYSQL_DB_PASSWORD=
   MYSQL_DB_DATABASE=
   ```
7. Configure the environment variables inside your `.env` file. Set the appropriate value for each variable. e.g: MYSQL_DB_HOST is the hostname of where you want the connection to be made to. You can use a remote server or localhost.
8. Be sure to create your database or have it created before running the bot, because it will throw an error when connecting to the DB saying the database does not exist.
9. Run `npm start` or `yarn start`
10. If successful, no errors should be thrown and the bot should login fine.

# Archiver

This is a bare bones POC Node.js app using [Express 4](http://expressjs.com/) that does a few things.

1. Gets data from SF (accounts)
2. Creates a JSON that gets sent to AWS S3. 
3. Currently written as all "get" requests, needs to get restricted in the future
4. Uses a .env file with the below settings
5. Relies on the AWS SDK and needs global settings set.

# What you need from Salesforce   

1. consumerKey
2. consumerSecret
3. db schema
4. db name

# What you need from AWS

1. S3_BUCKET
2. S3_ACCESS_KEY_ID
3. S3_SECRET_ACCESS_KEY
4. S3_REGION (us-east-1)
5. S3_CONTENT_TYPE (application/json)

# What you need from Heroku

1. PG_USER
2. PG_PASSWORD
3. PG_HOST
4. PG_PORT
5. PG_DATABASE
7. DATABASE_URL
8. PG_QUERY (SELECT * from schema.object(table)')

This applications base is [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have:
[Node.js](http://nodejs.org/)
[Heroku CLI](https://cli.heroku.com/) installed.
[AWS-SDK] (https://github.com/aws/aws-sdk-js)
[DOTENV] (https://github.com/motdotla/dotenv#readme)

Commands to start:
$ git clone https://github.com/heroku/Archiver.git # or clone your own fork
$ cd Archiver
$ npm install
$ npm start


Your app should now be running on the port that you have it set to, my default was 3000 [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

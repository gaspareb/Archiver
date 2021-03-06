# gbastone@salesforce.com

# Archiver

This is a bare bones POC Node.js app using [Express 4](http://expressjs.com/) that does a few things.

1. Gets data from SF (accounts)
2. Creates a JSON that gets sent to AWS S3. 
3. Currently written as all "get" requests, needs to get restricted in the future
4. Uses a .env file with the below settings
5. Relies on the AWS SDK and needs global settings set.
6. Code needs a good refactoring...

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

## Make sure you have:
1. [Node.js](http://nodejs.org/)
2. [Heroku CLI](https://cli.heroku.com/) installed
3. [AWS-SDK] (https://github.com/aws/aws-sdk-js)
4. [DOTENV] (https://github.com/motdotla/dotenv#readme)


## Commands to start:
1. $ git clone https://github.com/heroku/Archiver.git # or clone your own fork
2. $ cd Archiver
3. $ npm install
4. $ npm start

Your app should now be running on the port that you have it set to, my default was 3000 [localhost:3000](http://localhost:3000/).

## Running Locally
1. heroku local
2. http://localhost:3002/getBucketList - should return json data and not an error
3. http://localhost:3002/getAccounts - should return json list of accounts

## Deploying to Heroku and running on server
1. $git push heroku main 
2. $heroku open
3. in browser append https://YOURSERVER.herokuapp.com/getBucketList - should return 
4. actual command ti run 

## Create heroku app command
1. heroku create 


## Or go directly and get info
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Shortcuts

1. git add .
2. git commit -a -m "changes"
3. git push -f origin main



## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

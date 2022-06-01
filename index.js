const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const contentType=process.env.S3_CONTENT_TYPE
const aws = require('aws-sdk');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/listBuckets', (req, res) => {
    aws.config.update({
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      region: process.env.S3_REGION
    });
    const s3 = new aws.S3();
    s3.listBuckets(function (err, data) { 
      if(err){
        console.log('err ' + Date.now() + ' ' + err); 
        res.end();
      }else{
        res.write(JSON.stringify(data));
        res.end();
      }
    });
    }
  )
  .get('/getBucketList', (req, res) => {
    let msg = 'A new getBucketList request received at ' + Date.now(); 
    aws.config.update({
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      region: process.env.S3_REGION
    });
    const s3 = new aws.S3();
    const fileName = Date.now(); 
    const fileType = contentType; 
    const s3Params = {
      Bucket: process.env.S3_BUCKET
    };
    s3.listObjects(s3Params, function (err, data) { 
      if(err)throw err;
      let msg = 'none for now';      
      if(err){
        msg = 'err for now: ' + err;
      }else{
        res.write(JSON.stringify(data));
        res.end();
      }
    });
    }
  )
  .get('/archiver', (req, res) => {
        const date = new Date();    
        console.log('A new request received at ' + date + ' ' + process.env.S3_BUCKET); 
        //get data
        const data = '{gaspare:bastone}';
        
        //process data
        //Dump data to S3AWS 
        aws.config.update({
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
          region: process.env.S3_REGION
        });
        const s3 = new aws.S3();
        const fileName = new Date();
        const fileType = contentType;
        const s3Params = {
          Bucket: process.env.S3_BUCKET,
          Key: '' + fileName + '.json',
          Expires: 60,
          ContentType: fileType
        };
        s3.putObject(s3Params, function(err, data) {
          if (err){
            console.log(err, err.stack); // an error occurred
          }else{
            res.write(JSON.stringify(data));
            res.end(); 
          } // successful response
        });
      }
    )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

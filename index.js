const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/archiver', (req, res) => {
        console.log('A new request received at ' + Date.now());
        //get data
        //process data
        //send data
        res.send('A new request received at ' + Date.now());
      }
    )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

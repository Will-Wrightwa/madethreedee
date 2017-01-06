
express = require('express')
app = express()
path = require('path')
bodyParser = require('body-parser')
// mongoose = require('mongoose')
app.use(express.static(path.join(__dirname,'client')))
app.use(express.static(path.join(__dirname,'bower_components')))
app.use(bodyParser.json())

//mongoose stuff...
// require('./server/config/mongoose.js')(app)

//routes
// require('./server/config/routes.js')



app.listen(8000,function(){
    console.log("listening on port 8000");
})

//## change this!!!
var dbName = "****YOUR DB NAME HERE****"
//###!!!!!!
var mongoose = require('mongoose')
var fs = require('fs')
var path = require('path')
var models_path = path.join( __dirname, "../models")
var dbPath = path.join('mongodb://localhost/',dbName)
var reg  = new RegExp( ".js$", "i" )

mongoose.connect(dbPath)


mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});
fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

//import webpack from 'webpack';
//import config from '../webpack2.config.dev';

const port = 3000;
const app = express();
//const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

app.use( compression() );
app.use( express.static( 'dist' ) );

app.get( '/', function( req, res ) {
  res.sendfile( path.join( __dirname, '../dist/index.html' ) );
});

app.get( '/users', ( req, res ) => {
  // Hard coding for simplicity. Pretend this hits a read database
  res.json(
    [
      { "id": 1, "firstName": "Bob"  , "lastName": "Smith", "email": "bob@gmail.com" },
      { "id": 2, "firstName": "Tammy", "lastName": "Noton", "email": "norton@gmail.com" },
      { "id": 3, "firstName": "Tina" , "lastName": "Lee"  , "email": "lee@gmail.com" }
    ]
  );
} );

app.listen( port, function( err ) {
  if( err ){
    console.log( err );
  }
  else {
    open( 'http://localhost:' + port );
  }
});

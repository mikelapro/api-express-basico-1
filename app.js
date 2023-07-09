console.log( 'App ok' );

const express = require( 'express' );
require( 'dotenv' ).config();

const api = express();
const port = process.env.PORT;

api.get( '/', ( req, res ) => {
    res.send( 'Hola API! (con express)' );
} );

api.listen( port, () => {
    console.log( `Example API listening on port ${port}` );
} );

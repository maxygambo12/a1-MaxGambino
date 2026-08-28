const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/script.js':
      sendFile( response, 'script.js' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const contentTypes = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.png':  'image/png'
}

const sendFile = function( response, filename ) {
   const ext = filename.slice( filename.lastIndexOf( '.' ) )
   fs.readFile( filename, function( err, content ) {
     response.writeHead( 200, { 'Content-Type': contentTypes[ ext ] || 'text/plain' } )
     response.end( content, 'utf-8' )
   })
}

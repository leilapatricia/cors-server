const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy.createServer({
    originWhitelist: [
      'http://localhost:19006',
      'http://listed-e50b8.web.app',
      'https://listed-e50b8.firebaseapp.com',
      'https://listed-e50b8.web.app/',
      'http://listed-e50b8.firebaseapp.com/',
    ],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

// Only used for production server.
// You may not even need this if you have proxying setup (just run build/index.js directly).
// Please update as neccesary.

const ms = require('ms')

global.SECURITY = {
  noSniff: true,
  ieNoOpen: true,
  xssFilter: true,
  frameguard: true,
  hidePoweredBy: true,
  referrerPolicy: true,
  dnsPrefetchControl: true,
  hpkp: {
    maxAge: ms('90 days'),
    sha256s: ['AbCdEf123=', 'ZyXwVu456='] // CHANGE ME
  },
  hsts: {
    maxAge: ms('90 days'),
    includeSubdomains: true,
    force: true
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'www.google-analytics.com'],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'www.google-analytics.com', 'stats.g.doubleclick.net'],
      sandbox: ['allow-same-origin', 'allow-scripts']
    }
  }
}

// Start secure server.
const server = require('./build').default
require('auto-sni')({
  agreeTos: true,
  email: 'user@email.com', // CHANGE ME
  domains: ['domain.com'], // CHANGE ME
  ports: {
    http: process.env.HTTP_PORT,
    https: process.env.HTTPS_PORT
  }
}, server.emit.bind(server, 'request'))

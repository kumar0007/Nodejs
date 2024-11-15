

// String property
const serverName = 'MyServer';

// Number property
const serverPort = 8080;

// Array property
const supportedProtocols = ['http', 'https', 'ftp'];

// Object property
const serverConfig = {
  host: 'localhost',
  port: 8080,
  protocol: 'http'
};

// Class definition
class Server {
  constructor(name, port) {
    this.name = name;
    this.port = port;
  }

  start() {
    console.log(`${this.name} is starting on port ${this.port}`);
  }

  stop() {
    console.log(`${this.name} is stopping`);
  }
}

// Export the properties and class
module.exports = {
  serverName,
  serverPort,
  supportedProtocols,
  serverConfig,
  Server
};
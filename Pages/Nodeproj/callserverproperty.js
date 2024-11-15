
// Import the server properties module
const serverProperties = require('./serverProperties');

// Use the imported properties
console.log(`Server Name: ${serverProperties.serverName}`);
console.log(`Server Port: ${serverProperties.serverPort}`);
console.log(`Supported Protocols: ${serverProperties.supportedProtocols.join(', ')}`);
console.log(`Server Config: ${JSON.stringify(serverProperties.serverConfig)}`);

// Create an instance of the Server class and use its methods
const myServer = new serverProperties.Server(serverProperties.serverName, serverProperties.serverPort);
myServer.start();
myServer.stop();
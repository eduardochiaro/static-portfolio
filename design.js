const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const chokidar = require('chokidar');

const PORT = 3000;
const WEBSOCKET_PORT = 3001;

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'design/index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('index.html not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Inject live reload script before sending the HTML
        const injectedHTML = injectLiveReloadScript(data.toString());
        res.end(injectedHTML);
      }
    });
  } else if (req.url === '/resume') {
    const resumePath = path.join(__dirname, 'design/resume.html');
    fs.readFile(resumePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('resume.html not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Inject live reload script before sending the HTML
        const injectedHTML = injectLiveReloadScript(data.toString());
        res.end(injectedHTML);
      }
    });
  } else if (req.url === '/terminal') {
    // Add handler for lab URL
    const labPath = path.join(__dirname, 'design/terminal.html');
    fs.readFile(labPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('terminal.html not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const injectedHTML = injectLiveReloadScript(data.toString());
        res.end(injectedHTML);
      }
    });
  } else if (req.url === '/daily') {
    // Add handler for lab URL
    const labPath = path.join(__dirname, 'design/daily.html');
    fs.readFile(labPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('daily.html not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const injectedHTML = injectLiveReloadScript(data.toString());
        res.end(injectedHTML);
      }
    });
  } else if (req.url.endsWith('.css')) {
    // Serve CSS files
    const cssPath = path.join(__dirname, 'design', req.url);
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('CSS file not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else if (req.url.endsWith('.js')) {
    // Serve JavaScript files
    const jsPath = path.join(__dirname, 'design', req.url);
    fs.readFile(jsPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('JavaScript file not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data);
      }
    });
  // Serve other static files (images, etc.)
  }
  else if (req.url.startsWith('/static/')) {
    const staticPath = path.join(__dirname, req.url);
    fs.readFile(staticPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Static file not found');
      } else {
        const ext = path.extname(staticPath).toLowerCase();
        let contentType = 'application/octet-stream';
        if (ext === '.html') contentType = 'text/html';
        else if (ext === '.css') contentType = 'text/css';
        else if (ext === '.js') contentType = 'application/javascript';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.svg') contentType = 'image/svg+xml';
        else if (ext === '.ico') contentType = 'image/x-icon';
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Function to inject live reload script
function injectLiveReloadScript(html) {
  const liveReloadScript = `
    <script>
      (function() {
        const wsProtocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
        const wsHost = window.location.hostname || 'localhost';
        const wsUrl = wsProtocol + wsHost + ':${WEBSOCKET_PORT}';
        
        console.log('Connecting to live reload server at:', wsUrl);
        let socket;
        let reconnectTimer;
        
        function connect() {
          socket = new WebSocket(wsUrl);
          
          socket.onopen = function() {
            console.log('Live reload connected!');
            clearTimeout(reconnectTimer);
          };
          
          socket.onmessage = function(msg) {
            console.log('Received message:', msg.data);
            if (msg.data === 'reload') {
              console.log('Reloading page...');
              window.location.reload();
            }
          };
          
          socket.onclose = function() {
            console.log('Live reload connection closed. Attempting to reconnect...');
            // Try to reconnect every 2 seconds
            reconnectTimer = setTimeout(connect, 2000);
          };
          
          socket.onerror = function(err) {
            console.error('Live reload socket error:', err);
            socket.close();
          };
        }
        
        connect();
      })();
    </script>
  `;
  
  // Better HTML manipulation to ensure the script is properly injected
  if (html.includes('</body>')) {
    return html.replace('</body>', `${liveReloadScript}</body>`);
  } else {
    return html + liveReloadScript;
  }
}

// Start the HTTP server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Live reload WebSocket server running on port ${WEBSOCKET_PORT}`);
});

// Set up WebSocket server for live reload
const wss = new WebSocket.Server({ port: WEBSOCKET_PORT });
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log(`Client connected to live reload (${clients.size} active connections)`);
  
  ws.on('close', () => {
    clients.delete(ws);
    console.log(`Client disconnected from live reload (${clients.size} active connections)`);
  });
  
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    clients.delete(ws);
  });
});

// Set up file watcher with improved options for the design directory
const designDir = path.join(__dirname, 'design');
console.log(`Starting file watcher for directory: ${designDir}`);

const watcher = chokidar.watch(designDir, {
  ignored: /(^|[\/\\])\./, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 100,
    pollInterval: 100
  },
  depth: 99 // Watch deeply nested files
});

// Log watcher events for debugging
watcher
  .on('ready', () => console.log('Initial scan complete. Watching for changes...'))
  .on('error', error => console.error(`Watcher error: ${error}`))
  .on('add', path => console.log(`File ${path} has been added`))
  .on('change', path => {
    console.log(`File ${path} has been changed`);
    notifyClients();
  })
  .on('unlink', path => console.log(`File ${path} has been removed`));

// Function to notify all clients
function notifyClients() {
  console.log(`Notifying ${clients.size} client(s) to reload`);
  
  clients.forEach(client => {
    try {
      if (client.readyState === WebSocket.OPEN) {
        client.send('reload');
      }
    } catch (error) {
      console.error('Error sending message to client:', error);
      clients.delete(client);
    }
  });
}

// Handle server shutdown
process.on('SIGINT', () => {
  console.log('Closing server and file watcher...');
  watcher.close();
  wss.close();
  server.close();
  process.exit(0);
});
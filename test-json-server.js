try {
  const jsonServer = require('json-server');
  console.log('json-server loaded!');
} catch(e) {
  console.error('Failed to load json-server:', e.message);
}
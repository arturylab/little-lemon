/** @type {import('jest').Config} */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Ruta al directorio raíz de tu app Next.js
});

const config = {
  verbose: true,
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(config);
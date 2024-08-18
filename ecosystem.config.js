module.exports = {
  apps: [
    {
      name: 'your-app-name',
      script: './server.js',
      interpreter: 'node',
      interpreter_args: '--experimental-modules',
    },
  ],
};

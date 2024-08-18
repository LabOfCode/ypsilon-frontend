module.exports = {
  apps: [
    {
      name: 'your-app-name',
      script: './server.mjs',
      interpreter: 'node',
      interpreter_args: '--experimental-modules',
    },
  ],
};

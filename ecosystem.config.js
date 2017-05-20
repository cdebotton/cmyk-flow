module.exports = [
  {
    name: 'http',
    script: './libs/http',
    interpreter: 'babel-node',
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: 3000,
    },
  },
  {
    name: 'webpack',
    script: './scripts/dev.js',
    interpreter: 'babel-node',
    env: {
      NODE_ENV: 'development',
      PORT: 3001,
    },
  },
];

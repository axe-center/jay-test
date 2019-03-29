module.exports = {
  apps: [{
    name: 'jay-test',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-191-112-34.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/jayhr.pem',
      ref: 'origin/master',
      repo: 'https://github.com/axe-center/jay-test.git',
      path: '/home/ubuntu/jaytest',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
const os = require('os')
const fs = require('fs')
const path = require('path')
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

// Note: the local TLS certificates will have been created at
// the post-install stage of npm install.
const certDirectory = path.join(os.homedir(), '.small-tech.org', 'auto-encrypt-localhost')
const cert = fs.readFileSync(path.join(certDirectory, 'localhost.pem'))
const key = fs.readFileSync(path.join(certDirectory, 'localhost-key.pem'))

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    // By default, `npm run build` will create a standard static app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: static({pages: '.generated', assets: '.generated'}),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    files: {
      assets: '.kit/static',
      lib: '.kit/src/lib',
      routes: '.kit/src/routes',
      template: '.kit/src/app.html'
    },

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    }
  }
}

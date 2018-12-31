import express, { Application } from 'express';

// this require is necessary for server HMR to recover from error
/* tslint:disable:no-var-requires */
let server: Application = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      server = require('./server').default as Application;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

const app = express()
  // @ts-ignore
  .use((req, res) => server.handle(req, res))
  .listen(port, (err: any) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${port}`);
  });

export default app;
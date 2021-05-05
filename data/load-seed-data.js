/* eslint-disable no-console */
import client from '../lib/client.js';
// import our seed data:
import dogs from './dogs.js';

run();

async function run() {

  try {

    await Promise.all(
      dogs.map(cat => {
        return client.query(`
          INSERT INTO dogs (title, description, url, year)
          VALUES ($1, $2, $3, $4);
        `,
        [cat.title, cat.description, cat.url, cat.year]);
      })
    );
    

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
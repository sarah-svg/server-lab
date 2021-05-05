import app from '../lib/app.js';
import supertest from 'supertest';
import client from '../lib/client.js';
import { execSync } from 'child_process';

const request = supertest(app);

describe('API Routes', () => {

  beforeAll(() => {
    execSync('npm run setup-db');
  });

  afterAll(async () => {
    return client.end();
  });

  const expecteddogs = [
    {
      id: 1,
      title: 'Themer',
      description: 'German Shepard',
      url: 'dogs/Themer.png',
      year: 1892,
    
  
    },
    {
      id: 2,
      title: 'Sabastion',
      description: 'Dutch Shepard',
      url: 'dogs/Sabastion.jpeg',
      year: 1978,
  
    },
    {
      id: 3,
      title: 'Dare',
      description: 'Huski',
      url: 'dogs/Dare.jpeg',
      year: 1970,
  
    
    },
    {
      id: 4,
      title: 'Stoner',
      description: 'Pit Bull',
      url: 'dogs/Stoner.jpeg',
      year: 1990,
  
   
    },
    {
      id: 5,
      title: 'Sylvester',
      description: 'German Shepard',
      url: 'dogs/sylvester.jpeg',
      year: 1945,
  
    },
    {  id: 6,
      title: 'Velma',
      description: 'Dutch Shepard',
      url: 'dogs/Velma.jpeg',
      year: 1928,
  
  
    },
    {
      id: 7,
      title: 'Smokey',
      description: 'Huski',
      url: 'dogs/hello-kitty.jpeg',
      year: 1974,
  
  
    },
    {
      id:8,
      title: 'Bingo',
      description: 'Dutch Shepard',
      url: 'dogs/Bingo.jpeg',
      year: 1985,
  
  
    }
  ];

  // If a GET request is made to /api/dogs, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('GET /api/dogs', async () => {
    // act - make the request
    const response = await request.get('/api/dogs');

    // was response OK (200)?
    expect(response.status).toBe(200);

    // did it return the data we expected?
    expect(response.body).toEqual(expecteddogs);

  });

  // If a GET request is made to /api/dogs/:id, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data for the cat with that id?
  test('GET /api/dogs/:id', async () => {
    const response = await request.get('/api/dogs/2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expecteddogs[1]);
  });
});
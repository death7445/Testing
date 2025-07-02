import fetch from 'node-fetch';
import { test, expect } from '@playwright/test';

const API_KEY = 'x-api-key: reqres-free-v1';

test('GET request using node-fetch with API key', async () => {
  const response = await fetch('https://leagueify.org/api/data', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      // or use 'x-api-key': API_KEY if your API expects that header
    },
  });
  expect(response.ok).toBeTruthy();
  const data = await response.json();
  console.log(data);
});

test('GET request to example API with API key', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/1', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
});

test('POST request to example API with API key', async ({ request }) => {
  const response = await request.post('https://leagueify.org/api/posts', {
    data: { title: 'Test Post', body: 'This is a test post.' },
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id');
});

test('get api data with API key', async ({ request }) => {
  const response = await request.get('https://leagueify.org/api/data', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  const data = await response.json();
  console.log(data);
});
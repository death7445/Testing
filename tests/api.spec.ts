import fetch from 'node-fetch';
import { test, expect } from '@playwright/test';

test('GET request using node-fetch', async () => {
  const response = await fetch('https://leagueify.org/api/data');
  expect(response.ok).toBeTruthy();
  const data = await response.json();
  console.log(data);
});

test('GET request to example API', async ({ request }) => {
  const response = await request.get('https://leagueify.org');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
});

test('POST request to example API', async ({ request }) => {
  const response = await request.post('https://leagueify.org/api/posts', {
    data: { title: 'Test Post', body: 'This is a test post.' },
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id');
});

test('get api data', async ({ request }) => {
  const response = await request.get('https://leagueify.org/api/data');
  const data = await response.json();
  console.log(data);
});

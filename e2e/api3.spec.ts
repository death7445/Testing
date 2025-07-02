import fetch from 'node-fetch';
import { test, expect } from '@playwright/test';

const API_KEY = 'x-api-key: reqres-free-v1';

test('GET users using node-fetch', async () => {
  const response = await fetch('https://reqres.in/api/users?page=1', {
    headers: {
      'x-api-key': API_KEY, // set the header key and value
    },
  });
  console.log('Status:', response.status);
  const body = await response.text();
  console.log('Body:', body);
  expect(response.ok).toBeTruthy();
  const data = JSON.parse(body);
  expect(data).toHaveProperty('data');
  expect(Array.isArray(data.data)).toBeTruthy();
});

test('GET users using Playwright request', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=1', {
    headers: {
      'x-api-key': API_KEY,
    },
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('data');
  expect(Array.isArray(data.data)).toBeTruthy();
});

test('POST create user using Playwright request', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: { name: 'Test User', job: 'Tester' },
    headers: {
      'x-api-key': API_KEY,
    },
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('createdAt');
});


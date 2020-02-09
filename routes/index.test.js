const mongoose = require('mongoose');
const supertest = require('supertest');

const app = require('../app');
const examples = require('./testExamples');

const request = supertest(app);

// Ensuring that the mongo connection is closed after all tests are completed.
afterAll(async () => {
    await mongoose.connection.close();
});

test('API Request test-1', async done => {

    const response = await request.post('/').send(examples.example_request_1);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(examples.example_response_1);

    done();
});

test('API Request test-2', async done => {

    const response = await request.post('/').send(examples.example_request_2);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(examples.example_response_2);

    done();
});

test('API Request test-3', async done => {

    const response = await request.post('/').send(examples.example_request_3);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(examples.example_response_3);

    done();
});

test('API Request test-4', async done => {

    const response = await request.post('/').send(examples.example_request_4);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(examples.example_response_4);

    done();
});

test('API Request test-5', async done => {

    const response = await request.post('/').send(examples.example_request_5);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(examples.example_response_5);

    done();
});

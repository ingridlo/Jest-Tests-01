const app = require ('../index.js')
const request = require('supertest');

describe('GET usuarios / Retorna mensaje Hola Mundo', () => {
test("La ruta existe", async()=>{
    const response = await request(app).get('/api/actor').send();
    expect(response.statusCode).toBe(200)   
})
})
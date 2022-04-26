const app = require ('../index.js')
const request = require('supertest');

describe('GET actor', () => {
test("La ruta existe", async()=>{
    const response = await request(app).get('/api/actor').send();
    expect(response.statusCode).toBe(200) 
})
test("Retorne un array de los actores", async () => {
    const response = await request(app).get('/api/actor').send();
    expect(response.body).toBeInstanceOf(Array);
})

test("Retorne un actor pelo id", async () => {
    const user =[{
        id: 2,
        documento: "11348473389",
        tipo_documento: "TI",
        nombres: "Carlos",
        apellidos: "Meneses",
        contrasena: "047cf3044503d764a4e8ccf00edb03fb67454986",
        correo: "carlosmeneses@gmail.com",
        telefono_celular: "3013984758",
        numero_expediente: "EXP-9038-2A",
        genero: "hombre",
        fecha_nacimiento: "2020-07-09T05:00:00.000Z",
        estado_actor_id: 1,
        institucion_id: 1,
        tipo_actor_id: 1,
        fecha_creacion: "2020-10-09T06:12:23.000Z",
        fecha_actualizacion: null
    }]
    const response = await request(app).get('/api/actor/2').send();
    expect(response.body).toEqual(user);
})
})

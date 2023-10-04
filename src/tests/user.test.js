const request = require("supertest")
const app = require('../app');

let id;

let token;

test("POST /users", async () => {
    const user = {
        firstName: "Facundo",
        lastName: "Torres",
        email: "facundotorres@gmail.com",
        password: "facumanya",
        phone: "1234567"
    }
    const res = await request(app).post("/users").send(user);
    id = res.body.id
	expect(res.status).toBe(201);
    expect(res.body.email).toBe(user.email);
})

test('POST /users/login', async () => {
    const body = {
        email: "facundotorres@gmail.com",
        password: "facumanya"
    }
    const res = await request(app).post('/users/login').send(body)
    token = res.body.token
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
});

test('GET /users', async () => {
    const res = await request(app).get('/users').set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
});

test('PUT /users/:id', async () => {
    const body = {
        firstName: "Facugol Update"
    }
    const res = await request(app).put(`/users/${id}`)
    .send(body)
    .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
});



test('POST /users/login con credenciales invalida debe retornar error', async () => {
    const body = {
        email: "invalid@gmail.com",
        password: "matiaspro",
    }
    const res = await request(app).post('/users/login').send(body)
    expect(res.status).toBe(401);
});

test('DELETE /users/:id', async () => {
    const res = await request(app)
    .delete(`/users/${id}`)
    .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
});
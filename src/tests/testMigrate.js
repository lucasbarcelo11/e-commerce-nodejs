const sequelize = require('../utils/connection');
const request = require('supertest')
const app = require('../app')

const main = async() => {
    try{
        // Acciones a ejecutar antes de los tests
        sequelize.sync();
        
        const userTest = {
            email: "test@gmail.com",
            password: "test123",
            firstName: "test",
            lastName: "testa",
            phone: "1234567"
        }
        await request(app).post('/users').send(userTest)
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();
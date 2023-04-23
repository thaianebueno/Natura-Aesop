const faker = require('faker-br');

export const dados = {

    senha: faker.internet.password() + `${'1Aa?'}`,
    name: faker.name.firstName(),
    sobrenome: faker.name.lastName(),
    email: faker.internet.email(),
    celular: `${'11111111111'}`,
    cpf: faker.br.cpf()

}
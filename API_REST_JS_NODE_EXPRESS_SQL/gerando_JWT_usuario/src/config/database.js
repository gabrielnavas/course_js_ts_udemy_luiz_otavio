require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    // host: process.env.DATABASE_HOST,
    // port:process.env.DATABASE_PORT,
    // username:process.env.DATABASE_USERNAME,
    // password:process.env.DATABASE_PASSWORD,
    // database:process.env.DATABASE_DATABASE,
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'escola',
    
    define: {
        timestamps: true, // cria um created_at e updated_at
        underscored: true, //transofrmar em foo_foo em fooFoo
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: "updated_at",
     },
    dialectOptions: { 
        timezone: 'America/Sao_Paulo'
    },
    timezone: 'America/Sao_Paulo'
}
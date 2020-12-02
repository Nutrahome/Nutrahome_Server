const swaggerJsdoc = require('swagger-jsdoc');
const { HOST, PORT } = require('./config')

// swagger options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Nutrahome API",
            description: "Welcome to Nutrahome API documentations",
            termsOfService: "https://github.com/Nutrahome",
            contact: {
                name: "Lintang Wisesa",
                url: "https://lintangwisesa.github.io/me/",
                email: "lintangwisesa@ymail.com"
            },
            license: {
                name: "Apache 2.0",
                url: "https://www.apache.org/licenses/LICENSE-2.0.html"
            },
            version: "0.0.1",
            server: {
                url: `https://${HOST}:${PORT}`,
                description: "Development server"
            }
        },
        host: `${HOST}:${PORT}`,
        basePath: '/'
    },
    apis: ['./docs/**/*.yaml'],
}

// swagger UI setup
const swaggerDocs = swaggerJsdoc(swaggerOptions)

module.exports = swaggerDocs;
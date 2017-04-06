const config = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        underscored: true,
        timestamps: false,
    },
};

export default {
    development: config,
    production: config,
    staging: config,
    test: config,
};

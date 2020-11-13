module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'api.unifsa.com.br',
      user: 'postgres',
      password: 'atMGVZxQ2GpRXxY3HHQ9',
      database: 'sisinscricao',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};

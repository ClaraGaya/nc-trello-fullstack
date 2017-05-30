module.exports = {
    DB: {
        dev: process.env.DATABASE_URL || 'postgres://localhost:5432/todosdb_test',
        test: 'postgres://localhost:5432/todosdb_test'
    }, 
    PORT: {
        dev: process.env.PORT || 3000,
        test: 3030
    }
}

### Fullstack CRUD app using React and Redux along with an API server

Step one of this project was to set up a database layer in my own machine with postgresql, designing first the database schema.
In this first version of the project, the user's browser makes a request to localhost:3000, loading the static assets from the Webpack dev server. The user's browser / React then makes requests as needed directly to the API server hosted on localhost:9090 with the following endpoints:

#URL	            HTTP  	    Action
/api/lists	        GET	        Return ALL lists
/api/lists/:id      GET	        Return a SINGLE list
/api/list	        POST	    Add a list
/api/lists/:id	    PUT	        Update a list
/api/lists/:id	    DELETE	    Delete a list
/api/tasks	        GET	        Return ALL tasks
/api/tasks/:id      GET	        Return a SINGLE task
/api/task	        POST	    Add a task
/api/tasks/:id	    PUT	        Update a task
/api/tasks/:id	    DELETE	    Delete a task


### Technoligies used on the backend
- Express - HTTP utility methods and middleware
- pg-promise - connection management
- PostgreSQL - database system
- Bluebird - promise library
- Cors - enable Cross-origin resource sharing for a single route


### Technoligies used on the frontend
- React 
- Redux 
- Axios 
- Underscore
- Webpack


### Prerequisites
**Postgresql setup:** To run this project you'll need Install PostgreSQL, set up your database layer and run the file in ./server/db.sql to create the database, apply the schema, and add some data to the newly created database.
```
$ createdb todosdb
$ psql -d todosdb -h localhost -p 5432 -U clara -f db.sql
```

### Next step (v.2)
Deploying my React app alongside a server to Heroku (and Amazon's S3).
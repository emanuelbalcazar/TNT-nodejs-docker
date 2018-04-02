# Nodejs - Mongodb - Docker

Construir con: 
`docker build -t nodejs-docker:1.0 .`

Ejecutar con: 
`docker run -p 8000:8000 nodejs-docker:1.0`

Verificar en: 
`http://localhost:8000/info`

Construir y desplegar con docker compose:
`docker-compose up -d --build`

Utilidades:
`docker-compose ps`
`docker-compose exec nodejs bash`


## API REST

Agregar un nuevo usuario:
* METODO: POST
* URL: http://localhost:8000/users/add
* PARAMS: { name: "nombre", surname: "apellido" }

Listar todos los usuarios:
* METODO: GET
* URL: http://localhost:8000/users

Obtener un usuario por su ID:
* METODO: GET
* URL: http://localhost:8000/users/:id

Eliminar un usuario por su ID:
* METODO: DELETE
* URL: http://localhost:8000/users/:id

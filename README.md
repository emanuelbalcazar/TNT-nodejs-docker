Construir con: 
`docker build -t nodejs-docker:1.0 .`

Ejecutar con: 
`docker run -p 8000:8000 nodejs-docker:1.0`

Verificar en: 
`http://localhost:8000/info`

Con docker compose:
`docker-compose up -d --build`
`docker-compose ps`
`docker-compose exec nodejs bash`
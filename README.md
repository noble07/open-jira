# Next.js OpenJira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* El -d, signidica __detached__

MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.example__ a __.env__

## Llenar la base de datos con información de pruebas

Llamara:
```
  http://localhost:3000/api/seed
```

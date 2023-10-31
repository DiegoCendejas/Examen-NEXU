#Examen Backend Nexu

## Instalación

- Necesario tener Node v18 o superior
- Necesario tener MongoDB y el proceso en ejecución

Instalar dependencias e iniciar el servidor

```sh
npm install
npm run start
```

Hacer el llenado de la BD de prueba

- Ejecutar un POST a la url http://localhost:3000/populate-db

Esto se encargará de limpiar y poblar la BD


## Pruebas

Para ejecutar las pruebas utilizar el siguiente comando

```sh
npm run test
```

## Linter
Se utilizó Rome como linter y formatter por su rapidez y se mantuvo la configuración default.
Nota: unicamente funcional en VS Code.

## Comentarios

La intención de todo el proceso fue definir las bases del proyecto como primera instancia, seguido de crear un par de pruebas para cada ruta o servicio que definieran el comportamiento esperado del código a generar, crear la BD, modelos, conexión y poblarla y finalmente realizar la codificación de los servicios.
Por temas de contratiempos unicamente se genero la base del proyecto, se creó la BD, se poblo, se conecto al API y se paso a la codificación de los servicios.
Hizo falta realizar la normalización de la BD y separar los datos en marcas y modelos, hizo falta tiempo para definir las pruebas y unicamente pase un poco a logica para consultas y funcionamiento de los servicios
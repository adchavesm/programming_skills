# programming_skills
## Requerimientos
- Se requiere tener instalado y configurado Docker
- Instalado Nodejs

## Guia

### Configurar Base de datos

- Por medio de el archivo /database/docker-compose-yml, arrancamos una instanciad e mysql, con ayuda de las imagenes de docker.
- Nos conectaremos a la consola de la base de datos y insertaremos las sentencias del archivo /database/db.sql
- Ya tendremos la base de datos configurada.

### Inicio de la aplicacion

#### Nos situaremos en la raiz de el proyecto y ejecutaremos:

- npm i (para instalar las dependencias)
- npm run dev (para poner a correr la aplicacion)
- Ahora podemos ir a nuestro navegador y entrar a localhost:3000 y observar el resultado
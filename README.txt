Siendo que el archivo con las consignas estaba en español, procedo a dejar esta mini guía en este idioma.

Al levantar el servidor de GraphQl, no olvides la "/" al final del localhost:4000/ <--- !

Mini guía: 

La información de base de datos de Publishers & Books puede ser libremente solicitada. Pero para acceder a la información de los Authors, es necesario una
autentificación. La misma se logra creando un usuario con la mutación "createUser", haciendo login con la mutación "login" utilizando el username previamente
creado, copiando el "value" token obtenido en el "login" y agregandolo como header de la siguiente manera.

header: "Authorization" value: "bearer {aqui va el token obtenido en el login}"

Claramente, el token se copia y pega reemplazando todo lo que va dentro de las llaves "{}", incluyendo estas.

Una vez tengas el header de "Authorization" junto con el token, podrás realizar queries a la base de datos "Author" sin problemas.

Cabe notar que todas las mutaciones necesitan autorización para ser ejecutadas, todas salvo "createUser" y "login".


Levantar el servidor y la base de datos con el comando "npm run dev".

Los schemas están en la carpeta "schemas/schemas.js", los resolvers están en la carpeta "resolvers/index.js" (a pesar de estar modularizados dentro de la misma carpeta),
los modelos se encuentran en la carpeta "models" y la carpeta "loaders" contiene los métodos utilizados para el batching & caching de los dataloaders.



Toda la mock data de los modelos ya se encuentra en la base de datos de MongoDB, a la cuál mediante la librería "Mongoose" se conecta automáticamente al levantar 
el servidor. Sin más:


Saludos,
Lighuen Miranda.
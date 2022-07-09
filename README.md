# POKEMON CHALLENGE

## INSTALACIONES E INSTRUCCIONES PARA LEVANTAR EL PROYECTO

-Clonar el repositorio o descargar el codigo

-Se debe tener instalado `node` https://nodejs.org/en/ (descargar la version recomendada)

    -Instalar dependencias:
    `npm install`

    -Levantar en modo desarollo:
    `npm run dev`

    -Visualizar una preview del proyecto localmente:
    `npm run preview`

-En consola se indicará en que puerto esta corriendo la app

## DEMO

La aplicacion se ha desplegado en Netlify

- Link Netlify https://pokemon-ph.netlify.app/

## FUNCIONALIDADES DE LA APLICACION

#### HOME

- BUSCADOR:
  Desde acá podremos buscar un pokemon en particular(ATENCION que no busca por matcheo entre el valor ingresado y el nombre de los pokemons)
  En caso de no encontrar una coincidencia seremos redirigidos al home.
  En caso de encontrar una coincidencia seremos redirigidos a la pantalla de detalle del pokemon

- LISTADO POKEMONS:
  En este apartado podremos visualizar todos los pokemoms. Se encuentran paginados

- MODAL VISUALIZAR POKEMON:
  Al hacer click en una targeta del listado se abrirá un modal con los detalles del pokemon

#### DETALLE

- DETALLE:
  Desde acá podremos visualizar detalles del pokemon buscado

## FUTURAS MEJORAS

- Se mejorará el feedback y el diseño que se le da al usuario cuando las imagenes demoran en cargar o cuando directamente no cargan.
- Se mejorará el hook de llamada a las apis porque actualmente no se estan manejando muy bien los posibles errores
- Se podria implementar redux thunks para las llamadas asincronas
- Se agregaran transiciones en cada una de las vistas
- Navegacion entre "paginas" (por ejemplo para ir a la pag. anterior)
- Usar css modules en caso de usar hojas de estilos
- Faltan estilos en las targetas (por ejemplo un hover cuando pasamos el mouse por encima)

## LIBRERIAS Y/ CARACTERISTICAS USADAS

- Redux
- React Router
- Redux
- Hooks: useState, useContext, useReducer (mas los incluidos en React router, Redux React y Custom hooks)
- Material UI, Material Icon
- Typescript

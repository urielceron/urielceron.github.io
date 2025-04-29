# urielceron.github.io

Proyecto React personal alojado en GitHub Pages.

## Requisitos previos

- Node.js y npm instalados
- Git instalado
- Cuenta de GitHub con repositorio urielceron.github.io

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/urielceron/urielceron.github.io.git
cd urielceron.github.io

# Instalar dependencias
npm install
```

## Ejecución en modo desarrollo (pruebas)

Para ejecutar el proyecto localmente y ver los cambios en tiempo real:

```bash
npm start
```

Esto iniciará el servidor de desarrollo con craco. El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

## Compilación para producción

Para generar los archivos optimizados para producción:

```bash
npm run build
```

Esto creará una carpeta `/build` con todos los archivos necesarios para la versión de producción.

## Pruebas de la versión de producción localmente

Para ver exactamente cómo se verá el sitio en producción:

```bash
# Instalar serve globalmente (si no está instalado)
npm install -g serve

# Servir la carpeta build
serve -s build
```

El sitio estará disponible en [http://localhost:5000](http://localhost:5000).

## Despliegue a GitHub Pages

Para compilar y enviar el proyecto a GitHub Pages:

```bash
npm run deploy
```

Este comando ejecutará automáticamente la compilación y luego subirá los archivos a la rama gh-pages de tu repositorio. El sitio estará disponible en [https://urielceron.github.io](https://urielceron.github.io) después de unos minutos.

## Actualización del sitio

Para actualizar el sitio después de realizar cambios:

1. Realizar los cambios en el código
2. Probar localmente con `npm start`
3. Confirmar los cambios con Git:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   ```
4. Desplegar los cambios:
   ```bash
   npm run deploy
   ```
5. (Opcional) Subir los cambios a la rama principal:
   ```bash
   git push origin main
   ```

## Nota

Este proyecto utiliza [CRACO](https://github.com/dilanx/craco) para personalizar la configuración de Create React App sin necesidad de ejectar.
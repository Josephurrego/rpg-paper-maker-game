# RPG Paper Maker Game Server

Este es un servidor Express básico configurado para ejecutar tu juego RPG Paper Maker en la web.

## Instalación Local

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar el servidor:**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## Deploy en Vercel

### Opción 1: Usar Vercel CLI (Recomendado para pruebas)

1. Instala Vercel CLI globalmente:
```bash
npm install -g vercel
```

2. Ejecuta desde el directorio raíz del proyecto:
```bash
vercel
```

3. Sigue las instrucciones interactivas.

### Opción 2: Deploy automático desde GitHub

1. **Crea un repositorio en GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - RPG Paper Maker Game"
git branch -M main
git remote add origin https://github.com/tu-usuario/nombre-repositorio.git
git push -u origin main
```

2. **Conecta tu repositorio a Vercel:**
   - Ve a https://vercel.com/dashboard
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración (`vercel.json`)
   - Haz clic en "Deploy"

## Estructura del Proyecto

```
├── server.js              # Servidor Express
├── package.json           # Dependencias
├── vercel.json            # Configuración de Vercel
├── index.html             # Página principal del juego
└── Content/               # Archivos del juego
    ├── Datas/             # Datos JSON del juego
    ├── Images/            # Imágenes y texturas
    ├── Shapes/            # Modelos 3D
    ├── Songs/             # Música y sonidos
    └── Styles/            # Estilos CSS
```

## Características del Servidor

- ✅ Sirve archivos estáticos (HTML, CSS, JS, JSON)
- ✅ Soporte CORS habilitado
- ✅ Headers correctos para archivos JSON
- ✅ Fallback a `index.html` para rutas no encontradas
- ✅ Compatible con Vercel Serverless Functions

## Troubleshooting

### Error: "Port 3000 already in use"
Usa otro puerto:
```bash
PORT=5000 npm start
```

### Los archivos no cargan correctamente
Asegúrate de que los paths en `index.html` sean relativos (ej: `./Content/...`) y no absolutos.

### El juego no inicia
Verifica en la consola del navegador (F12) si hay errores de CORS. El servidor ya incluye headers CORS configurados.

## Notas de Despliegue

- El servidor está optimizado para Vercel y puede ejecutarse en cualquier plataforma Node.js
- Los archivos estáticos se cachean automáticamente
- Las funciones serverless de Vercel manejan automáticamente la escalabilidad
- No se necesita base de datos para este juego

## Variables de Entorno

- `PORT`: Puerto en el que corre el servidor (por defecto: 3000)

## Licencia

RPG Paper Maker © 2017-2023 Wano. Este proyecto es un juego creado con RPG Paper Maker.

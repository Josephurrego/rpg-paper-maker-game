# 🎮 Guía de Deploy - RPG Paper Maker Game

## ✅ Lo que he hecho

He creado un servidor Express completo y optimizado para tu juego RPG Paper Maker con soporte para Vercel.

### Archivos creados/modificados:

1. **server.js** - Servidor Express
   - Sirve archivos estáticos del juego
   - Headers CORS configurados
   - Fallback a index.html para rutas no encontradas
   - Compatible con Vercel Serverless

2. **package.json** - Configuración de npm
   - Express 4.18.2 como dependencia
   - Node.js 18.x como requisito
   - Scripts: `npm start` y `npm dev`

3. **vercel.json** - Configuración de Vercel
   - Rutas configuradas para servir la app
   - Compatible con Vercel Functions

4. **.gitignore** - Archivos a ignorar en Git
   - node_modules, logs, archivos de sistema, etc.

5. **README.md** - Documentación completa
   - Instrucciones de instalación local
   - Guía de deploy en Vercel
   - Troubleshooting

6. **deploy.sh** y **deploy.bat** - Scripts de deploy
   - Para facilitar el deploy (Linux/Mac y Windows)

## 🚀 Cómo hacer deploy en Vercel

### Método 1: Desde GitHub (Recomendado)

1. **Inicializa tu repositorio Git:**
```bash
git init
git add .
git commit -m "Initial commit - RPG Paper Maker Game"
```

2. **Crea un repositorio en GitHub** y sube tu código:
```bash
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

3. **Deploy automático en Vercel:**
   - Ve a https://vercel.com
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración
   - ¡Haz clic en Deploy!

**Ventaja:** Cada push a GitHub redeploy automáticamente tu aplicación

### Método 2: Usar Vercel CLI

```bash
# Instala Vercel CLI (una sola vez)
npm install -g vercel

# Deploy desde el directorio del proyecto
vercel

# O ejecuta el script
./deploy.sh      # Linux/Mac
deploy.bat       # Windows
```

## 🔧 Prueba local

Para probar antes de hacer deploy:

```bash
npm install
npm start
```

Abre tu navegador en: **http://localhost:3000**

## 📋 Checklist antes de deploy

- [ ] `npm install` ejecutado correctamente
- [ ] El juego funciona en `http://localhost:3000` (sin errores en consola)
- [ ] Git inicializado (`git init`)
- [ ] Repositorio de GitHub creado
- [ ] Cuenta de Vercel creada (https://vercel.com)

## 🌐 Después del Deploy

Una vez en Vercel:
- Tu juego estará disponible en una URL como: `https://tu-proyecto.vercel.app`
- Recibirás una URL única cada vez que hagas push a GitHub
- Los cambios se despliegan automáticamente
- Puedes ver logs en el dashboard de Vercel

## ⚠️ Solución de problemas

### Error: "InvalidCharacterError: Failed to execute 'atob'"
**✅ Solucionado.** El servidor ahora retorna 404 para `/.protect` para desactivar la protección de archivos.

### Puerto en uso
```bash
PORT=5000 npm start
```

### CORS errors
El servidor ya incluye headers CORS. Si aún hay problemas:
- Verifica los paths en index.html (deben ser relativos)
- Abre la consola del navegador (F12) para ver errores exactos

## 💡 Tips

- **Dominio personalizado:** En Vercel puedes agregar un dominio personalizado en configuración
- **Variables de entorno:** Usa `.env` para configuración (no olvides agregar a `.gitignore`)
- **Cacheo:** Vercel cachea automáticamente los archivos estáticos
- **Escalabilidad:** No hay límites de simultáneas - Vercel escala automáticamente

## 📞 Soporte

- Documentación de Vercel: https://vercel.com/docs
- Documentación de Express: https://expressjs.com
- RPG Paper Maker: https://rpg-paper-maker.com

---

**¡Tu juego está listo para hacer deploy!** 🎉

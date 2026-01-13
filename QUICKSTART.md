# ⚡ Quick Start - Deploy en Vercel

## 1️⃣ Opción Rápida (GitHub + Vercel automático)

```bash
# Dentro del directorio del proyecto:
git init
git add .
git commit -m "RPG Paper Maker Game"
git branch -M main

# Luego ve a: https://github.com/new
# Crea un repositorio y ejecuta:
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main

# Finalmente:
# 1. Ve a https://vercel.com
# 2. Haz clic en "New Project"
# 3. Selecciona tu repositorio
# 4. Haz clic en "Deploy"
# ¡Listo! 🎉
```

## 2️⃣ Opción Manual (Vercel CLI)

```bash
npm install -g vercel
vercel
# Sigue las instrucciones
```

O si estás en Windows:
```bash
deploy.bat
```

## 3️⃣ Prueba Local

```bash
npm start
# Abre: http://localhost:3000
```

## 🎯 Lo que se ha arreglado:

- ✅ Error `atob` solucionado
- ✅ Servidor Express configurado
- ✅ CORS habilitado
- ✅ Archivos estáticos sirviendo correctamente
- ✅ Vercel.json configurado
- ✅ Ready for production

---

**Pregunta rápida:** ¿Tienes una cuenta de GitHub y Vercel, o necesitas ayuda creándolas?

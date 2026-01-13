# 🚀 Subir a GitHub

Tu repositorio Git local está listo. Ahora necesitas subirlo a GitHub. Aquí están los pasos:

## 1️⃣ Crear un repositorio en GitHub

1. Ve a https://github.com/new
2. Ingresa los datos:
   - **Repository name**: `rpg-paper-maker-game` (o el nombre que prefieras)
   - **Description**: "RPG Paper Maker Game with Express Server for Web Deployment"
   - **Public** o **Private**: Tu elección
   - **No** inicialices con README (ya lo tenemos)
3. Haz clic en "Create repository"

## 2️⃣ Conectar tu repositorio local a GitHub

Copia y ejecuta estos comandos en PowerShell (en tu carpeta del proyecto):

```powershell
cd "c:\Users\User\Documents\RPG Paper Maker Games\Mapa1BROWSER-v0.1"

# Reemplaza USERNAME y REPO_NAME con tus valores
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

**Ejemplo real:**
```powershell
git remote add origin https://github.com/miusuario/rpg-paper-maker-game.git
git push -u origin main
```

## 3️⃣ Autenticación

Si te pide contraseña, usa tu **Personal Access Token** en lugar de contraseña:

### Para crear un Personal Access Token:
1. Ve a https://github.com/settings/tokens
2. Haz clic en "Generate new token"
3. Selecciona "Generate new token (classic)"
4. Dale permisos: `repo` (Full control of private repositories)
5. Copia el token
6. Úsalo como contraseña cuando Git lo solicite

## 4️⃣ Verificar que subió correctamente

```powershell
git remote -v
git log --oneline
```

Deberías ver algo como:
```
origin  https://github.com/USERNAME/REPO_NAME.git (fetch)
origin  https://github.com/USERNAME/REPO_NAME.git (push)

XXXXX Initial commit - RPG Paper Maker Game with Express Server for Web Deployment
```

## 5️⃣ Tu repositorio está en GitHub 🎉

Ahora puedes ver tu proyecto en: `https://github.com/USERNAME/REPO_NAME`

---

## Próximo paso: Deploy en Vercel

Una vez que el código esté en GitHub, puedes hacer deploy automático:

1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Selecciona "Import Git Repository"
4. Conecta tu GitHub
5. Selecciona `rpg-paper-maker-game`
6. Vercel detectará automáticamente que es un proyecto Express
7. ¡Haz clic en "Deploy"!

Cada vez que hagas push a GitHub, Vercel se redeploy automáticamente.

---

## Ayuda rápida

**¿Olvidaste tu nombre de usuario de GitHub?**
- Ve a tu perfil: https://github.com/settings/profile

**¿Necesitas cambiar el remote?**
```powershell
git remote set-url origin https://github.com/NUEVO_USERNAME/NUEVO_REPO.git
```

**¿Quieres empujar cambios después?**
```powershell
git add .
git commit -m "Tu mensaje"
git push
```

---

¡Éxito! 🚀

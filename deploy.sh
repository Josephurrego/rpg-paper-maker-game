#!/bin/bash
# Script para facilitar el deploy en Vercel

echo "RPG Paper Maker Game - Deploy Script"
echo "====================================="
echo ""

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instala Node.js primero."
    exit 1
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo ""
    echo "📥 Vercel CLI no detectado. Instalando globalmente..."
    npm install -g vercel
fi

echo ""
echo "🚀 Iniciando deploy en Vercel..."
echo ""

# Ejecutar vercel deploy
vercel

echo ""
echo "✅ Proceso completado. Tu aplicación está en línea!"

/*
    Simple Jump Plugin
    Agrega un salto simple al héroe cuando presiona Espacio
*/

// Variable global para controlar si está saltando
if (typeof Game !== 'undefined' && Game.current) {
    Game.current.isJumping = false;
    Game.current.jumpStartY = 0;
    Game.current.jumpTime = 0;
    Game.current.jumpDuration = 300; // Duración del salto en ms
    Game.current.jumpHeight = 48; // Altura del salto en píxeles
}

// Override del método update del héroe para manejar el salto
(function() {
    const originalUpdate = Core.MapObject.prototype.update;
    
    Core.MapObject.prototype.update = function(angle = 0) {
        // Si es el héroe y está saltando
        if (this.isHero && Game.current.isJumping) {
            Game.current.jumpTime += Manager.Stack.elapsedTime;
            
            // Calcular posición Y usando una parábola
            let progress = Game.current.jumpTime / Game.current.jumpDuration;
            
            if (progress >= 1) {
                // Terminar salto
                Game.current.isJumping = false;
                this.position.y = Game.current.jumpStartY;
            } else {
                // Ecuación parabólica: -4h(x-0.5)² + h
                let height = -4 * Game.current.jumpHeight * Math.pow(progress - 0.5, 2) + Game.current.jumpHeight;
                this.position.y = Game.current.jumpStartY + height;
            }
            
            // Actualizar mesh position si existe
            if (this.mesh) {
                this.mesh.position.set(this.position.x, this.position.y, this.position.z);
            }
            
            // Actualizar bounding box
            if (this.meshBoundingBox && this.meshBoundingBox.length > 0) {
                this.updateBBPosition(this.position);
            }
        }
        
        // Llamar al método original
        originalUpdate.call(this, angle);
    };
})();

// Detectar cuando se presiona Espacio
(function() {
    const originalOnKeyPressed = Scene.Map.prototype.onKeyPressed;
    
    Scene.Map.prototype.onKeyPressed = function(key) {
        // Tecla Espacio (32) o Jump según keyBoard.json
        if (!this.loading && !Core.ReactionInterpreter.blockingHero && !this.isBattleMap) {
            // Verificar si es la tecla Jump (ID 14 en keyBoard.json = código 32)
            if (Datas.Keyboards.isKeyEqual(key, Datas.Keyboards.list[14])) {
                // Iniciar salto si no está ya saltando
                if (!Game.current.isJumping && Game.current.hero && !Game.current.hero.moving) {
                    Game.current.isJumping = true;
                    Game.current.jumpTime = 0;
                    Game.current.jumpStartY = Game.current.hero.position.y;
                    
                    // Opcional: Reproducir sonido de salto
                    // Datas.Systems.soundCursor.playSound();
                }
            }
        }
        
        // Llamar al método original
        originalOnKeyPressed.call(this, key);
    };
})();

console.log("Plugin de salto simple cargado correctamente");

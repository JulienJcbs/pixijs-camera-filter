import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';

const PixiJSGame = () => {
    useEffect(() => {
        // Créez un conteneur PIXI
        const app = new PIXI.Application({ width: 800, height: 600 });
        document.body.appendChild(app.view);

        // Chargez une image
        PIXI.Loader.shared.add('bunny', 'path/to/your/image.png').load(() => {
            const bunny = new PIXI.Sprite(PIXI.Loader.shared.resources.bunny.texture);
            bunny.anchor.set(0.5);
            bunny.x = app.renderer.width / 2;
            bunny.y = app.renderer.height / 2;

            // Ajoutez le sprite à la scène
            app.stage.addChild(bunny);

            // Animation (rotation)
            app.ticker.add(() => {
                bunny.rotation += 0.01;
            });
        });

        // Nettoyage à la sortie du composant
        return () => {
            document.body.removeChild(app.view);
        };
    }, []);

    return null;
};

export default PixiJSGame;

   ## Antes de utilizar:
- League of Legends debe estar en español.
- Se requiere una resolución de 1920x1080 en modo ventana sin bordes, los analsis de ScreenScraper estan hecho en base a esas dimensiones.

## INSTALACIÓN:
1. Instala Python 3.11.4 desde [python.org](https://www.python.org/downloads/windows/)
3. Instala Tesseract 5.3.1.20230401 usando el instalador de Windows disponible en: https://digi.bib.uni-mannheim.de/tesseract/tesseract-ocr-w64-setup-5.3.1.20230401.exe
   - Anota la ruta de Tesseract desde la instalación.
   - Configura la ruta de la carpeta `tessdata` de Tesseract en el archivo `settings.py`.
4. Descarga `tesserocr` v2.6.0 en la carpeta del bot desde: https://github.com/simonflueckiger/tesserocr-windows_build/releases/download/tesserocr-v2.6.2-tesseract-5.3.4/tesserocr-2.6.2-cp312-cp312-win_amd64.whl   - Ten en cuenta que la versión debe ser 2.6.0 para ser compatible con Tesseract 5.3.1.
   - El nombre del archivo debe ser `tesserocr-2.6.0-cp311-cp311-win_amd64.whl` o su correspondiente para `cp310` de ser otro renombrar.
5. Ejecuta `install.py`.
6. Configura `settings.py` para que la ruta del cliente de League of Legends sea correcta.
7. Desactiva todas las superposiciones en el juego.

##EJECUCÍON:

**BACK**
1. Ejecuta el archivo `app.py` en una ventana CMD. 
2. Ejecuta el archivo `main.py` en otra ventana CMD.

**FRONT**
1. `npm start` dentro la carpeta contendora del Front.

## CARACTERÍSTICAS:
![main]([https://i.imgur.com/hDd9jPX.png](https://imgur.com/a/hDd9jPX))

- Obtener estado del jugador (Vida / Oro)
- Obtener parametros de la partida (Ronda / Jugadores)
- Obtener las mejores composiciones de TFT (API Externa).
- Analisis de la tienda en tiempo real utilizando ScreenScraper para indicar que campeones comprar.
- Detección de comandos de voz para realizar acciones del juego (Comprar a <Campeon> / Reroll / Actualizar tienda).


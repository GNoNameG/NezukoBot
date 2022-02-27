# `INSTALACION TERMUX OPCION 1 (GitHub)`
```bash
> termux-setup-storage
> apt update && apt upgrade -y -y
> apt install git -y
> apt install nodejs -y
> apt install ffmpeg -y
> apt install imagemagick -y
> git clone https://github.com/AllMightHero/NezukoBot
> cd NezukoBot
> npm install
> npm install -g npm@8.5.0
> npm update
> npm start
```
### `INSTALACION TERMUX OPCION 2 (Archivos)`
> Los archivos del Bot estaran en la carpeta de downloads (descargas)
```bash
> apt update && apt upgrade -y -y
> apt install git -y
> apt install nodejs -y
> apt install ffmpeg -y
> apt install imagemagick -y
> termux-setup-storage
> cd storage/downloads
> git clone https://github.com/AllMightHero/NezukoBot
> cd NezukoBot
> npm install
> npm install -g npm@8.5.0
> npm update
> npm start
```
### `NOTAS`
```bash
> Para activar algunos comandos como 
el #añadir y #sacar el propietario del 
Bot debera usar el comando #enable restrict 
desde el numero que haya puesto en el archivo 
config.js

> Si instalas el Bot con los archivos
para obtener nuevamente el codigo QR,
elimina el archivo session.data.json
en la carpeta del Bot 

> Si instalas el Bot con GitHub para 
obtener nuevamente el codigo QR, escribe en el termux:
> rm session.data.json
> npm start 

> Si el termux se cierra para volver activar si la instlacion 
fue en via GitHub solo debera escribir:
> cd NezukoBot
> npm start 

> Si el termux se cierra para volver activar si la instlacion 
fue en via archivos solo debera escribir:
> cd storage/downloads/NezukoBot
> npm start

> cada vez que realices una modificacion en el
repositorio del Bot (tu GitHub), puedes usar 
el comando #actualizar para que se actualicen los datos
- El comando actualizar no funcionara en el caso de que se 
haya instalado el Bot via archivos 

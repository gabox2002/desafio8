const cssFiles = ["./css/estilos.css", "./css/estilos-retro.css", "./css/estilos-peliculas.css"];
var activeFile = 0;
const links = document.getElementsByTagName("link");

// Desactivar los estilos excepto el primero
for (let i = 1; i < links.length; i++) {
    links[i].disabled = true;
}

function toggleStyles() {
    // Desactivar el estilo actual
    links[activeFile].disabled = true; 

    activeFile++;
    if (activeFile >= cssFiles.length) {
        activeFile = 0;
    }
    // Activar el nuevo estilo
    links[activeFile].disabled = false; 
}
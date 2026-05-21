// Configuración inicial estática de las estadísticas

const stats = {
    felicidad: 9,
    salud: 7,
    limpieza: 9,
    energia: 5
};

const MAX_STAT = 10;

// Función flecha para actualizar los soles en la interfaz visual
const modificarInterface = () => {
    for (const key in stats) {
        const conteneur = document.getElementById(`jauge-${key}`);
        if (conteneur) {
            conteneur.innerHTML = '☀️'.repeat(stats[key]);
        }
    }
};
const modificarStat = (nom, valeur) => {
    stats[nom] = Math.max(0, Math.min(MAX_STAT, stats[nom] + valeur));
};

const agir = (action) => {
    // CAMBIO DE IMÁGENES SEGÚN LA ACCIÓN (Bucle IF)
    
    const imagenPatoso = document.getElementById('imagen-patoso');
    
    if (action === 'duchar') {
        imagenPatoso.src = 'duchar.jpg';
        modificarStat('limpieza', 3);
        modificarStat('felicidad', -1);
    } 
    else if (action === 'alimentar') {
        imagenPatoso.src = 'alimentar.jpg';
        modificarStat('energia', 2);
        modificarStat('felicidad', 2);
        modificarStat('limpieza', -1);
    } 
    else if (action === 'jugar') {
        imagenPatoso.src = 'jugar.png';
        modificarStat('felicidad', 2);
        modificarStat('energia', -2);
        modificarStat('limpieza', -1);
    } 
    else if (action === 'dormir') {
        imagenPatoso.src = 'dormir.jpg';
        modificarStat('energia', 4);
        modificarStat('felicidad', -2);
    } 
    else if (action === 'reprender') {
        imagenPatoso.src = 'reprender.jpg';
        modificarStat('felicidad', -2);
        modificarStat('salud', 1);
    } 
    else if (action === 'acariciar') {
        imagenPatoso.src = 'acariciar.jpg';
        modificarStat('felicidad', 1);
    }

    // Actualizar el renderizado visual de los soles
    modificarInterface();
};
document.addEventListener("DOMContentLoaded", () => modificarInterface());

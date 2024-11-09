
function toggleExpansion(id) {
    const bloque = document.getElementById(id);
    const body = document.body;

    let overlay = bloque.querySelector('.overlay-estacion');
    let fondoOverlay = document.getElementById('overlay-fondo');

    
    if (overlay) {
        bloque.classList.remove('expandido');
        overlay.style.display = 'none'; 
        fondoOverlay.style.display = 'none'; 
    } else {
        
        bloque.classList.add('expandido');

        overlay = document.createElement('div');
        overlay.classList.add('overlay-estacion');
        bloque.appendChild(overlay);
        overlay.style.display = 'block'; 

        fondoOverlay.style.display = 'block';
    }
}

document.getElementById('invierno').addEventListener('click', function() {
    toggleExpansion('invierno');
});

document.getElementById('primavera').addEventListener('click', function() {
    toggleExpansion('primavera');
});

document.getElementById('verano').addEventListener('click', function() {
    toggleExpansion('verano');
});

document.getElementById('otono').addEventListener('click', function() {
    toggleExpansion('otono');
});

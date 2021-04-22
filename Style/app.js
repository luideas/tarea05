function mostrarMensaje (){
    alert ('Tus datos fueron enviados');
}

function hicieronClick (){
    document.getElementsByTagName ('button')[0].onclick = mostrarMensaje;
}

window.onload = hicieronClick;
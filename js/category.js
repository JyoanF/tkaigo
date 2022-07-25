document.addEventListener('onload', mostrarCategorias());

function mostrarCategorias(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './file/json/categorias.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            let menu_container=document.querySelector('#contenedor-categorias');
            menu_container.innerHTML='';

            let categorias = JSON.parse(this.responseText);

            for(let item of categorias){
                menu_container.innerHTML += `<div class="card category">
                <img class="card-img" src="${item.background}" alt="">
                <div class="card-img-overlay">
                    <div class="card-text">
                        <img src="${item.icon}">
                        <h1 class="card-tittle">${item.name}</h1>
                    </div>
                </div>
            </div>`
            }
        }
    }
}
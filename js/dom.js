const URL_ARCHIVO_JSON = '../db/db.json';

$('.experiencias').append(
     `
     <div>
        <button class="btnProductos" id="btn1"> Mostrar productos experiencia Malbec </button>
    </div>
    <div>
        <button class="btnProductos" id="btn2"> Mostrar productos experiencia Cabernet Franc</button>
    </div>
    <div>
        <button class="btnProductos" id="btn3"> Mostrar productos experiencia Cabernet Sauvignion </button>
    </div>
`
);

$('#btn1').click( () => {

    $.get(URL_ARCHIVO_JSON, (response, status) => {

        if (status === "success") {
            
            let experiencia =  response;

            for (let i = 0; i < 6; i++) // los primeros 6 elementos
                {
                $('.contenedorGeneral').append(
                    `
                    <div class="contenedorVino">
                    <div>
                        <img class="imagenProducto"src="${experiencia.img}" alt="${experiencia.name}">
                    </div> 
                    <div>
                        <h4 class="tituloProducto">${experiencia.nombre}</h4>
                        <p class="precioProducto">${experiencia.precio}</p>
                    </div>
                    <div class="contenedorBotones">
                        <button class="btnCarrito">
                            Agregar al carrito
                        </button>
                        <button class="btnDetalle">
                        Ver más
                        </button>
                    </div>
                    </div>

                    `
                    )
                


                }
    
            }
    
        }
        )
    }
    )
    
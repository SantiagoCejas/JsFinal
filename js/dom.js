const urlJson = '../db/db.json';

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

        $.get(urlJson, (response, status) => {

            if (status === "success") {
                
                let experiencia =  response;

                    $('.contenedorGeneral').append(
                        `
                        <div class="contenedorVino">
                            <div>
                                <img class="imagenProducto"src="${experiencia[0].img}" alt="${experiencia[0].name}">
                            </div> 
                            <div>
                                <h4 class="tituloProducto">${experiencia[0].name}</h4>
                                <p class="precioProducto">${experiencia[0].precio}</p>
                                <p class="descripcionProducto">${experiencia[0].descripcion}</p>
                            </div>
                        </div>

                        `
                        )
    
        
                }
        
            }
            )
        }
        );
    $('#btn2').click( () => {

        $.get(urlJson, (response, status) => {
    
            if (status === "success") {
                
                let experiencia =  response;
    
                    $('.contenedorGeneral').append(
                        `
                        <div class="contenedorVino">
                            <div>
                                <img class="imagenProducto"src="${experiencia[1].img}" alt="${experiencia[1].name}">
                            </div> 
                            <div>
                                <h4 class="tituloProducto">${experiencia[1].name}</h4>
                                <p class="precioProducto">${experiencia[1].precio}</p>
                                <p class="descripcionProducto">${experiencia[1].descripcion}</p>
                            </div>
                        </div>

                        `
                        )
     
        
                }
        
            }
            )
        }
        );
    $('#btn3').click( () => {

        $.get(urlJson, (response, status) => {
    
            if (status === "success") {
                
                let experiencia =  response;
    
                    $('.contenedorGeneral').append(
                        `
                        
                        <div class="contenedorVino">
                            <div>
                                <img class="imagenProducto"src="${experiencia[2].img}" alt="${experiencia[2].name}">
                            </div> 
                            <div>
                                <h4 class="tituloProducto">${experiencia[2].name}</h4>
                                <p class="precioProducto">${experiencia[2].precio}</p>
                                <p class="descripcionProducto">${experiencia[2].descripcion}</p>
                            </div>
                        </div>

                        
                        `
                        )
        
        
                }
        
            }
            )}
        );
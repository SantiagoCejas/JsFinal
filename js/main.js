const urlPedidos = '../db/pedidos.json';
const urlProductos = '../db/db.json';

$('#btnComprar').click( () => {

    $.get(urlProductos, (response, status) => {

        if (status === "success") {
            
            let experiencia =  response
            $('#formulario').append(
            `
        <form class = "formularioCompra">
                <div>
                    <label for="nombreApellido" class="">Nombre y Apellido</label>
                    <input type="text" class="" id="nombreApellido" placeholder="Juana Perez">
                </div>
                <div>
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email">
                </div>
                <div class="">
                <label for="direccion" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="direccion" placeholder="Av. Siempreviva 123">
                </div>
                <div class="">
                <label for="negocio" class="form-label">¿Qué tipo de negocio tenés?</label>
                <select id="negocio" class="form-select">
                    <option selected>Elegir</option>
                    <option>${experiencia[1].nombre}</option>
                    <option>${experiencia[2].nombre}</option>
                    <option>${experiencia[2].nombre}</option>
                </select>
                </div>
                <div class="">
                <div class="">
                    <input class="" type="checkbox" id="gridCheck">
                    <label class="" for="gridCheck">
                        Quiero suscribirme al newsletter
                    </label>
                </div>
                <input type="submit" class="btnProductos" id="btnEnviar" value="Enviar"></input>
                <input type="reset" class="btnProductos" value="Vaciar"></input>
                </div>
            </div>
        </form>            
            `
            )
                }

              }
            )
        }
    );

    ////capturar los inputs

    class pedidocliente {
        constructor(nombreApellido, mail, direccion,newsletter,pedido){
            this.nombreApellido,
            this.mail,
            this.direcion,
            this.newsletter,
            this.pedido
        }
       };
    const arrayPedidos = [];

;

/*
if (object.keys(data.mail).length != arrayPedidos.lenght){
    arrayPedidos.push(new pedidocliente());
    post    
} ;
*/
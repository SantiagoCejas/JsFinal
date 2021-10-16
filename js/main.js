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
                <label for="email" class="">Email</label>
                <input type="email" class="form-control" id="email">
                </div>
                <div class="">
                <label for="direccion" class="">Dirección</label>
                <input type="text" class="form-control" id="direccion" placeholder="Av. Siempreviva 123">
                </div>
                <div class="">
                <label for="pedido" class="">¿Qué Experiencia vas a comprar?</label>
                <select id="pedido" class="">
                    <option selected>Elegir</option>
                    <option>${experiencia[0].name}</option>
                    <option>${experiencia[1].name}</option>
                    <option>${experiencia[2].name}</option>
                </select>
                </div>
                <div class="">
                <div class="">
                    <input class="" type="checkbox" id="newsletter">
                    <label class="" for="newsletter">
                        Quiero suscribirme al newsletter
                    </label>
                </div>
                <input type="submit" class="btnProductos" id="btnEnviar" action="" value="Enviar"></input>
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
        constructor(nombreApellido, mail, direccion,pedido,newsletter){
            this.nombreApellido,
            this.mail,
            this.direccion,
            this.pedido
            this.newsletter
        }
       };
    const arrayPedidos = [];

    $('#btnEnviar').click(() => {
    function validarFormulario(e){
        e.preventDefault();
        console.log("Formulario Enviado");    
    }});

   // jsonPedidos = JSON.stringify(arrayPedidos);
    


/*

$('#btnEnviar').click( () => {
    
    $.post( urlPedidos, arrayPedidos, (response, status) => {

        if (status === 'success') {

if (object.keys(data.mail).length != arrayPedidos.lenght){
    arryPedidos.push(new pedidocliente());
    post    
} 

        }

    })
}) 
*/
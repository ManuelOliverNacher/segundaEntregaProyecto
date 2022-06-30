
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const botonVaciar = document.getElementById('vaciar-carrito')
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
    
})
localStorage.setItem("Productos" , JSON.stringify(stockProductos))

let carrito = []
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

 mostrarProductos()

function mostrarProductos(){
    stockProductos.forEach(el => {
        let div = document.createElement('div');
        div.className = 'card'
        div.innerHTML = `
                        <div class="card" style="width: 21rem;;">
                         <img src="img/${el.img}" alt="${el.desc}" class="card-img-top" >
                         <div class="card-body">
                         <h5 class="card-title text-center">${el.nombre}"</h5>
                         <p class="card-text text-center">$ ${el.precio}</p>
                         <button id="agregar${el.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                         </div>
                        </div>` 
 
       contenedorProductos.appendChild(div) 

       const botonAgregar = document.getElementById(`agregar${el.id}`)
       botonAgregar.addEventListener ("click" , () =>{
        agregarAlCarrito(el.id);

       } )

       })
    }
       
    function agregarAlCarrito(id){
        let productoAgregar = stockProductos.find(elem => elem.id === id)
        productoAgregar.cantidad = 1
        console.log(productoAgregar)
        carrito.push(productoAgregar)
        actualizarCarrito()
        mostrarCarrito(productoAgregar)
        
    }
    
    
function mostrarCarrito(productoAgregar){

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = ` <div class="productoEnCarrito">
                      <p> ${productoAgregar.nombre}</p>
                      <p>Precio: $ ${productoAgregar.precio}</p>
                      <p>Cantidad:  ${productoAgregar.cantidad}</p>
                      <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button> `
                      contenedorCarrito.appendChild(div)

}

function actualizarCarrito (){
contadorCarrito.innerText = carrito.length
precioTotal.innerText = carrito.reduce((acc, el) => acc + el.precio , 0 )
}














































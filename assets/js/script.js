const listaDeTareas = document.querySelector('#tareas')
const tareaInput = document.querySelector('#nuevaTarea')
const btnAgregar = document.querySelector('#agregarTarea')
const tareas = []

btnAgregar.addEventListener("click", () =>{
    //agregamos la tarea
    if (tareaInput.value!==""){
        const nuevaTarea = {id: Date.now(), nombreTarea: tareaInput.value, completado:false}
        tareas.push(nuevaTarea)
        tareaInput.value = ""
    }else{
        alert("Favor Ingresar Valor")
    }
    //actualizamos el html
    renderTareas()
}
)

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index,1)
    //actualizamos el html
    renderTareas()
}

function renderTareas(){
    let html = ""
    for (let indice of tareas){
        html += `<li class="listado">${indice.nombreTarea}
        <input type="checkbox" class="opcion" ${indice.completado ? "checked" : ""} onclick="tareaCompletada(${indice.id})">
        <button class="botonEliminar" onclick="borrar(${indice.id})"> X </button>
        </li> 
        `
    }
    listaDeTareas.innerHTML = html
    
    mostrarCantidad(tareas.length)
    mostrarTareasCompletadas();
    
}

function tareaCompletada(id) {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
        tareas[index].completado = !tareas[index].completado;
        renderTareas();
    }
}

function mostrarCantidad(total){
    const cantidadTarea = document.querySelector('#cantidadTareas')
    const cant = total
    cantidadTarea.innerHTML = cant
}

function mostrarTareasCompletadas() {
        const tareasCompletadas = tareas.filter(tarea => tarea.completado).length;
        document.querySelector('#tareasCompletadas').innerHTML = tareasCompletadas;
}
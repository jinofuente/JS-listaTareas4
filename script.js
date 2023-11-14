function agregarTarea(){
    const tareaInput = document.getElementById('tarea-input');
    const tareaText = tareaInput.value.trim();

    if(tareaText === ""){
        alert("Por favor, Ingrese una tarea");
    }else{
        const tareaList = document.getElementById('tarea-lista');
        const nuevaTarea = document.createElement("li");
        
        nuevaTarea.innerHTML = tareaText + " <button onclick = 'eliminar(this)'>Eliminar</button>";
        tareaList.appendChild(nuevaTarea);
        tareaInput.value = ""; 
    }
}

function eliminar(tarea){
    const tareaList1 = document.getElementById('tarea-lista');
    tareaList1.removeChild(tarea.parentNode);
}


/* agregando el link 
    https://www.youtube.com/watch?v=JP2PiLRxztQ

    https://codepen.io/Ferney-Moises-Ruiz-Algarin/pen/abXvpVy
*/
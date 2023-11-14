function agregarTarea(){
    const tareaInput = document.getElementById('tarea-input');
    const tareaText = tareaInput.ariaValueMax.trim();

    if(tareaText === ""){
        alert("Por favor, Ingrese una tarea");
    }else{
        const tareaList = document.getElementById('tarea-list');
        const nuevaTarea = document.createElement("li");
        
        nuevaTarea.innerHTML = tareaText + " <button onclick = 'delete(this)'>Eliminar</button>";
        tareaList.appendChild(nuevaTarea);
        tareaInput.value = ""; 
    }
}

function eliminar(tarea){
    const tareaList1 = document.getElementById('tarea-list');
    tareaList1.removeChild(tarea.parentNode);
}


/* agregando el link 
    https://www.youtube.com/watch?v=JP2PiLRxztQ
*/
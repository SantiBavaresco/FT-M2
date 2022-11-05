var MostrarListaActualizada= ()=>{
    var list =$("#lista");
    list.empty();
    $.get("http://localhost:5000/amigos", res => { // res es la respuesta del servidor(un obj)
        for (let i = 0; i < res.length; i++) {
            list.append(`<li> ${res[i].name} </li>`);
        }
    });
}

$("#boton").click( MostrarListaActualizada );

$("#search").click(()=>{
    var id = $("#input").val();//getElementById("input").value;   // "hola " + id
    
    $.get(`http://localhost:5000/amigos/${id}`, res =>{  // res es la respuesta del servidor(un obj)
        if(id!== null)  // no me anda XD
            $("#amigo").text(res.name); // getElementById("amigo").innerHTML = res.name;
        else{
            $("#amigo").text(`Tu amigo numero  no existe.`);
        }
    })
    
});

$("#delete").click(()=>{
    var id = $("#inputDelete").val();//getElementById("input").value;
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type: "DELETE",
        success: () => {
            $("#success").text(`Tu amigo numero ${id} fue eliminado.`);
            MostrarListaActualizada();
            $("#inputDelete").val("");
            //$("#success").text("");
        }
    })
});
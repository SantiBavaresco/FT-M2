const { getDirFromFilePath } = require("@11ty/eleventy/src/TemplatePath");

var MostrarListaActualizada= ()=>{
    var list =$("#lista");  //getElementById("lista").value;
    list.empty();  // para evitar repeticiones de la lista
    $.get("http://localhost:5000/amigos", res => { // res es la respuesta del servidor(un obj)
        for (let i = 0; i < res.length; i++) {
            list.append(`<li> ${res[i].name} </li>`);
        }
    });
}

$("#boton").click( MostrarListaActualizada );

$("#search").click(()=>{
    var id = $("#input").val();//getElementById("input").value;   // "hola " + id
    //let amigo = $("#amigo");
    $.get(`http://localhost:5000/amigos/${id}`, res =>{  // res es la respuesta del servidor(un obj)
    //console.log(res);
       // if(!id) return amigo.text()  // no me anda XD
           return $("#amigo").text(res.name); // getElementById("amigo").innerHTML = res.name;
      //  else
        {
           // $("#amigo").text(`Tu amigo numero  no existe.`);
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
           // var gif = document.createElement("img");
            //gif.src = "https://emoji.slack-edge.com/TPRS7H4PN/meow-code/494b5d52d8a8e402.gif";
            MostrarListaActualizada();
            $("#inputDelete").val("");
            //$("#success").text("");
        }
    })
});
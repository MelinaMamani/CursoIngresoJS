function Mostrar()
{ 
    var edad, estado;
    edad= document.getElementById("edad").value;
    estado= document.getElementById("estadoCivil").value;

    if (edad<18 && estado!="Soltero") {
        alert("Usted es muy pequeño para no ser soltero");
    }
}//FIN DE LA FUNCIÓN
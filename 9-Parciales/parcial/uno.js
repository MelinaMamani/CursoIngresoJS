
function Mostrar()
{
    var base;
    //utilizar el parseInt por si hay algùn error luego
    base= parseInt(document.getElementById("laBase").value);
    perimetro= base*4;
    alert("El perímetro es "+perimetro);
}

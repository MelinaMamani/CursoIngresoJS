//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;

    ancho= document.getElementById("ancho").value;
    largo= document.getElementById("largo").value;

    var perimetro;
    perimetro= ((2*ancho)+(2*largo));
    var metros;
    metros= perimetro*6;
    alert("Total = "+metros);
}


function Mostrar()
{
    var ancho;
    var largo;

    ancho= document.getElementById("ancho").value;
    largo= document.getElementById("largo").value;

    var perimetro;
    perimetro= ((2*ancho)+(2*largo));
    var metros;
    metros= perimetro*3;
    alert("Resutado "+metros);
}

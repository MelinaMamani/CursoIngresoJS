function Mostrar()
{
    var mes = prompt("Ingresa un mes ","");

    switch (mes) {
        case "Enero":
            alert("Se vienen las fiestas");
        case "Diciembre":
            alert("Fiestas :v");
            break;
        default:
            alert("No hay fiestas :(");
            break;
    }
}

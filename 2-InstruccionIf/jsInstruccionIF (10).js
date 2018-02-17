function Mostrar()
{
	var num = (Math.round(Math.random()*10)+1);

	alert("Nota: "+num);

	if (num==9 || num==10) {
		alert("Exelente");
	}
	else if(num>=4 && num<=8){
		alert("Aprobó");
	}
	else if(num<4){
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN
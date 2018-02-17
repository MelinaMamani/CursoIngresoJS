function Mostrar()
{
	var num= Math.floor((Math.random()*(11-1))+1);
	
	if (num>=9) {
		alert("Excelente "+num);
	}
	else if(num>=7){
		alert("Muy bien "+num);
	}
	else if(num>=4){
		alert("Bien "+num);
	}
	else if(num>=2){
		alert("Mal "+num);
	}
	else if(num>=0){
		alert("Pésimo "+num);
	}
}//FIN DE LA FUNCIÓN
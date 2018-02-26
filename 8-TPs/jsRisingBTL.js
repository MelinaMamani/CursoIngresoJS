/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide 
realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar
 hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad, sexo, sueldo, eCivil, legajo, nac;
 
   edad = prompt("Ingrese su edad","");
   edad = parseInt(edad);
   
   do {
        if (edad==null) {
            edad = prompt("Reingrese su edad","");
            edad = parseInt(edad);
            }
         while (isNaN(edad)) {
            edad = prompt("Error. Reingrese su edad","");
            edad = parseInt(edad);
            }
         console.log(edad);
         
         sexo = prompt("Ingrese f ó m .");

         while ((sexo!="f" && sexo!="m") && (sexo!="F" && sexo!="M")) {
                sexo = prompt("Reingrese sexo f ó m","");
                
                if (sexo==null) {
                    sexo = prompt("Reingrese sexo f ó m","");
                }
            }
        console.log(sexo);
        
        alert(' A continuación elija una opción: \n 1) Soltero \n 2) Casado \n 3) Divorciado \n 4) Viudo') 
        
        eCivil = prompt("Tu estado civil: ");

        switch (eCivil) {
            case '1':
                eCivil="Soltero";
                if (sexo=="f" || sexo=="F") {
                    eCivil="Soltera";
                }
                break;
            
            case '2':
                eCivil="Casado";
                if (sexo=="f" || sexo=="F") {
                    eCivil="Casada";
                }
                break;
            
            case '3':
                eCivil="Divorciado";
                if (sexo=="f" || sexo=="F") {
                    eCivil="Divorciada";
                }
                break;
            
            case '4':
                eCivil="Viudo";
                if (sexo=="f" || sexo=="F") {
                    eCivil="Viuda";
                }
                break;
        
            default: 
                alert("Opción no válida.");
                eCivil = prompt("Reingresa tu estado civil: ");
                break;
        }

    } while (edad<18 && edad>90);

    if (edad>90) {
            alert("Su edad es mayor a 90");
        }
    
    if (sexo=="f" || sexo=="F") {
        sexo="Femenino";
    } else if (sexo=="m" || sexo=="m"){
        sexo="Masculino";
    }
    

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = eCivil;
}

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
//Variables 1ra parte
var edad, sexo, sueldo=8000, eCivil, legajo, nac;
//Variables 2da parte
var maxNac=1, maxFemAr=1, sumaM=0, sumaF=0, sumaG=0, promM, promF, promG, cantPerM=0, sueldoMaxF=1, edadFem;
var minAr=10000000000, legajoArMenor, sueldoN, cantPerNeto=0, cantPerBruto=0, sueldoF=0, sueldoM=0, sueldoG=0;  
 
   for (var num = 7; num >0; num--){
       
       edad = prompt("Ingrese su edad","");
       edad = parseInt(edad);

   do {
         while (edad<18 || edad>90) {
            edad = prompt("Reingrese su edad","");
            edad = parseInt(edad);
            }
         while (isNaN(edad) || edad==null) {
            edad = prompt("Error. Reingrese su edad","");
            edad = parseInt(edad);
            }
         console.log(edad);
         
         sexo = prompt("Ingrese f (Femenino) ó m (Masculino) .");

         while (sexo.toLowerCase() !="f" && sexo.toLowerCase() !="m") {
                sexo = prompt("Reingrese sexo f ó m","");
                
                while (sexo==null) {
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

        sueldo = prompt("Ingrese su sueldo: ","");
        sueldo = parseInt(sueldo);

        while (sueldo<8000) {
            sueldo = prompt("Reingrese un sueldo mayor a 8000","");
            sueldo = parseInt(sueldo);
            }
        while (isNaN(sueldo) || sueldo==null) {
            sueldo = prompt("Error al ingresar. Intente otra vez","");
            sueldo = parseInt(sueldo);
            }

        if (sexo=="f" || sexo=="F") {
                    sumaF = sumaF+sueldo;
                    sueldoF++;

                if (sueldo>sueldoMaxF) {
                   sueldoMaxF=sueldo;
                   edadFem=edad;
                   console.log(edadFem);
                }
            }
                
        else if (sexo=="M" || sexo=="m") {
                    sumaM = sumaM+sueldo;
                    sueldoM++;

                    if (sueldo>12000) {
                        cantPerM++;
                    }

            }
                sueldoG++;

                sumaG = sumaG+sueldo;
                promF = sumaF/sueldoF;
                promM = sumaM/sueldoM;
                promG = sumaG/sueldoG;
                sueldoN = sueldo-((sueldo*25)/100);
                promF = Math.floor(promF);
                promM = Math.floor(promM);
                promG = Math.floor(promG);
                sueldoN = Math.floor(sueldoN);
                console.log(promG);
                console.log(sueldoN);
        
        if (sueldoN>promG) {
            cantPerNeto++;
            console.log(cantPerNeto);
        }
        if (sueldo>promG) {
            cantPerBruto++;
            console.log(cantPerBruto);
        }

                
        legajo = prompt("Ingrese su número de legajo","");
        legajo = parseInt(legajo);

        while (legajo<1000 || legajo>9999) {
            legajo = prompt("Reingrese su número de legajo","");
            legajo = parseInt(legajo);
        }
        while (isNaN(legajo) || legajo==null) {
            legajo = prompt("Error al ingresar. Intente otra vez","");
            legajo = parseInt(legajo);
            }
        
        alert(' Elija una opción: \n A) Argentino \n E) Extranjero \n N) Nacionalizado') 
        
        nac = prompt("Tu nacionalidad: ");

        switch (nac) {
            case 'A':
            case 'a':
                if ((sexo=="f" || sexo=="F") && sueldo>maxFemAr) {
                   maxFemAr=sueldo;
                   console.log(maxFemAr);
                }
                nac = "Argentina";
                if (sexo=="M" || sexo=="m") {
                    nac="Argentino";
                }
                if (sueldo<minAr) {
                   minAr=sueldo;
                   legajoArMenor=legajo;
                   console.log(minAr);
                   console.log(legajoArMenor);
                }
                break;
            
            case 'e':
            case 'E':
                nac = "Extranjera";
                if (sexo=="M" || sexo=="m") {
                    nac="Extranjero";
                }
                break;

            case 'n':
            case 'N':
                if (sueldo>maxNac) {
                   maxNac=sueldo;
                   console.log(maxNac);
                }

                nac = "Nacionalizado";
                if (sexo=="M" || sexo=="m") {
                    nac="Nacionalizado";
                }
                break;
        
            default:
                alert("Opción no válida.");
                nac = prompt("Reingresa tu nacionalidad: ");
                break;
        }

    } while (edad<18 && edad>90);

    if (sexo=="f" || sexo=="F") {
        sexo="Femenino";
    } else if (sexo=="m" || sexo=="m"){
        sexo="Masculino";
    }
   }

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = eCivil;
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = legajo;
    document.getElementById("Nacionalidad").value = nac;
}

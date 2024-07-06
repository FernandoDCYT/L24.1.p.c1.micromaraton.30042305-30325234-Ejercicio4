import Cl_sobre from "./Cl_sobre.js";
import Cl_TotSob from "./Cl_TotSob.js";

let sob1 = new Cl_sobre (10,5);
let sob2 = new Cl_sobre (20,2);
let sob3 = new Cl_sobre (100,4);
let sob4 = new Cl_sobre (50,3);

let totSob = new Cl_TotSob ();

totSob.procesarSobre(sob1);
totSob.procesarSobre(sob2);
totSob.procesarSobre(sob3);
totSob.procesarSobre(sob4);

let salida = document.getElementById("salida")
salida.innerHTML=`
El sobre N~1 tiene: $${sob1.calcTot()} <br>
El sobre N~2 tiene: $${sob2.calcTot()} <br>
El sobre N~3 tiene: $${sob3.calcTot()} <br>
El sobre N~4 tiene: $${sob4.calcTot()} <br>
<br>
El total entre todos los sobres es de:  $${totSob.acumTot} 
`
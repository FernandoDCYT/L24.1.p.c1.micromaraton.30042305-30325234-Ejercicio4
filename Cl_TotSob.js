export default class Cl_TotSob{
    constructor(){
        this.acumTot=0.0;
    }
    procesarSobre(s){
        this.acumTot+=s.calcTot();
    }
}
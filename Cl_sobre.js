export default class Cl_sobre{
    constructor(valor, cantidad){
        this.valor=valor;
        this.cantidad=cantidad;
    }
    set valor(v){
        this._valor=v;
    }
    set cantidad(c){
        this._cantidad=c;
    }
    get valor(){
        return this._valor
    }
    get cantidad(){
        return this._cantidad;
    }
    calcTot(){
        return this.valor*this.cantidad
    }
}
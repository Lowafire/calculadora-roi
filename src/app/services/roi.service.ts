import {Injectable,signal } from "@angular/core";
import { Roi } from "../form-calc/roi.model";
import { type ResultadoRoi } from "../form-calc/roi.model";

@Injectable({providedIn: 'root'})
export class RoiService {
    resultado= signal<ResultadoRoi | undefined>(undefined)

 calcularRoi(roi:Roi){
    let total:ResultadoRoi;
    const {ingreso, inversion} =  roi;

    const gananciaNeta = ingreso - inversion;

    const divicion = (gananciaNeta / inversion);
    const porcentajeRetorno = divicion * 100;

    total = ({gananciaNeta: gananciaNeta, porcentajeRetorno: porcentajeRetorno})

    this.resultado.set(total);
 } 
}
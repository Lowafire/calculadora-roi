import {Injectable,signal } from "@angular/core";
import { Roi } from "../form-calc/roi.model";
import { type ResultadoRoi } from "../form-calc/roi.model";

@Injectable({providedIn: 'root'})
export class RoiService {
    resultado= signal<ResultadoRoi | undefined>(undefined)

 calcularRoi(roi:Roi){
    let total:ResultadoRoi;
    const {ingreso, inversion} =  roi;

    const resta = ingreso - inversion;

    const formula = (resta / inversion) * 100;

    total = {total: formula}

    this.resultado.set(total);
 } 
}
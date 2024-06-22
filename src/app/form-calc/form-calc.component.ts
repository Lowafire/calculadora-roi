import { Component,inject, signal } from '@angular/core';
import {type Roi} from './roi.model';
import { FormsModule } from '@angular/forms';
import { RoiService } from '../services/roi.service';

@Component({
  selector: 'app-form-calc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  // Inyectamos la dependencia RoiService
  private roiServices = inject(RoiService);

  // Creamos las variables de estado
  ingreso = signal(0);
  inversion = signal(0);

  // Creamos el método onSubmit para pasar los datos al servicio
  onSubmit(){
    const roi: Roi = {
      ingreso: this.ingreso(),
      inversion: this.inversion()
    }
    console.log(this.roiServices.calcularRoi(roi))
  }
}
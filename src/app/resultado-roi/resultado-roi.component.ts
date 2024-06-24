import { Component } from '@angular/core';
import { RoiService } from '../services/roi.service';
import { inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-resultado-roi',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './resultado-roi.component.html',
  styleUrl: './resultado-roi.component.css'
})
export class ResultadoRoiComponent {
  private roiServices = inject(RoiService);

  resultado = this.roiServices.resultado.asReadonly();
}

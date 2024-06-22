import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormCalcComponent } from "./form-calc/form-calc.component";
import { ResultadoRoiComponent } from "./resultado-roi/resultado-roi.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FormCalcComponent, ResultadoRoiComponent, FooterComponent]
})
export class AppComponent {
  
}

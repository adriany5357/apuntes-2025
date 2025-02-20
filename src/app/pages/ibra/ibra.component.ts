import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-ibra',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './ibra.component.html',
  styleUrl: './ibra.component.css'
})
export class IbraComponent {

}

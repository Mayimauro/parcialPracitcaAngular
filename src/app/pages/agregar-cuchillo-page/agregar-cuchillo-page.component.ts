import { Component } from '@angular/core';
import {AgregarCuchilloComponent} from '../../componentes/agregar-cuchillo/agregar-cuchillo.component';

@Component({
  selector: 'app-agregar-cuchillo-page',
  standalone: true,
  imports: [
    AgregarCuchilloComponent
  ],
  templateUrl: './agregar-cuchillo-page.component.html',
  styleUrl: './agregar-cuchillo-page.component.css'
})
export class AgregarCuchilloPageComponent {

}

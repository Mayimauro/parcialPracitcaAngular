import { Component } from '@angular/core';
import {ListaCuchillosComponent} from '../../componentes/lista-cuchillos/lista-cuchillos.component';

@Component({
  selector: 'app-nuestros-cuchillo-page',
  standalone: true,
  imports: [
    ListaCuchillosComponent
  ],
  templateUrl: './nuestros-cuchillo-page.component.html',
  styleUrl: './nuestros-cuchillo-page.component.css'
})
export class NuestrosCuchilloPageComponent {

}

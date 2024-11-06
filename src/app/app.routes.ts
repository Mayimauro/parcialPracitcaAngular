import { Routes } from '@angular/router';
import {NuestrosCuchilloPageComponent} from './pages/nuestros-cuchillo-page/nuestros-cuchillo-page.component';
import {AgregarCuchilloPageComponent} from './pages/agregar-cuchillo-page/agregar-cuchillo-page.component';

export const routes: Routes = [
  {path: 'mis-cuchillos', component: NuestrosCuchilloPageComponent},
  {path: 'agregar-cuchillo', component: AgregarCuchilloPageComponent},
];

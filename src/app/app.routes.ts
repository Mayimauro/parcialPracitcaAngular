import { Routes } from '@angular/router';
import {NuestrosCuchilloPageComponent} from './pages/nuestros-cuchillo-page/nuestros-cuchillo-page.component';
import {AgregarCuchilloPageComponent} from './pages/agregar-cuchillo-page/agregar-cuchillo-page.component';
import {ModificarCuchilloComponent} from './componentes/modificar-cuchillo/modificar-cuchillo.component';
import {ModificarCuchilloPageComponent} from './pages/modificar-cuchillo-page/modificar-cuchillo-page.component';

export const routes: Routes = [
  {path: 'mis-cuchillos', component: NuestrosCuchilloPageComponent},
  {path: 'agregar-cuchillo', component: AgregarCuchilloPageComponent},
  {path: 'mis-cuchillos/editar-cuchillo/:id',component: ModificarCuchilloPageComponent}
];

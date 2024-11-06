import {Component, inject, OnInit} from '@angular/core';
import {CuchillosInterface} from '../../interface/cuchillos.interface';
import {CuchillosService} from '../../service/cuchillos-service.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista-cuchillos',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './lista-cuchillos.component.html',
  styleUrl: './lista-cuchillos.component.css'
})
export class ListaCuchillosComponent implements OnInit {

  listaCuchillos: CuchillosInterface[] = [];
  cuchillosService = inject(CuchillosService)


  ngOnInit(): void {
    this.traerCuchillosDeJson();
  }

  traerCuchillosDeJson() {
    this.cuchillosService.getCuchillos().subscribe({
      next: (cuchillos: CuchillosInterface[]) => {
        this.listaCuchillos = cuchillos;
      },error: (e)=>{
        console.error(e);
      }
    })
  }

  borrarCuchillo(id: number) {
    this.cuchillosService.deleteCuchilloById(id.toString()).subscribe({
      next: ()=>{
        console.log("borrado");
        window.location.reload();
      },error: (e)=>{
        console.error(e);
      }
    })
  }



}

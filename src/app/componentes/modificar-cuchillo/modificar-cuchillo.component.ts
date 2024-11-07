import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CuchillosService} from '../../service/cuchillos-service.service';
import {ActivatedRoute} from '@angular/router';
import {CuchillosInterface} from '../../interface/cuchillos.interface';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-modificar-cuchillo',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './modificar-cuchillo.component.html',
  styleUrl: './modificar-cuchillo.component.css'
})
export class ModificarCuchilloComponent implements OnInit {

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.id = param.get('id');
        this.getCuchilloById(this.id);
      },error:(e)=>{
        console.log(e)
      }
    })
  }

  tipoCuchillo = ['Chef', 'Santoku', 'Pan','Deshuesador','Mondador','Fileteador','Chino','Caza'];
  tipoFilo = ['Liso', 'Dentado'];
  materialHoja = ['Acero inoxidable', 'Acero al carbono', 'Ceremica'];
  materialMango = ['Madera', 'Metal', 'Plastico','Hueso'];
  id: string | null = '';

  activatedRoute = inject(ActivatedRoute);


  fb = inject(FormBuilder);
  cuchillosService = inject(CuchillosService);

  formulario = this.fb.nonNullable.group(
    {
      id:[''],
      nombre: ['', Validators.required],
      tipo: [''],
      tipoDeFilo: [''],
      materiaDeHoja: [''],
      materiaDelCabo: [''],
      longitudHoja: ['', Validators.required],
      longitudTotal: ['', Validators.required]
    }
  )

  getCuchilloById(id: string|null){
    this.cuchillosService.getCuchillosById(id).subscribe({
      next:(cuchillo: CuchillosInterface)=>{
        this.formulario.controls['id'].setValue(cuchillo.id);
        this.formulario.controls['nombre'].setValue(cuchillo.nombre);
        this.formulario.controls['tipo'].setValue(cuchillo.tipo);

        /** Y  HASI CON TODOS LOS ATRIBUTOS DEL OBJETOS QUE ESTES EN EL FORMULARIO **/

      },error:(e)=>{
        console.log(e)
      }
    })
  }


}

import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CuchillosService} from '../../service/cuchillos-service.service';
import {CuchillosInterface} from '../../interface/cuchillos.interface';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-agregar-cuchillo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './agregar-cuchillo.component.html',
  styleUrl: './agregar-cuchillo.component.css'
})
export class AgregarCuchilloComponent implements OnInit{

  ngOnInit(): void {
    this.setIdCuchillo();
  }

  fb = inject(FormBuilder);
  cuchillosService = inject(CuchillosService);

  tipoCuchillo = ['Chef', 'Santoku', 'Pan','Deshuesador','Mondador','Fileteador','Chino','Caza'];
  tipoFilo = ['Liso', 'Dentado'];
  materialHoja = ['Acero inoxidable', 'Acero al carbono', 'Ceremica'];
  materialMango = ['Madera', 'Metal', 'Plastico','Hueso'];

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

  setIdCuchillo()
  {
    let idCuchi: number;

    this.cuchillosService.getCuchillos().subscribe({
      next: (cuchillos: CuchillosInterface[]) => {
        if(cuchillos.length === 0)
        {
          idCuchi = 0;
        }else{
          idCuchi = cuchillos.length;
        }
        this.formulario.patchValue({id: idCuchi.toString()});
      },error: (e)=>{
        console.error(e);
      }
    })
  }
  agregarYmandarCuchillo()
  {
    if(this.formulario.invalid)return;
    const cuchilloNuevo = this.formulario.getRawValue();

    this.agregarCuchilloBdd(cuchilloNuevo);

    this.formulario.reset();
  }

  agregarCuchilloBdd(cuchilloAgg: CuchillosInterface) {
    this.cuchillosService.postCuchillos(cuchilloAgg).subscribe(
      {
        next: ()=>{
          alert('cuchillo guardado');
        },error: (e)=>{
          console.error(e);
        }
      }
    )
  }







}

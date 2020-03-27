import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';
import { NgForm } from '@angular/forms';
import { Calculo } from '../models/calculo';



@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona;
  calculo: Calculo;
  sexo:string;
  


  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona=new Persona();
    this.calculo=new Calculo();
    this.sexo="Seleccione su sexo";
  }

  add(formulario: NgForm){
    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {
        alert('Persona creada!');
      }
    });

    
    this.clear(formulario);

  }

  clear(formulario:NgForm){
    formulario.reset();
  }

}

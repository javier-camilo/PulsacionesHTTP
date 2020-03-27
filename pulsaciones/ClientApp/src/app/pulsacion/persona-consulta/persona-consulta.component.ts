import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  personas:Persona[];
  searchText:string;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
      this.get();
  }

  get(){
    
    this.personaService.get().subscribe(result => {
      this.personas = result;
    });

  }

}

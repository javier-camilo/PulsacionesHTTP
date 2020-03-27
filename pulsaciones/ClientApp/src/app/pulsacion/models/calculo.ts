import { Persona } from "./persona";

export class Calculo {

    calcular(persona:Persona):number{

        var pulsacacion = 0;

        if(persona.sexo=="Femenino"){
            
            pulsacacion = (220 -persona.edad)/10;

        }else if(persona.sexo=="Masculino"){

            
            pulsacacion = (210 -persona.edad)/10;

        }

        return pulsacacion;

    }
    
  

}
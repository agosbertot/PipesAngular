import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean=true): string {
    if (mostrar){
value= '*'.repeat(value.length);
    }  
    return (value) ;
  }

}

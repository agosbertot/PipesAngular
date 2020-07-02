import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {

    // primero paso todo a minuscula
    value = value.toLocaleLowerCase();

    let nombres = value.split(' ');

    if (todas){
      // primero pregunto si quiero que capitalice todas las palabras
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substring(1);
      });
    } else {
      // nombres[0][0] significa nombres en la primera palabra en la primera posicion
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
      }
    return nombres.join(' ');
  }

}

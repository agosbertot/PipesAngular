import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitan America';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout( () => {
resolve('llego la data');
    }, 4500);
  });

  fecha: Date = new Date();

  nombre2 = 'agosTiNa BerToT';

  videoUrl = 'https://www.youtube.com/embed/viR_GHhwbP0';

  activar:boolean = true;

}

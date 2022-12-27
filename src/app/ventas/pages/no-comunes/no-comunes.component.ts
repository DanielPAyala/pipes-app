import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Elia';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = [ 'María', 'Pedro', 'Elia', 'Alex', 'Favio' ]

  clientesMap = {
    '=0': 'no tenemos a ningún cliente esperando.',
    '=1': 'tenemos a un cliente esperando.',
    'other': 'tenemos a # clientes esperando.'
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Carlos',
    edad: 24,
    direccion: 'Av Belaunde'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'superman',
      volar: true
    },
    {
      nombre: 'batman',
      volar: false
    },
    {
      nombre: 'aquaman',
      volar: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de la promesa');
    }, 3500);
  })

  cambiarPersona() {
    this.nombre = "Carlos";
    this.genero = "masculino";
  }

  borrarCliente() {
    this.clientes.pop();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Thor','Capi', 'SpiderMan', 'IronMan', 'Hulk', 'Batman'];
  heroeBorrado: string = '';

  borrarHeroe( ) {
    //this.heroes.length = this.heroes.length -1;
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}

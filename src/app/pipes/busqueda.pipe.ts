import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for (const item of value) {
      if (item.titulosProfesionaels.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(item);
      }
    }
    return resultPost;
  }

}

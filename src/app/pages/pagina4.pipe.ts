import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagina4'
})
export class Pagina4Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

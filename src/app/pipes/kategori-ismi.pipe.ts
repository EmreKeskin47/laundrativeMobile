import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kategoriIsmi',
})
export class KategoriIsmiPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value && value != '') {
      let str: string = value.toString();
      if (str.includes(' ')) {
        return str.replace(' ', '<br/>');
      } else {
        return str;
      }
    }
  }
}

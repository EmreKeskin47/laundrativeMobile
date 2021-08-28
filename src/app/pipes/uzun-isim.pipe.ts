import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uzunIsim',
})
export class UzunIsimPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value && value != '') {
      let str: string = value.toString();
      if (str.length < 15) {
        return str;
      } else if (str.length > 15 && str.length < 20 && str.indexOf(' ') > 0) {
        return str.replace(' ', '<br/>');
      } else {
        var n = 2; // second space

        var a = str.split(' ');
        var first = a.slice(0, n).join(' ');
        var second = a.slice(n).join(' ');
        return first + '<br/>' + second;
      }
    }
  }
}

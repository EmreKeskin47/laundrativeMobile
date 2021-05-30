import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fiyat',
})
export class FiyatPipe implements PipeTransform {
  transform(value: any, arg): any {
    if (value && value != 0) {
      let str: string = value.toString();
      if (str.includes('.')) {
        let temp = str.substring(str.indexOf('.') + 1);
        if (temp.length < 2) {
          return str.replace('.', ',') + '0 TL';
        }
        return str.replace('.', ',') + ' TL';
      } else {
        return value + ',00 TL';
      }
    } else {
      return 0;
    }
  }
}

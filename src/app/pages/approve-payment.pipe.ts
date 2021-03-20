import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approvePayment'
})
export class ApprovePaymentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

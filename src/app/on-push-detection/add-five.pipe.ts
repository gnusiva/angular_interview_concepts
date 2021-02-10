import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFive'
})
export class AddFivePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return 'Hello ' + (value + 5);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAbove5',
  pure: false
})
export class ShowAbove5Pipe implements PipeTransform {

  transform(value: number[], ...args: number[]): number[] {
    console.log(value);
    return value.filter( item => {
      console.log(item);
      return item > args[0];
    } );
  }

}

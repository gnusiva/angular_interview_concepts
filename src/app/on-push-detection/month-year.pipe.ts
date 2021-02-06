import { variable } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthYear'
})
export class MonthYearPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {

    const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const year = value.getFullYear();
    const month = value.getMonth();
    return mL[month - 1] + ' / ' + year;
  }

}

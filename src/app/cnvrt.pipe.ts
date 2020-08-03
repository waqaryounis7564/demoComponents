import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnvrt',
})
export class CnvrtPipe implements PipeTransform {
  transform(value: any, args: String): unknown {
    console.log(args);
    console.log(value);
    switch (args) {
      case 'km':
        return value * 1.06;
        break;
      default:
        return new Error('unit not specified');
    }
  }
}

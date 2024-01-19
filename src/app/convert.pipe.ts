import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  tempMile: number = 0;

  transform(mile: string, targetUnit: string): number {
    if (!mile) {
      return 0;
    }

    this.tempMile = Number(mile);

    if (isNaN(this.tempMile)) {
      return 0;
    }

    switch (targetUnit) {
      case 'km':
        return this.tempMile * 1.609;

      case 'm':
        return this.tempMile * 1.609 * 1000;

      case 'cm':
        return this.tempMile * 1.609 * 1000 * 100;

      case 'mm':
        return this.tempMile * 1.609 * 1000 * 1000;


      default:
        throw new Error(`unsupported unit ${targetUnit}`);
    }
  }

}

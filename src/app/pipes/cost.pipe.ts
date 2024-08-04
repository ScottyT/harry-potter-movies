import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cost',
  standalone: true,
})
export class CostPipe implements PipeTransform {
  transform(cost: string, costValue: string): string {
    return `$${cost} ${costValue}`;
  }
}

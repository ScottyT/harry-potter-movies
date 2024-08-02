import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationMinute',
  standalone: true,
})
export class DurationMinutePipe implements PipeTransform {
  transform(totalMinutes: number): unknown {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}min`;
  }
}

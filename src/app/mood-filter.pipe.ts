import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodFilter'
})
export class MoodFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

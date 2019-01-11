import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodFilter',
  pure: false           // Pipe needs to be impure in order to detect changes in mood
})
export class MoodFilterPipe implements PipeTransform {

  transform(items: any[], moods: any[]): any[] {
    // Check input arguments
    if(!items) return [];
    if(!moods) return [];

    return items.filter((item) => {       // Apply a filter to the input items
      return item.mood.some((r) => {      // Check item.mood array
        return moods.indexOf(r) >= 0;     // Check if any of moods appears in item.mood (boolean)
      });
    });

  }

}

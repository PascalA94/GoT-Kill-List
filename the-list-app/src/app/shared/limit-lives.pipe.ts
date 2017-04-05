import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLives'
})
export class LimitLivesPipe implements PipeTransform {

  transform(value) {
    const l =  value.filter(item => item.assigned.startsWith('Jaqen'));
    if (l.count === 3) {
      return false;
    }
  }
}

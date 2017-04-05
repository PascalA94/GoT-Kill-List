import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value) {
    return value.filter(item => item.assigned.startsWith('Arya'));
  }
}

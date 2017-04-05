import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJaqen'
})
export class FilterJaqenPipe implements PipeTransform {

  transform(value) {
    return value.filter(item => item.assigned.startsWith('Jaqen'));
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Data } from 'src/app/posts/models/data.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: Data[], searchValue: string = ''): Data[] {
    return data.filter((d) =>
      d.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}

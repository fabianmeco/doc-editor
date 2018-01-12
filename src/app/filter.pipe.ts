import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listDoc: any, search: any): any {
    if (search === undefined) return listDoc;
    return listDoc.filter(function (document) {
      return document.name.toLowerCase().includes(search.toLowerCase())
        || document.author.toLowerCase().includes(search.toLowerCase())
        || document.description.toLowerCase().includes(search.toLowerCase());
    })
  }

}

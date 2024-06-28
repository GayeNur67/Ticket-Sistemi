import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arama'
})
export class AramaPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      return Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm)
      );
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { AppItem } from '../app.item';

@Pipe({
  name: 'appFilter',
 
})
export class AppFilterPipe implements PipeTransform {
  transform(items: AppItem[], filterText: string): AppItem[] {
    filterText = filterText.toLowerCase(); 

    console.log(filterText);
    console.log(items);
    
    return filterText ? items.filter((m: AppItem) =>
     m.talepCesidi.toLowerCase().indexOf(filterText) !== -1 || 
     m.bolum.toLowerCase().indexOf(filterText) !== -1  ||
     m.tesis.toLowerCase().indexOf(filterText) !== -1 ||
     m.talepTipi.toLowerCase().indexOf(filterText) !== -1 ||
     m.isinTuru.toLowerCase().indexOf(filterText) !== -1 
    ): items;
  }
}



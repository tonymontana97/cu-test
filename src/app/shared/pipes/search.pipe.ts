import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'Search'
})
export class SearchPipe implements PipeTransform{
  transform(value: any, query: string, field: string): any {
    if(!value) return null;
    if(!query) return value;

    return value.filter(function(item: any){
      return item[field]?.toString().toLowerCase().includes(query.toLowerCase())
    });
  }
}

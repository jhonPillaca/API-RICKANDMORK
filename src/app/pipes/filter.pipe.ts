import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: any, args: any[]) {
    const resultados =[];

    for(const result of value ){
      if(result.name.indexOf()){}
    }
    throw new Error("Method not implemented.");
  }

}

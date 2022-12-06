import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePerso'
})
export class PipePersoPipe implements PipeTransform {

  transform(prix :number): number {
    return prix/1000;
  }

}

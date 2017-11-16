import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    let prepositions = [
                        'of',
                        'the'
                      ];

    let words = value.split(' ');
    for (var index = 0; index < words.length; index++) {
      if(prepositions.includes(words[index])&& (index > 0){
        words[index]=words[index].toLowerCase();
      }else{
        words[index]=words[index].substring(0,1).toUpperCase()+words[index].substring(1).toLowerCase();
      }

    }
    return words.join(' ');
  }
}

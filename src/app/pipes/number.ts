/* =======================================================
 *
 * Created by anele on 26/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSuffix'
})

export class ThousandSuffixesPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    let exp, rounded,
      suffixes = [' k', ' M', ' B', ' T', ' Q', ' E'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) { return input;}

    exp = Math.floor(Math.log(input) / Math.log(1000));

    return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }

}

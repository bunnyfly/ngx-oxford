import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oxford',
})
export class OxfordPipe implements PipeTransform {
  private static trim(value: any): string {
    return ('' + value).trim();
  }

  transform(values: string[], conjunction = 'and', max = Infinity, ...args: any[]): any {
    if (values === null || values === undefined) {
      throw new TypeError(`Wrong value for Oxford Pipe provided: ${values} is not an array`);
    }

    if (conjunction === null || conjunction === '') {
      throw new TypeError(`Wrong conjunction for Oxford Pipe provided: ${conjunction} is not a word`);
    }

    const trimmedValues = values.map(OxfordPipe.trim);

    if (trimmedValues.length < 2) {
      return trimmedValues[0] || '';
    }

    if (trimmedValues.length === 2) {
      return `${trimmedValues[0]} ${OxfordPipe.trim(conjunction)} ${trimmedValues[1]}`;
    }

    let result = '';
    for (let i = 0; i < trimmedValues.length - 1; i++) {
      result += `${OxfordPipe.trim(trimmedValues[i])}, `;
    }
    result += `${OxfordPipe.trim(conjunction)} ${OxfordPipe.trim(
      trimmedValues[trimmedValues.length - 1],
    )}`;
    return result;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oxford',
})
export class OxfordPipe implements PipeTransform {
  private static trim(value: any): string {
    return ('' + value).trim();
  }

  transform(values: any, conjunction: string, ...args: any[]): any {
    if (!Array.isArray(values)) {
      throw Error(`Invalid pipe content is not array: '${values}' for pipe OxfordPipe`);
    }
    if (typeof conjunction !== 'string' || !conjunction) {
      throw Error(`Invalid pipe argument conjunction: '${conjunction}' for pipe OxfordPipe`);
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

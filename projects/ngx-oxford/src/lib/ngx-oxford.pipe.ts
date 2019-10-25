import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oxford',
})
export class NgxOxfordPipe implements PipeTransform {
  private static trim(value: any): string {
    return ('' + value).trim();
  }

  transform(values: any, conjunction: string, ...args: any[]): any {
    if (!Array.isArray(values)) {
      throw Error(`Invalid pipe content is not array: '${values}' for pipe NgxOxfordPipe`);
    }
    if (typeof conjunction !== 'string' || !conjunction) {
      throw Error(`Invalid pipe argument conjunction: '${conjunction}' for pipe NgxOxfordPipe`);
    }

    const trimmedValues = values.map(NgxOxfordPipe.trim);

    if (trimmedValues.length < 2) {
      return trimmedValues[0] || '';
    }

    if (trimmedValues.length === 2) {
      return `${trimmedValues[0]} ${NgxOxfordPipe.trim(conjunction)} ${trimmedValues[1]}`;
    }

    let result = '';
    for (let i = 0; i < trimmedValues.length - 1; i++) {
      result += `${NgxOxfordPipe.trim(trimmedValues[i])}, `;
    }
    result += `${NgxOxfordPipe.trim(conjunction)} ${NgxOxfordPipe.trim(
      trimmedValues[trimmedValues.length - 1],
    )}`;
    return result;
  }
}

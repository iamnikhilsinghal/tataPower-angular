import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  transform(value: number, args: number): unknown {
    console.log('value', value);

    return value + args;
    // return Number(value) + 5;
  }
}

// input="Nikhil Singhal"

// args- hello
// output-"Hello Nikhil, How are you?"

// args- bye
// output-"Goodbye Nikhil !"

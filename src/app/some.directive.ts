import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSome]'
})
export class SomeDirective {
  @Input('appSome') some: string;
}

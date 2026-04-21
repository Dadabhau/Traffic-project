import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Control {
  // @Input() label = '';
  label = input.required<string>();
}

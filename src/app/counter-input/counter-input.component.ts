import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements OnInit, ControlValueAccessor {
  @Input() public _counterValue: any = 0;
  public _onChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(value) {
    this._counterValue = value;
    this._onChange(this._counterValue);
  }

  public increment() {
    this.counterValue++;
  }

  public decrement() {
    this.counterValue--;
  }

  public writeValue(value: any) {
    if (value != undefined) this.counterValue = value;
  }

  public registerOnChange(fn) {
    this._onChange = fn;
  }

  public registerOnTouched() { }

}

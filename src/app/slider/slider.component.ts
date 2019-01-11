import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideVal: number = 0;                           // Value of the range input
  output: string = "";                            // String output
  @Input() minVal: string;                        // Input (minVal)
  @Input() maxVal: string;                        // Input (maxVal)
  @Input() id: string;                            // Input (ID)
  @Output() update = new EventEmitter<any>();     // Output event emitter

  constructor() {}

  public getValue(value: number): void {
    // Get the previous value so that we don't emit the same event twice
    let prevVal = this.output;
    // Convert the numerical value on the slider to string
    if(value == 1) { this.output = this.maxVal; }
    if(value == -1) { this.output = this.minVal; }
    if(value == 0) { this.output = ""; }

    if(prevVal != this.output) {
      // Output the data to be picked up by the parent component
      this.update.emit({data: this.output, id: this.id});
    }
  }

  ngOnInit() {  }

}

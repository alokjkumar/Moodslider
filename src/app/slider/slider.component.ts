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
  minLabel: string;                               // String label (min)
  maxLabel: string;                               // String label (max)
  @Output() update = new EventEmitter<any>();     // Output event emitter

  constructor() {}

  private createLabel(val: string): string {
    // Convert the value to a label for display
    return val.toLowerCase().charAt(0).toUpperCase() + val.slice(1).toLowerCase().replace("_", " ");
  }

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

  ngOnInit() {
    // Create the labels once the component is ready
    this.minLabel = this.createLabel(this.minVal);
    this.maxLabel = this.createLabel(this.maxVal);
  }

}

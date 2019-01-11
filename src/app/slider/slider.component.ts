import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideVal: number = 0;
  @Input() minVal: string;
  @Input() maxVal: string;
  minLabel: string;
  maxLabel: string;

  constructor() {

  }

  private createLabel(val: string): string {
    return val.toLowerCase().charAt(0).toUpperCase() + val.slice(1).toLowerCase().replace("_", " ");
  }

  ngOnInit() {
    this.minLabel = this.createLabel(this.minVal);
    this.maxLabel = this.createLabel(this.maxVal);
  }

}

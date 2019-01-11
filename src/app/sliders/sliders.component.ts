import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  sliderVals: any [] = [
    {minVal: "agitated", maxVal: "calm"},
    {minVal: "happy", maxVal: "sad"},
    {minVal: "tired", maxVal: "wide_awake"},
    {minVal: "scared", maxVal: "fearless"}
  ]

  constructor() { }

  ngOnInit() {
  }

}

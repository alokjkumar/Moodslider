import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  // All the slider values (put this in an external file and import for more sliders)
  sliderVals: any = [
    {minVal: "agitated", maxVal: "calm", id: "0"},
    {minVal: "happy", maxVal: "sad", id: "1"},
    {minVal: "tired", maxVal: "wide_awake", id: "2"},
    {minVal: "scared", maxVal: "fearless", id: "3"}
  ];

  profile: any [] = [];

  constructor() {
    for(let val of this.sliderVals) {
      // We initialise our profile array so that we can update the values later
      this.profile.push("");
    }
  }

  ngOnInit() { }

  addToProfile(data) {
    // We update each array value individually. This allows us to overwrite values that are no longer relevant without logging previous values and crosschecking between various arrays
    this.profile[parseInt(data.id)] = data.data;
  }

}

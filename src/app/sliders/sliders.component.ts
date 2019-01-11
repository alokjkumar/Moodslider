import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  // All the slider values (put this in an external file and import for more sliders)
  // This could even be an input value which is controlled by the parent component - this would allow us to remove moods that aren't relevant or add more moods
  // Currently it seems more appropriate to be loading these in the component - otherwise no point having this component!
  sliderVals: any = [
    {minVal: "Agitated", maxVal: "Calm", id: "0"},
    {minVal: "Happy", maxVal: "Sad", id: "1"},
    {minVal: "Tired", maxVal: "Wide Awake", id: "2"},
    {minVal: "Scared", maxVal: "Fearless", id: "3"}
  ];

  profile: any [] = [];                           // Empty profile
  @Output() update = new EventEmitter<any>();     // Output event emitter

  constructor() {
    for(let val of this.sliderVals) {
      // We initialise our profile array so that we can update the values later
      this.profile.push("");
    }
  }

  ngOnInit() { }

  addToProfile(data: any): void {
    // We update each array value individually. This allows us to overwrite values that are no longer relevant without logging previous values and crosschecking between various arrays
    this.profile[parseInt(data.id)] = data.data;
    // Now output the profile so that the parent component can load suggestions
    this.update.emit(this.profile);
  }

}

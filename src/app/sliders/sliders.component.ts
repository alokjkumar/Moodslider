import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  // All the slider values (put this in an external file and import for more sliders)
  // This could even be an input value which is controlled by the parent component - this would allow us to remove moods that aren't relevant or add more moods
  sliderVals: any = [
    {minVal: "agitated", maxVal: "calm", id: "0"},
    {minVal: "happy", maxVal: "sad", id: "1"},
    {minVal: "tired", maxVal: "wide_awake", id: "2"},
    {minVal: "scared", maxVal: "fearless", id: "3"}
  ];

  profile: any [] = [];                           // Empty profile
  @Output() update = new EventEmitter<string>();  // Output event emitter

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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss']
})
export class ProgrammesComponent implements OnInit {

  @Input() profile: any;                        // Input (profile)
  @Input() content: any;                        // Input (content)

  constructor() { }

  ngOnInit() {}

}

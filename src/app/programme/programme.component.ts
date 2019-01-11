import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {

  @Input() name: any;
  @Input() image: any;
  @Input() mood: any;

  constructor() { }

  ngOnInit() { }

}

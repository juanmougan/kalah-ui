import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pit',
  templateUrl: './pit.component.html',
  styleUrls: ['./pit.component.css']
})
export class PitComponent implements OnInit {

  @Input() index = 0
  @Input() ownSeeds = 0
  @Input() rivalSeeds = 0

  constructor() { }

  ngOnInit(): void {
  }

}

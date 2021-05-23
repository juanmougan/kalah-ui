import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalah',
  templateUrl: './kalah.component.html',
  styleUrls: ['./kalah.component.css']
})
export class KalahComponent implements OnInit {

  @Input() playerName = ''
  @Input() seeds = 0

  constructor() { }

  ngOnInit(): void {
  }

}

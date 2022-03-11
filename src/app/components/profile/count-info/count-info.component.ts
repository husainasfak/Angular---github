import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-info',
  templateUrl: './count-info.component.html',
  styleUrls: ['./count-info.component.scss']
})
export class CountInfoComponent implements OnInit {
  @Input() location!:string;
  @Input() followers!:number;
  @Input() following!:number;
  @Input() repoCount!:number
  constructor() { }

  ngOnInit(): void {
  }

}

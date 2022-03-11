import { User } from './../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  @Input()avatar!:string;
  @Input()name!:string;
  @Input()url!:string;
  constructor() { }

  ngOnInit(): void {
  }

}

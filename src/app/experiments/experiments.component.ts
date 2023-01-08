import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss']
})
export class ExperimentsComponent implements OnInit {
  isNeeded=true;

  users: User[] =[
    {
      "userId":1,
      "userName":"Shekhar"
    },
    {
      "userId":2,
      "userName":"Rajarshi"
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

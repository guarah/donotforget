import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'df-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public time = moment().format('LTS');
  public date = moment().format('MMMM Do YYYY');

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = moment().format('LTS');
    }, 1);
  }

}

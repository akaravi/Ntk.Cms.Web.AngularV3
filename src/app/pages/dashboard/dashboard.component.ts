import { Component, OnInit } from '@angular/core';
import {FilterModel, NewsContentService} from 'ntk-cms-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filterModelContent = new FilterModel();
  constructor() { }

  ngOnInit(): void {

  }

}

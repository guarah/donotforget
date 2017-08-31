import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'app/checklist/checklist.service';

@Component({
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor(private checklistService: ChecklistService) {
  }

  ngOnInit() { }

}

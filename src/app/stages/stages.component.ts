import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  constructor() { }

  backlog = 'Backlog';
  not_started = 'Not Started';
  in_progress = "In Progress";
  completed = "Completed";

  ngOnInit() { //lifehook cycle, good place for initialization logic
  }

}

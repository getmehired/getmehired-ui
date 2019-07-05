import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.css']
})
export class CreateTalentComponent implements OnInit {

  stepNumber = 1;

  constructor() { }

  ngOnInit() {
  }

  goToStep(stepNumber){
    this.stepNumber = stepNumber;
  }

}

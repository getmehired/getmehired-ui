import { Component, OnInit } from '@angular/core';

import { TalentService } from '../talent.service';

@Component({
  selector: 'app-list-talent',
  templateUrl: './list-talent.component.html',
  styleUrls: ['./list-talent.component.css']
})
export class ListTalentComponent implements OnInit {

  public helloString = "Initial value";

  constructor(
    private talentService: TalentService
  ) { }

  ngOnInit() {
    this.talentService.getHelloWorld().subscribe(
      response => this.helloString = response['value'],
      err => console.error('Observer got an error: ', err),
      () => console.log('Observer got a complete notification')
    );
  }

}

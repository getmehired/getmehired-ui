import { Component, OnInit } from '@angular/core';

import { TalentService } from '../talent.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-talent',
  templateUrl: './list-talent.component.html',
  styleUrls: ['./list-talent.component.css']
})
export class ListTalentComponent implements OnInit {

  public helloString = "Initial value";
  public talents = [];
  public searchText = "test Value";
  

  constructor(
    private talentService: TalentService,
    private formBuilder: FormBuilder,
  ) {
    //this.searchForm = this.formBuilder.group({
    //  value: '',
    //});
  }

  ngOnInit() {
    this.talentService.listTalents().subscribe(
      response => this.talents = this.searchTalent(<[]>response, "a"),
      err => console.error('Observer got an error: ', err),
      () => console.log('Observer got a complete notification')
    );
  }

  searchTalent(allTalents, searchText){
    
    var matchedTalents = [];

    for (let entry of allTalents) {
      var name = entry.name;

      if(name.indexOf(searchText)!=-1){
        matchedTalents.push(entry);
      }
    }

    return matchedTalents;
  }

}

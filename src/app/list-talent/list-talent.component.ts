import { Component, OnInit } from '@angular/core';

import { TalentService } from '../talent.service';

@Component({
  selector: 'app-list-talent',
  templateUrl: './list-talent.component.html',
  styleUrls: ['./list-talent.component.css']
})
export class ListTalentComponent implements OnInit {

  public helloString = "Initial value";
  public talents = [];
  public allTalents = [];
  public searchText = "test Value";
  

  constructor(
    private talentService: TalentService,
  ) {
  }

  ngOnInit() {
    this.talentService.getTalents().subscribe(
      response => { this.talents = <[]>response; this.allTalents=<[]>response; },
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

  searchTalents(){
    //window.alert("Searching for: "+this.searchText);
    var matchedTalents = [];

    for (let entry of this.allTalents) {
      var name = entry.name.toUpperCase();

      if(name.indexOf(this.searchText.toUpperCase())!=-1){
        matchedTalents.push(entry);
      }
    }

    this.talents = matchedTalents;

  }

}

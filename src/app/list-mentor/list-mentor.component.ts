import { Component, OnInit } from '@angular/core';
import {MentorService} from '../mentor.service';
@Component({
  selector: 'app-list-mentor',
  templateUrl: './list-mentor.component.html',
  styleUrls: ['./list-mentor.component.css']
})
export class ListMentorComponent implements OnInit {

  public helloString = "Initial value";
  public mentors = [];
  public allMentors = [];
  public searchText = "test Value";
   
  constructor( private mentorService: MentorService,) { }

  ngOnInit() {
        //this.talentService.listTalents().subscribe(
          this.mentorService.getMentors().subscribe(
            response => { this.mentors = <[]>response; this.allMentors=<[]>response; },
            err => console.error('Observer got an error: ', err),
            () => console.log('Observer got a complete notification')
          );
  }


  searchMentor(allMentors, searchText){
    
    var matchedMentors = [];

    for (let entry of allMentors) {
      var name = entry.name;

      if(name.indexOf(searchText)!=-1){
        matchedMentors.push(entry);
      }
    }

    return matchedMentors;
  }

  searchMentors(){
    //window.alert("Searching for: "+this.searchText);
    var matchedMentors = [];

    for (let entry of this.allMentors) {
      var name = entry.name.toUpperCase();

      if(name.indexOf(this.searchText.toUpperCase())!=-1){
        matchedMentors.push(entry);
      }
    }

    this.mentors = matchedMentors;

  }

}


 


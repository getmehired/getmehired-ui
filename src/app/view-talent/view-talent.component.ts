import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalentService } from '../talent.service';


@Component({
  selector: 'app-view-talent',
  templateUrl: './view-talent.component.html',
  styleUrls: ['./view-talent.component.css']
})
export class ViewTalentComponent implements OnInit {
  public talent;
  constructor( private route: ActivatedRoute,
    private talentservice:TalentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var talentId=params.get('talentId');
      this.talentservice.getTalentbyId(talentId).subscribe(
        response => this.talent=response,
        err => console.error('Observer got an error: ' + err),
        () => console.log('Observer got a complete notification')
         
       );
      //window.alert(""+params.get('talentId'));
     // this.talent = talents[+params.get('talentId')];
    });


  }

   delete(talentId) {
    window.alert('The talent has been deleted!');
    this.route.paramMap.subscribe(params => {
      var talentId=params.get('talentId');
      this.talentservice.deleteTalent(talentId).subscribe(
        response => this.talent=response,
        err => console.error('Observer got an error: ' + err),
        () => console.log('Observer got a complete notification')
         
       );
      //window.alert(""+params.get('talentId'));
     // this.talent = talents[+params.get('talentId')];
    });
  }

}
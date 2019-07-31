import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentService } from '../talent.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-save-talent',
  templateUrl: './save-talent.component.html',
  styleUrls: ['./save-talent.component.css']
})

export class SaveTalentComponent implements OnInit {
  
  public talentform: FormGroup;
  public talent_value;
   
  constructor( private formBuilder: FormBuilder,
    private talentservice:TalentService ) { 
    this.talentform=this.formBuilder.group({
      name: '',
      phoneNumber: '',
      emailAddress:''
    });
  }
  
 
  ngOnInit() {
    this.talentservice.getTalents().subscribe(
      response => this.talent_value=response['value'],
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
       
     );

  }

  onSubmit(talentdata) {
    // Process checkout data here
    console.warn('Your input has been recorded', talentdata);
    //console.log(this.talentform.value);
    this.talentservice.saveTalent(this.talentform.value);
    this.talentform.reset();
  

}

}
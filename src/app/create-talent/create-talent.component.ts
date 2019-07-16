import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentService } from '../talent.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.css']
})
export class CreateTalentComponent implements OnInit {

  public talentform: FormGroup;
  stepNumber = 1;
  
   
  constructor( private formBuilder: FormBuilder,
    private talentservice:TalentService ) { 
    this.talentform=this.formBuilder.group({
      name: '',
      phoneNumber: '',
      emailAddress:'',
      /*address:'',
      calendlyUrl:'',
      timezone:'',
      ssnNumber:'',
      bankAccount:'',
      routingNumber:'',
      citizenship:'',
      immigrationStatus:'',
      immigrationExpiaryStr:'',*/



    });
  }

  ngOnInit() {

     
  }

  onSubmit(talentdata) {
    // Process checkout data here
    //console.warn('Your input has been recorded', talentdata);
    window.alert('Your input has been recorded')
    //console.log(this.talentform.value);
   // this.talentservice.saveTalent(this.talentform.value);
   // this.talentform.reset();
  

}

  goToStep(stepNumber){
    this.stepNumber = stepNumber;
  }

}

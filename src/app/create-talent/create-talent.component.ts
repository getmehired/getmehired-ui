import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentService } from '../talent.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {Talent} from '../talent';

const URL = 'http://localhost:7000/api/files/resume';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.css']
})
export class CreateTalentComponent implements OnInit {


  public headers={
    'idToken':localStorage.getItem('idToken')
  };
  stepNumber = 1;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file',method:'PUT',
                 headers:[{'name':'idToken','value':localStorage.getItem('idToken')}]});
   
  firstName='';
  lastName='';
  errors=[];
  talent:Talent={

    id:'',
    name:'', 
    phoneNumber:'',
    emailAddress:'',
    address:'',
    calendlyUrl:'',
    ssnNumber:'',
    bankAccount:0,
    routingNumber:0,
    degreeSubject:'',
    currentSalary:0,
    currentjobTitle:'',
    currentEmployer:'',
    newjobSalary:0,
    newEmployer:'',
    newPosition:''
  
}

  

  constructor( private formBuilder: FormBuilder,
    private talentservice:TalentService ) { 

  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
     
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

  createTalent(){
    this.talent.name=this.firstName+''+this.lastName;
    this.talentservice.createTalent(this.talent);

    this.talentservice.createTalent(this.talent).subscribe(
      response =>console.log('Talent returned from servive:',response),
      err => this.errors=err.error.errors,
      () => console.log('Observer got a complete notification')
    );
  }

  

}
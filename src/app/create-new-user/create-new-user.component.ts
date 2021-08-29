import { Component, OnInit } from '@angular/core';
import{ MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent implements OnInit {

  constructor(public service:SharedService, public router:Router) { }
  ngOnInit() {
    if(this.router.url.includes('createUser')){
      this.service.clearform();
    }
    
  }

  submitForm(){
   console.log(this.service.form.value); //we will send this record to the server using create or update user rest API's.
  }

  dialogClose(){
    this.service.form.reset();
  }

}

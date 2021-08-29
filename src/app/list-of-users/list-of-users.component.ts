import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { CreateNewUserComponent } from '../create-new-user/create-new-user.component';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {
userdata:any;
errmsg:any;
  constructor(private sharedservice:SharedService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.sharedservice.getUserList().subscribe(item => this.userdata=item, err=>this.errmsg=console.log(err.message));

  }

  editrow(data: any){
    const dialogconfig= new MatDialogConfig();
    dialogconfig.width="60%";
    this.dialog.open(CreateNewUserComponent,dialogconfig)
    this.sharedservice.editform(data);
  }


}

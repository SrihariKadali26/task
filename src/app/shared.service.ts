import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http:HttpClient, private fb:FormBuilder) { }

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    website: ['']
  })

  getUserList():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
  

  editform(value:any){
this.form.patchValue(value);
  }

  clearform(){
    this.form.patchValue({
      name:[''],
      email:[''],
      phone:[''],
      website:['']
    })
  }
}

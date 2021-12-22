import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'fname': new FormControl(null,Validators.required),
      'lname': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'username': new FormControl(null,Validators.required),
      'passwords': new FormGroup({
        'password': new FormControl(null,[Validators.required, 
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      'passwordcheck': new FormControl(null,[Validators.required, this.MustMatch]),
      },{ validators: this.MustMatch })
    },);
  }
  // { validators:  this.MustMatch}

  onSubmit(){
    // console.log(this.signupForm)
    //console.log(this.signupForm.get('password')?.value ===this.signupForm.get('passwordcheck')?.value);
  }

  // MustMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   //console.log(control.value)
  //   //console.log(control.get('password')?.value,control.get('passwordcheck')?.value)
  //   // console.log(control.get('password')?.value !== control.get('passwordcheck')?.value  ?  {mismatch: true} : null )
  //   return control.get('passwordcheck')?.value !== control.get('password')?.value ?  {'mismatch': true} : null ;
  // }

  MustMatch: ValidatorFn = (f: AbstractControl): ValidationErrors | null => { 
      let pass = f.get('password')?.value;
      let confirmPass = f.get('passwordcheck')?.value;
      console.log(pass,confirmPass, confirmPass === pass)
      if(pass !== confirmPass){
        return {mismatch:true}
      }
      return null;
    }
  }

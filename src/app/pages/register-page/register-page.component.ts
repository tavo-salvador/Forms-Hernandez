import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { matchValidator } from 'src/untils/valitors';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  firstNameControl = new FormControl('', [Validators.required,Validators.minLength(4)]);
  lastNameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.email, Validators.required]);
  passwordControl = new FormControl('', [Validators.minLength(6), Validators.required ] );
  repetPasswordControl = new FormControl('', [Validators.minLength(6),Validators.required, matchValidator('password', true)]);

  streetNameControl =new FormControl('');
  numberStreetControl = new FormControl('');
  countryControl = new FormControl('');

  registerForm =new FormGroup({
    firtName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,                      
    password: this.passwordControl,
    repetPassword: this.repetPasswordControl,

    location: new FormGroup({
      streetName: this.streetNameControl,
      numberStreet: this.numberStreetControl,
      country: this.countryControl
    })
  }

  );

  IsNumberValidator(control: FormControl){
    if (control.value != ''){
      return { isNumber: true}
    }
    return null;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}

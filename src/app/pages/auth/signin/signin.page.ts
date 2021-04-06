import { User } from './../../../models/User';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  pageTitle = 'hesap oluştur';
  matchingPasswords: FormGroup;
  validations_form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.matchingPasswords = new FormGroup(
      {
        password: new FormControl(
          '',
          Validators.compose([
            Validators.minLength(5),
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'
            ),
          ])
        ),
        confirm_password: new FormControl('', Validators.required),
      },
      (formGroup: FormGroup) => {
        return this.areEqual(formGroup);
      }
    );

    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      matching_passwords: this.matchingPasswords,
    });
  }

  onSubmit(values) {
    var user = new User(
      '',
      values.matching_passwords.password,
      '',
      values.email,
      ''
    );
    this.authService.registerUser(user).subscribe((res) => {
      console.log(res);
    });
  }

  navigateToAccount() {
    this.router.navigate(['/account-create-result']);
  }

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long.',
      },
      {
        type: 'pattern',
        message:
          'Your password must contain at least one uppercase, one lowercase, and one number.',
      },
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required.' },
    ],
    matching_passwords: [{ type: 'areEqual', message: 'Password mismatch.' }],
  };

  //For passwords
  areEqual(formGroup: FormGroup) {
    let val;
    let valid = true;

    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        let control: FormControl = <FormControl>formGroup.controls[key];
        if (val === undefined) {
          val = control.value;
        } else {
          if (val !== control.value) {
            valid = false;
            break;
          }
        }
      }
    }
    if (valid) {
      return null;
    }
    return {
      areEqual: true,
    };
  }
}

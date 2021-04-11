import { Musteri } from '../../../models/Musteri';
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
          Validators.compose([Validators.minLength(5), Validators.required])
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
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  onSubmit(values) {
    var user = new Musteri(
      values.name,
      values.phone,
      values.email,
      values.matching_passwords.password
    );
    this.authService.registerUser(user).subscribe((res) => {
      if (res.result === 'ok') {
        this.navigateToAccountResult();
      }
    });
  }

  navigateToAccountResult() {
    this.router.navigate(['/account-create-result']);
  }

  //Error messages
  validation_messages = {
    email: [
      { type: 'required', message: 'email alanı boş bırakılamaz' },
      { type: 'pattern', message: 'lütfen geçerli bir mail adresi giriniz' },
    ],
    password: [
      { type: 'required', message: 'parola alanı boş bırakılamaz' },
      {
        type: 'minlength',
        message: 'parolanız en az 6 karakter uzunluğunda olmalı ',
      },
    ],
    confirm_password: [
      { type: 'required', message: 'parola tekrar alanı boş bırakılamaz' },
    ],
    matching_passwords: [{ type: 'areEqual', message: 'parola uyuşma hatası' }],
    phone: [{ type: 'required', message: 'telefon alanı boş bırakılamaz' }],
    name: [{ type: 'required', message: 'isim alanı boş bırakılamaz' }],
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

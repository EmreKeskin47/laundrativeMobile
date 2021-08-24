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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(2), Validators.required])
      ),
    });
  }
  onSubmit(values) {
    this.authService.login(values.email, values.password).subscribe((res) => {
      console.log(res);

      if (res.status && res.result.token) {
        console.log('login success', res.result.token);
        this.authService.setCredentials(
          values.email,
          values.password,
          res.token
        );
      } else {
        console.log('Login Failed');
      }
    });
    this.navigateToAccount();
  }

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }

  navigateToAccount() {
    this.router.navigate(['/yeni-siparis']);
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
    matching_passwords: [{ type: 'areEqual', message: 'parola uyuşma hatası' }],
  };
}

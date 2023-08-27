import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    // redirecionamento para a página principal, caso esteja logado
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['']);
    }
  }

  get formFilds(): { [key: string]: AbstractControl; } {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/home'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.authenticationService.login(this.formFilds['username'].value, this.formFilds['password'].value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.authenticationService.setUserName(this.formFilds['username'].value);
          console.log(data);
        },
        error => {
          this.error = error.message;
          this.loading = false;
        });
  }
}

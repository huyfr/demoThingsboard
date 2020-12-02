import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {LoginRequest, LoginResponse} from "../../models/login.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequest: LoginRequest;
  loginResponse: LoginResponse
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    console.trace("Go into login function");
    if (this.loginForm.valid) {
      console.info("Form login is valid!");
      this.submitted = true;
      this.loginRequest = this.loginForm.value;
      this.authService.login(this.loginRequest).subscribe(
        result => {
          this.loginResponse = result;
          this
          console.info("Login with username: " + this.loginRequest.username + ", password: " + this.loginRequest.password);
          console.info("Resoponse with token: " + this.loginResponse.token + ", refreshToken: " + this.loginResponse.refreshToken);
          this.router.navigateByUrl('/admin/overview')
        }, error => {
          console.error("Cannot login!")
        }
      )
    } else {
      console.error("Cannot login!")
    }
    console.trace("Get out login function");
  }

  get rfc(): any {
    return this.loginForm.controls;
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      console.trace("Go into login function");
      console.info("Login with username: " + username + ", password: " + password);
    } else {
      console.error("Cannot login!")
    }
  }

  get rfc(): any {
    return this.loginForm.controls;
  }

}

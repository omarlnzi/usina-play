import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonIcon,
  IonList,
  IonInput,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { mailOutline, lockClosed } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonImg,
    IonButton,
    IonItem,
    IonIcon,
    IonList,
    IonInput,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  loginForm = this.formbuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    addIcons({ mailOutline, lockClosed });
  }

  ngOnInit() {}

  async login() {
    const formValues = this.loginForm.value;
    const { email, password } = formValues;
    console.log(formValues);

    const userCredential = await this.authService
      .loginUser(email!, password!)
      .catch((err) => {
        console.log(err);
      });
    if (userCredential) {
      console.log(userCredential);
      const user = userCredential.user;
      console.log(user);
      this.router.navigate(['/home']);
    }
  }

  async signUp() {
    if (this.loginForm?.valid) {
      const formValues = this.loginForm.value;
      const { email, password } = formValues;
      const userCredential = await this.authService
        .registerUser(email!, password!)
        .catch((err) => {
          console.log(err);
        });
      if (userCredential) {
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
      }
    }
  }
}

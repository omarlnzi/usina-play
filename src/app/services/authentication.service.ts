import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private auth: Auth
  ) { 
 
  }

  async registerUser(email: string, password: string){
    return await createUserWithEmailAndPassword(this.auth ,email, password)
  }

  async loginUser(email: string, password: string){
    return await signInWithEmailAndPassword(this.auth, email, password)
  }

}

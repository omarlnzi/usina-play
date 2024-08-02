import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PersonalTrainer } from '../interfaces/personal-trainer';
import { Program } from '../interfaces/program';
import { Content } from '../interfaces/content';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  pTrainers$: Observable<PersonalTrainer[]>  = new Observable<PersonalTrainer[]>
  programs$: Observable<Program[]>  = new Observable<Program[]>
  contents$: Observable<Content[]>  = new Observable<Content[]>

  constructor(
    private firestore:Firestore
  ) { }

  getPersonalTrainers():Observable<PersonalTrainer[]>{
    
    const pTrainers = collection(this.firestore, 'ptrainers')
    return collectionData(pTrainers) as Observable<PersonalTrainer[]>
  }

  getPrograms():Observable<Program[]>{
    
    const pTrainers = collection(this.firestore, 'programs')
    return collectionData(pTrainers) as Observable<Program[]>
  }

  getContents():Observable<Content[]>{
    
    const pTrainers = collection(this.firestore, 'contents')
    return collectionData(pTrainers) as Observable<Content[]>
  }

}

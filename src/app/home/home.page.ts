import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
  IonItem,
  IonAvatar,
  IonLabel,
  IonNote,
  IonChip,
  IonicSlides,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  notifications,
  trophy,
  accessibility,
  addCircleOutline,
} from 'ionicons/icons';
import { UserService } from '../services/user.service';
import { PersonalTrainer } from '../interfaces/personal-trainer';
import { Program } from '../interfaces/program';
import { Content } from '../interfaces/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
    IonButtons,
    IonButton,
    IonIcon,
    IonBadge,
    IonItem,
    IonAvatar,
    IonLabel,
    IonNote,
    IonChip,
  ],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  // personalArray = ['Yoga', 'Musculo', 'Levantamento'];
  pTrainers: PersonalTrainer[] = [];
  programs: Program[] = [];
  contents: Content[] = [];

  constructor(private userService: UserService) {
    addIcons({ notifications, trophy, accessibility, addCircleOutline });
  }

  ngOnInit() {

    this.userService.getPersonalTrainers().subscribe((res) => {
      this.pTrainers = res;
      console.log(this.pTrainers);
    });
    this.userService.getPrograms().subscribe((res) => {
      this.programs = res;
      console.log(this.programs);
    });
    this.userService.getContents().subscribe((res) => {
      this.contents = res;
      console.log(this.contents);
    });
  }
}

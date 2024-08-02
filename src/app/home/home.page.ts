import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonButton, IonIcon, IonBadge, IonItem, IonAvatar, IonLabel, IonNote, IonChip, IonicSlides } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notifications, trophy, accessibility, addCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonButtons, IonButton, IonIcon, IonBadge, IonItem, IonAvatar, IonLabel, IonNote, IonChip], 
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides]
  personalArray=['Yoga', 'Musculo', 'Levantamento']

  
  constructor() {
    addIcons({notifications, trophy, accessibility, addCircleOutline})
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Moodslider';
  profile: any [] = [];

  updateProfile(data: any): void {
    this.profile = data;
  }

  uploadData(file: any): void {
    console.log(file);
  }

}

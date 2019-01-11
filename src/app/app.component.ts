import { Component } from '@angular/core';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Moodslider';
  profile: any [] = [];
  content: any [] = [];

  updateProfile(data: any): void {
    this.profile = data;
  }

  uploadData(files: any): void {
    const reader = new FileReader();
    if(files.length > 0) {
      const [file] = files;
      reader.readAsText(file);

      reader.onload = () => {
        this.parseXML(reader.result);
      }
    } else {
      alert("Please select a valid file!");
    }
  }

  parseXML(data: any): void {
    parseString(data, (err, result) => {
      if(!err) {
        if(result.programmedata.programme) {
          this.content = result.programmedata.programme;
          console.log(this.content);
        } else {
          alert("Please select a valid file!");
        }
      } else {
        alert("Please select a valid file!");
      }
    })
  }

}

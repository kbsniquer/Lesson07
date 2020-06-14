import { Component } from '@angular/core';
import { ExamService } from './example/exam.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExamService]
})
export class AppComponent {
  title = 'I have updated my title';
  constructor(private fals: ExamService) {}
  funcDemo(qty) {
    this.fals.falsPoster(qty);
  }
}

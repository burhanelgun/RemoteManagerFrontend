import { Component, Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {


  constructor(private authService: AuthService) {

  }
  title = 'Remote Manager';
}

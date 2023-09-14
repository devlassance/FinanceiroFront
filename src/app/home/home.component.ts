import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userId: string | null | undefined;

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: string[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('https://3000-d4553a57-8762-4d12-ac2e-315bbe522ede.ws-eu01.gitpod.io/api').subscribe(data => {
        this.results = data['results'];
      });
    }
}

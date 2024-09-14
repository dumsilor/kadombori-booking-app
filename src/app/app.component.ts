import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./pages/search/search.component";
import { BookingComponent } from "./pages/booking/booking.component";
import { BookingService } from './pages/booking/booking.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, BookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [BookingService, SearchService]
})
export class AppComponent {
  title = 'kadombori-booking';
  
}


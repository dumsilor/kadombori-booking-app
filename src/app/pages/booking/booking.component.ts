import { Component, OnInit } from '@angular/core';
import { DatepickerComponent } from "../../shared/datepicker/datepicker.component";
import { RoomComponent } from "../../shared/room/room.component";
import { BookingService } from './booking.service';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TitleComponent } from "../../shared/title/title.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [DatepickerComponent, RoomComponent, FormsModule, RouterModule, TitleComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {

  constructor(private bookinsService: BookingService) { }

  numberOfRooms: number = 0;
  roomPrice = 7000;
  totalPrice = 0;
  selectedDate!: any;
  tripDays: number = 0

  ngOnInit(): void {
    this.bookinsService.roomsSelected.subscribe((rooms) => {
      this.numberOfRooms = rooms.length;
      this.totalPrice = (this.numberOfRooms * this.roomPrice) * (this.tripDays+1)
    })

    this.bookinsService.tripDays.subscribe((days) => {
      this.tripDays = days;
    })
  }

  onSubmit(bookingForm: NgForm) {
    console.log(bookingForm.value);
    console.log(this.tripDays)
   }
}

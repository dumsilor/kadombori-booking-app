import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookingService } from '../../pages/booking/booking.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  rooms = [
    {
      room_number: 1,
      room_type: "Single",
      booked: true,
    },
    {
      room_number: 2,
      room_type: "Single",
      booked: false
    },
    {
      room_number: 3,
      room_type: "Double",
      booked: false
    },
    {
      room_number: 4,
      room_type: "Double",
      booked: false

    },
    {
      room_number: 5,
      room_type: "Double",
      booked: false

    },
    {
      room_number: 6,
      room_type: "Double",
      booked: true,
    },
    {
      room_number: 7,
      room_type: "Double",
      booked: false,
    },
    {
      room_number: 8,
      room_type: "Double",
      booked: true
    },
  ]
  selectedRooms: any[] = [];

  constructor(private bookingService: BookingService) { }

  onClick(room: any) {
    const index = this.selectedRooms.indexOf(room.room_number);
    if (index === -1) {
      this.selectedRooms.push(room.room_number)
    }
    this.bookingService.roomsSelected.next(this.selectedRooms)
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core'; // Or MatMomentDateModule if you prefer moment.js
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../search.service';
import { BookingService } from '../../pages/booking/booking.service';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [provideNativeDateAdapter()]
})
export class DatepickerComponent {
  dateRange = { start: null, end: null };
  
  tripDate = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  })


    oldDayFilter = (d: Date | null): boolean => {
    const day = new Date();
    return d ? d >= day : false;
  }

  constructor(private searchSerivce: SearchService, private bookingService: BookingService) { }

  onDateChange() {
    this.searchSerivce.selectedDate.next(this.tripDate.value);
    this.bookingService.tripDays.next((this.tripDate.value.end!-this.tripDate.value.start!)/1000/60/60/24)
  }

}

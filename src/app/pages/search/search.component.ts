import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from "../../shared/datepicker/datepicker.component";
import { SearchService } from '../../search.service';
import { RouterModule } from '@angular/router';
import { TitleComponent } from "../../shared/title/title.component";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, DatepickerComponent, RouterModule, TitleComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit, OnDestroy {

  availability: boolean = false;
  selectedDate!: any;
  popUpOpen: boolean = false;

  findBooking() {
    console.log(this.formateDate(this.selectedDate.start))
    console.log(this.formateDate(this.selectedDate.end))
    const hasBooking = false;
    this.popUpOpen = true;
    if (hasBooking) {
      this.availability = false;
    } else {
      this.availability = true;
    }
  }

  private formateDate(date: Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`
  }

  constructor(private searchService: SearchService) { }
    ngOnInit(): void {
        this.searchService.selectedDate.subscribe((date) => {
          this.selectedDate = date;
    })
  }

  ngOnDestroy(): void {
    this.searchService.selectedDate.unsubscribe();
  }

}
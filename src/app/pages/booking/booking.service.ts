import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { SearchService } from "../../search.service";

@Injectable({
    providedIn: 'root'
})

export class BookingService implements OnInit {
    roomsSelected = new Subject<any[]>()
    selectedDates!: any;
    tripDays = new Subject<number>();

    constructor(private searchService: SearchService) { }

    ngOnInit(): void {
        this.searchService.selectedDate.subscribe((date) => {
            this.selectedDates = date;
        })
    }

}
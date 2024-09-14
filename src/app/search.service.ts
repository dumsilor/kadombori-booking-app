import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    selectedDate = new Subject<any>()
}
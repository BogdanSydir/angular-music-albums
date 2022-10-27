import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;

  @Output()
  inputEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this._createForm()
  }

  _createForm(): void {
    this.form = new FormGroup({
      input: new FormControl(),
    })
  }

  emitt(): void {
    this.inputEmitter.emit(this.form.getRawValue().input)
  }
}

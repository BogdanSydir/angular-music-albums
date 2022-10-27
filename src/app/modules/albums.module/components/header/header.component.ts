import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  inputEmitter = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  return(): void {     //for return button
    this.router.navigate(['./'])
  }

  catchInputEmitter(search: string): void { //for searching by name
    this.inputEmitter.emit(search)
  }
}

import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  template: `
  {{title}}
  <ul>
    <li *ngFor="let teacher of authors">
    {{teacher}}
    </li>
  </ul>
  <button class="btn btn-primary">Save</button>
  `
})

export class AuthorsComponent {
  title = 'List of authors';
  authors;

  constructor(service: AuthorsService) {
      this.authors = service.getAuthors();
  }
}

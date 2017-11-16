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
  <span [class]="star" aria-hidden="true" (click)="vote($event)" style="font-size: 300%;"></span> 
  `
})

export class AuthorsComponent {
  title = 'List of authors';
  authors;

  constructor(service: AuthorsService) {
      this.authors = service.getAuthors();
  }

  star= 'glyphicon glyphicon-star-empty';
  public vote(event) {
      if (this.star === 'glyphicon glyphicon-star-empty' ) {
        this.star = 'glyphicon glyphicon-star';
      } else {
        this.star = 'glyphicon glyphicon-star-empty';
      }
  }
}

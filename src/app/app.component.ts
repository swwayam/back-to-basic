import { Component } from '@angular/core';
import { Book } from './book.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Learning App'
  
  db : any[] = []
  id = 102

  submitData(
    nameL: HTMLInputElement,
    authorL: HTMLInputElement,
    imageL: HTMLInputElement,
    descL: HTMLInputElement
  ) {
    this.id += 1
    this.db.push(new Book(nameL.value, authorL.value, descL.value,  imageL.value, this.id))
    
      
    console.log(this.db)
  }

  delete(){ }
}

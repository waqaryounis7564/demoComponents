import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getPosts() {
    return this.posts;
  }
  show(value) {
    console.log(value);
  }
  posts = [
    { name: 'hassam waqar', age: 16, gender: 'male' },
    { name: 'meerab bilal', age: 15, gender: 'female' },
    { name: 'momal waqar', age: 11, gender: 'female' },
    { name: 'eman', age: 12, gender: 'female' },
    { name: 'eshal', age: 12, gender: 'female' },
    { name: 'naffay', age: 12, gender: 'male' },
    { name: 'jannat', age: 12, gender: 'female' },
    { name: 'eman', age: 12, gender: 'female' },
  ];
}

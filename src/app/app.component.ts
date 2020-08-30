import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  currentPageIndex(ind: number) {
    return Math.abs(this.currentPage - ind) < 5;
  }
  changePageUp() {
    this.currentPage += 1;
  }
  changePageDown() {
    this.currentPage -= 1;
  }
  images = [
    {
      image: 'car',
      url:
        'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
    },
    { image: 'bike', url: 'https://unsplash.com/photos/zGzXsJUBQfs' },
    { image: 'plane', url: 'https://unsplash.com/photos/rf6ywHVkrlY' },
    { image: 'ship', url: 'https://unsplash.com/photos/emH2e5SBifE' },
    { image: 'apple', url: 'https://unsplash.com/photos/gDPaDDy6_WE' },
    { image: 'banana', url: 'https://unsplash.com/photos/fczCr7MdE7U' },
    { image: 'boy', url: 'https://unsplash.com/photos/zh-QHJg_da4' },
    { image: 'kid', url: 'https://unsplash.com/photos/JfolIjRnveY' },
  ];
}

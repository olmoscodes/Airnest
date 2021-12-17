import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // if (!localStorage.getItem('foo')) {
    //     localStorage.setItem('foo', 'no reload')
    //     location.reload()
    // } else {
    //     localStorage.removeItem('foo')
    // }
  }

}

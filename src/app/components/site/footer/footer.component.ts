import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  submitted = false;
	mailChimpEndpoint = 'https://airnest.us20.list-manage.com/subscribe/post-json?u=edd79a59c2e5bc2637645344b&amp;id=8709a3b193&amp';
	error = '';

	constructor(private http: HttpClient) {}

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [
		   Validators.required,
	    	Validators.email,
	    ]),
    });
  }
  subscribeEmail() {
    this.error = '';


		if (this.userForm.controls.email.status === 'VALID') {

      const params = new HttpParams()
				.set('EMAIL', this.userForm.controls.email.value)
        .set('subscribe','Subscribe')
        .set('b_edd79a59c2e5bc2637645344b_8709a3b193','')
      console.log(params);
			const mailChimpUrl = this.mailChimpEndpoint + params.toString();

			this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        console.log('response ', response)
				if (response.result && response.result !== 'error') {
					this.submitted = true;
				}
				else {
					this.error = response.msg;
				}
			}, error => {
				console.error(error);
				this.error = 'Sorry, an error occurred.';
			});
		}
  }
}

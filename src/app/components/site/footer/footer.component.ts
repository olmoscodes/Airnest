import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
	mailChimpEndpoint = 'https://airnest.us20.list-manage.com/subscribe/post-json?u=edd79a59c2e5bc2637645344b&amp;id=8709a3b193';
	error = '';

	constructor(private http: HttpClient) { }

  // reactive form components

  sub = new FormGroup({
    emailControl: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

	submit() {
		this.error = '';

    console.log(this.sub.value.emailControl);
    console.log(this.sub.status);
		if (this.sub.status === 'VALID') {

			const params = new HttpParams()
				.set('EMAIL', this.sub.value.emailControl)
				.set('b_123abc123abc123abc123abc123abc123abc', ''); // hidden input name

			const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
			this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
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

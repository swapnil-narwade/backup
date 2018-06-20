import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') onSubmitChild: NgForm;
  defaultQuestions= 'pet';
  answer = '';
  genders=['male','female'];
  user= { username: '',
    email:'',
    secretQuestion:'',
    gender: '',
    textarea: ''
  }
submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.onSubmitChild.({
    //   userData: { username: suggestedName,
    //   email:''},
    //   secret: 'pet',
    //   questionAnswer : '',
    //   gender: 'male'
    // })
    this.onSubmitChild.form.patchValue({
      userData :{ username: suggestedName,
      email: suggestedName + '@gmail.com'}
    })
  }
  onSubmit() {
    console.log(this.onSubmitChild)
    this.submitted = true;
  this.user.username = this.onSubmitChild.value.userData.username;
  this.user.email = this.onSubmitChild.value.userData.email;
  this.user.gender = this.onSubmitChild.value.gender;
  this.user.secretQuestion = this.onSubmitChild.value.secret;
  this.user.textarea = this.onSubmitChild.value.questionAnswer;

  }

  // onSubmit(form: NgForm) {
  // console.log(form);
  // }
}

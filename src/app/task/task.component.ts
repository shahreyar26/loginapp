import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  loginform: FormGroup;
  data: any = {}
  username = ""
  password = ""
  constructor(private fb: FormBuilder,
    private router: Router) {

    this.loginform = this.fb.group({
      username: [""],

      password: [""],
    })

  }
  ngOnInit(): void {

  }

  onSubmit() {

    // console.logthis.loginform.value
    this.data = this.loginform.value
    if (this.data.username == 'xyz' && this.data.password == 'xyz') {
      this.router.navigate(['demo'])
    }
    else if (this.data.username !== 'xyz' ) {
      alert('your username is incorrect')
    }
    else if (this.data.password !== 'xyz')
    {
      alert('your password is incorrect')
    }




  }

}

import { Component, OnInit } from '@angular/core';
// import {trigger, state, animate, transition, style} from '@angular/animations';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private router:Router) { }
    onFormSubmit(data){
        // console.log(data);
        localStorage.setItem('email',data.email);
        this.router.navigateByUrl('/user');
    }
    ngOnInit(): void { }
}

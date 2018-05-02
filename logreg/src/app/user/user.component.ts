import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    constructor(private router: Router) { }
    getUserEmail(){
        return localStorage.getItem('email');
    }
    logout(){
        // Remove the email from the localstorage
        localStorage.removeItem('email');
        // Redirect to the index route
        this.router.navigateByUrl('/');
    }
    ngOnInit(): void { }
}

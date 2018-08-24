import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewUser } from './new-user';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']

})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.minLength(4),
                    Validators.maxLength(30)
                ]
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
    }
}

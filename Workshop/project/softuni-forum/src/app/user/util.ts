import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if(!value){
        return null;
    }

    if(!/.{6,}@gmail\.(com|bg)/.test(value)){
        return {
            email: true
        }
    }
    return null
}

// export function passwordMatch(passwordFormControl:AbstractControl) {
//     return (rePasswordFormControl: AbstractControl) => {
//         if(passwordFormControl.value !== rePasswordFormControl.value) {
//             return {
//                 passwordMatch: true
//             }
//         }
//         return null;
//     }
// }

export function passwordMatch(passwordFormControl: AbstractControl) {
    const validtorFn: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMissmatch: true
            }
        }

        return null;
    }

    return validtorFn;
}

export function passwordMatchCheck(passwordFormControl:AbstractControl): ValidationErrors | null {
    
    const passwordFormGroup = passwordFormControl.parent as FormGroup;

    if(!passwordFormGroup) {
        return null;
    }

    const { password, rePassword } = passwordFormGroup.controls;
    console.log(password.value, rePassword.value);
    
    // if(password !== rePassword) {
    //     return {
    //         passwordMatchCheck: true
    //     } 
    // }
    return null;
}
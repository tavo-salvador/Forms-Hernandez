import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchValidator( matchTo: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): 
    ValidationErrors | null => {
      const formControl: AbstractControl = (control.parent?.controls as any)[matchTo];
      if(!formControl){
        return null;
      }
      return control.parent && control.parent.value && control.value === formControl.value ? null : { matching: true };      
    };
  }
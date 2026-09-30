import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-gula',
  imports: [ReactiveFormsModule],
  templateUrl: './gula.component.html',
  styleUrl: './gula.component.css',
})
export class GulaComponent {

  builder = inject(FormBuilder);
  gulaForm = this.builder.group({
    
    height : ['', [Validators.required, Validators.min(1)]],
    base : ['', [Validators.required, Validators.min(1)]],
    volume : ['',]
  })

  showVolume = false;
  
  startCalc(){
    const height = Number(this.gulaForm.get('height')?.value);
    const base = Number(this.gulaForm.get('base')?.value);
    const volume = this.calcVolume(height, base);
    this.gulaForm.get('volume')?.setValue(String(volume));
    this.showVolume = true;
  }

  calcVolume(height: number, base: number): number{
    const volume = 1.0/3.0 * Math.pow(base, 2) * height;
    return volume;
  }

}

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Athlete } from '../../../core/models/athlete.model';

@Component({
  selector: 'app-athlets-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './athlets-form.component.html',
  styleUrls: ['./athlets-form.component.css']
})
export class AthletsFormComponent implements OnChanges {
  @Input() model: Partial<Athlete> | null = null;
  @Output() submit = new EventEmitter<Partial<Athlete>>();
  @Output() cancel = new EventEmitter<void>();

  form: Partial<Athlete> = {};

  ngOnChanges(changes: SimpleChanges){
    if(changes['model']){
      this.form = this.model ? { ...this.model } : {};
    }
  }

  doSubmit(){
    this.submit.emit(this.form);
  }

  doCancel(){
    this.cancel.emit();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-partial',
  templateUrl: './form-partial.component.html'
})
export class FormPartialComponent {
  editForm: FormGroup;
  active: boolean;
  @Input() isNew: boolean;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Input() public set model(model: Object) {
    this.editForm.reset(model);
    this.active = model !== undefined;
  }

  constructor() {
    this.editForm = new FormGroup({
      'id': new FormControl(),
      'links': new FormControl(''),
      'crestURI': new FormControl('', Validators.required),
      'position': new FormControl(''),
      'teamName': new FormControl('', Validators.required),
      'points': new FormControl('', Validators.required),
      'goalDifference': new FormControl('', Validators.required)
    });

    this.active = false;
    this.isNew = false;
  }

  public onSave(ev): void {
    if (!this.editForm.valid) {
      return;
    }

    ev.preventDefault();
    this.editForm.value.position = 1;
    this.editForm.value.links = {
      team: {
        href: 'http://api.football-data.org/v1/teams/61'
      }
    };
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(ev): void {
    this.closeForm();
  }

  private closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }
}

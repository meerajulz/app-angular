import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectedUser() {}
}

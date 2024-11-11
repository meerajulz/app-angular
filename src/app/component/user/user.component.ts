import { Component, Input, input, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  name = input<string>(''); // @Input() name!: string;
  avatar = input<string>(''); // @Input() avatar!: string;

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectedUser() {}
}

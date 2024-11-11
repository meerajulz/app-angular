import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, UserComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: string | undefined;
}

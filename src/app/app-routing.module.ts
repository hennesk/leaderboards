import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { AddUserComponent } from './add-user/add-user.component'
import { EditUserComponent } from './edit-user/edit-user.component'

const routes: Routes = [
	{
		path: 'user',
		component: UserListComponent,
		data: { title: 'User List' }
	},
	{
		path: 'user-detail/:id',
		component: UserDetailComponent,
		data: { title: 'User Detail' }
	},
	{
		path: 'add-user',
		component: AddUserComponent,
		data: { title: 'Add User' }
	},
	{
		path: 'edit-user/:id',
		component: EditUserComponent,
		data: { title: 'Edit User' }
	},
	{
		path: '',
		redirectTo: 'user/',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

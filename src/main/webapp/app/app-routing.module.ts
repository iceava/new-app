import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { HomeComponent } from './home/home.component';
import { MyroomComponent } from './layouts/myroom/myroom.component';
import { UsersComponent } from './layouts/users/users.component';
import { AnylinksComponent } from './layouts/anylinks/anylinks.component';
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { NewitemComponent } from './layouts/newitem/newitem.component';
import { FeedbackComponent } from './layouts/feedback/feedback.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
        },
        {
          path: 'login',
          loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'users',
          component: UsersComponent,
        },
        {
          path: 'myroom',
          component: MyroomComponent,
        },
        {
          path: 'contacts',
          component: ContactsComponent,
        },
        {
          path: 'anylinks',
          component: AnylinksComponent,
        },
        {
          path: 'newitem',
          component: NewitemComponent,
        },
        {
          path: 'feedback',
          component: FeedbackComponent,
        },

        ...LAYOUT_ROUTES,
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

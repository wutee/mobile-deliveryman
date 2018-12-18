import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }

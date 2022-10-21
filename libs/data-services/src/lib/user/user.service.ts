import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { UserQuery } from "@razroo-angular-starter/data-graphql";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  user() {
    const query = UserQuery;
    const variables = {};
    const user$ = this.apollo.query({ query, variables });
    return from(user$).pipe(pluck('data', 'user'));
  }
}

import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textArea = '';

  constructor(private apollo: Apollo) {
  }

  getResponseWithQuery() {
    console.log('Get response');

    this.apollo.query({
      query: gql`
        query{
          getMessageData{
            name
          }
        }
      `
    }).subscribe((resp: any) => {
      console.log('Response ==> ', resp);
      this.textArea = JSON.stringify(resp);
    });
  }


  getResponseWithWatchQuery() {
    console.log('Get response');


    try {
      this.apollo.watchQuery({
        query: gql`
        query{
          getMessageData{
            name
          }
        }
      `
      }).valueChanges.subscribe(resp => {
        console.log('Response==> ', resp);
      });
    } catch (error) {
      console.log('Error ==> ', error);
      this.textArea = error;
    }


  }
}

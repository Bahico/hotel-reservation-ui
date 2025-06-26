import { Component } from '@angular/core';
import { <%= className %>Service } from '../services/<%= fileName %>.service';
import { ActivatedRoute } from '@angular/router';
import { <%= className %>Model } from '../models/<%= fileName %>.model';
import {MfListComponent} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: '<%= fileName %>',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfListComponent
  ]
})
export class <%= className %> extends EntityListPage<<%= className %>Model> {
  title = '<%= name %>';

  constructor(
    readonly <%= name %>Service: <%= className %>Service,
    readonly activatedRoute: ActivatedRoute
) {
    super(<%= name %>Service, new <%= className %>Model(), activatedRoute);
  }
}

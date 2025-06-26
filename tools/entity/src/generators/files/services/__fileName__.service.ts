import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { <%= className %>Model } from '../models/<%= fileName %>.model';

@Injectable({providedIn: 'root'})
export class <%= className %>Service extends BaseClientCrudService<<%= className %>Model> {
  listModification = '<%= pluralize %>';

  constructor() {
    super(new <%= className %>Model(), 'api/<%= pluralize %>');
  }
}

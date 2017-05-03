import * as Wilddog from 'wilddog';
import { Observable } from 'rxjs/Observable';

export interface WilddogAppConfig {
  websocketOnly?: boolean;
  authDomain?: string;
  syncURL?: string;
}

export interface WilddogOperationCases {
  stringCase: () => Wilddog.Promise<void>;
  wilddogCase?: () => Wilddog.Promise<void>;
  snapshotCase?: () => Wilddog.Promise<void>;
  unwrappedSnapshotCase?: () => Wilddog.Promise<void>;
}

export interface WDUnwrappedDataSnapshot {
  $key: string;
  $value?: string | number | boolean;
  $exists: () => boolean;
}

export interface Query {
  [key: string]: any;
  orderByKey?: boolean | Observable<boolean>;
  orderByPriority?: boolean | Observable<boolean>;
  orderByChild?: string | Observable<string>;
  orderByValue?: boolean | Observable<boolean>;
  equalTo?: any | Observable<any>;
  startAt?: any | Observable<any>;
  endAt?: any | Observable<any>;
  limitToFirst?: number | Observable<number>;
  limitToLast?: number | Observable<number>;
}

export interface ScalarQuery {
  [key: string]: any;
  orderByKey?: boolean;
  orderByPriority?: boolean;
  orderByChild?: string;
  orderByValue?: boolean;
  equalTo?: any;
  startAt?: any;
  endAt?: any;
  limitToFirst?: number;
  limitToLast?: number;
}

export interface OrderBySelection {
  key: OrderByOptions;
  value: boolean | string;
}

export interface LimitToSelection {
  key: LimitToOptions;
  value: number;
}

export interface WilddogListFactoryOpts {
  preserveSnapshot?: boolean;
  query?: Query;
}

export interface WilddogObjectFactoryOpts {
  preserveSnapshot?: boolean;
}

export enum OrderByOptions {
  Child,
  Key,
  Value,
  Priority
}

export enum LimitToOptions {
  First,
  Last
}

export enum QueryOptions {
  EqualTo,
  StartAt,
  EndAt
}

export type Primitive = number | string | boolean;
export type DatabaseSnapshot = Wilddog.sync.DataSnapshot;
export type DatabaseReference = Wilddog.sync.Reference;
export type DatabaseQuery = Wilddog.sync.Query;
export type QueryReference = DatabaseReference | DatabaseQuery;
export type PathReference = QueryReference | string;
export type Auth = Wilddog.auth.Auth;
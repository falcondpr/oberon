
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Tester {
    id: string;
    name: string;
    email?: Nullable<string>;
}

export interface IQuery {
    testers(): Tester[] | Promise<Tester[]>;
}

type Nullable<T> = T | null;


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddTesterArgs {
    id: string;
    name: string;
    email?: Nullable<string>;
}

export interface EditTesterArgs {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export interface Tester {
    id: string;
    name: string;
    email?: Nullable<string>;
}

export interface IQuery {
    index(): string | Promise<string>;
    findAllTesters(): Tester[] | Promise<Tester[]>;
    findTesterById(testerId: string): Nullable<Tester> | Promise<Nullable<Tester>>;
}

export interface IMutation {
    deleteTester(testerId: string): Nullable<Tester> | Promise<Nullable<Tester>>;
    addTester(addTesterArgs: AddTesterArgs): Tester | Promise<Tester>;
    updateTester(testerId: string, editTesterArgs: EditTesterArgs): Tester | Promise<Tester>;
}

type Nullable<T> = T | null;

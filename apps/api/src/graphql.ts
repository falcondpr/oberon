
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

export interface AddUserArgs {
    email: string;
    fullname: string;
    username: string;
    password: string;
    avatar?: Nullable<string>;
    role: string;
}

export interface EditUserArgs {
    email?: Nullable<string>;
    fullname?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    avatar?: Nullable<string>;
    role?: Nullable<string>;
}

export interface Tester {
    id: string;
    name: string;
    email?: Nullable<string>;
}

export interface User {
    id: string;
    email: string;
    fullname: string;
    username: string;
    password: string;
    avatar?: Nullable<string>;
    role: string;
    createdAt: DateTime;
}

export interface IQuery {
    index(): string | Promise<string>;
    findAllTesters(): Tester[] | Promise<Tester[]>;
    findTesterById(testerId: string): Nullable<Tester> | Promise<Nullable<Tester>>;
    findAllUsers(): User[] | Promise<User[]>;
    findUserById(id: string): User | Promise<User>;
}

export interface IMutation {
    deleteTester(testerId: string): Nullable<Tester> | Promise<Nullable<Tester>>;
    addTester(addTesterArgs: AddTesterArgs): Tester | Promise<Tester>;
    updateTester(testerId: string, editTesterArgs: EditTesterArgs): Tester | Promise<Tester>;
    addUser(addUserArgs: AddUserArgs): User | Promise<User>;
    updateUser(editUserArgs: EditUserArgs, id: string): User | Promise<User>;
    deleteUser(id: string): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;

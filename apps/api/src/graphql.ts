
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

export interface AddFeedbackArgs {
    title: string;
    description: string;
    category: string;
}

export interface EditFeedbackArgs {
    title?: Nullable<string>;
    description?: Nullable<string>;
    category?: Nullable<string>;
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

export interface Feedback {
    id: string;
    title: string;
    description: string;
    category: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface IQuery {
    index(): string | Promise<string>;
    findAllTesters(): Tester[] | Promise<Tester[]>;
    findTesterById(testerId: string): Nullable<Tester> | Promise<Nullable<Tester>>;
    findAllUsers(): User[] | Promise<User[]>;
    findUserById(id: string): User | Promise<User>;
    findAllFeedbacks(): Feedback[] | Promise<Feedback[]>;
    findOneFeedback(id: string): Feedback | Promise<Feedback>;
}

export interface IMutation {
    deleteTester(testerId: string): Nullable<Tester> | Promise<Nullable<Tester>>;
    addTester(addTesterArgs: AddTesterArgs): Tester | Promise<Tester>;
    updateTester(testerId: string, editTesterArgs: EditTesterArgs): Tester | Promise<Tester>;
    addUser(addUserArgs: AddUserArgs): string | Promise<string>;
    updateUser(id: string, editUserArgs: EditUserArgs): User | Promise<User>;
    deleteUser(id: string): User | Promise<User>;
    addFeedback(addFeedbackArgs: AddFeedbackArgs): Feedback | Promise<Feedback>;
    updateFeedback(id: string, editFeedbackArgs: EditFeedbackArgs): Feedback | Promise<Feedback>;
    deleteFeedback(id: string): Feedback | Promise<Feedback>;
}

export type DateTime = any;
type Nullable<T> = T | null;

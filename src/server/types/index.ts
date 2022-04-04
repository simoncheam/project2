import { Request } from 'express';
import { UsersTable } from '../database/models';

export interface MySQL_Default_Response {
    insertId: number;
    affectedRows: number;
}

// Add Books, Categories, Users, ReqUser

export interface ReqUser extends Request {
    user?: Users;
}

export interface Users {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    _created?: string
}



export interface Payload extends UsersTable {
    id?: number;
    role?: number;
}
import { Action } from '@ngrx/store';

export namespace EVENTS_ACTION {
    export const GET_EVENTS = 'GET_EVENTS';
}

export class GetEvents implements Action {
    readonly type = EVENTS_ACTION.GET_EVENTS;
}

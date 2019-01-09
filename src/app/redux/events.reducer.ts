import { Action } from '@ngrx/store';

import { EVENTS_ACTION, GetEvents } from '@app/redux/events.action';

const initialState = {
    events: []
};

export function eventsReducer(state = initialState, action: GetEvents) {
    switch (action.type) {
        case EVENTS_ACTION.GET_EVENTS:
            return {
              ...state,
                events: []
            };
        default:
            return state;
    }
}

import {t} from "./actions";

const initState = {
    translationHidden: true
}

export const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case t.INCREMENT_COUNTER:
            return state + 1;

        default:
            return state;
    }
};

export const translateReducer = (state = initState, action) => {
    console.log(state, action)
    switch (action.type) {
        case t.TRANSLATE_EXPRESSION:
            return Object.assign({}, state, {
                translationHidden: false,
            })

        case t.TRANSLATE_BACK:
            return Object.assign({}, state, {
                translationHidden: true,
            })

        default:
            return state;
    }
}


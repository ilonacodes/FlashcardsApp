import {t} from "./actions";
import {flashcardContent} from "./EnEspContent";

const initState = {
    translationHidden: true
}

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

export const currentFlashcardReducer = (state = 0, action) => {
    switch (action.type) {
        case t.NEXT_FLASHCARD:
            if (state < flashcardContent.length - 1) {
                return state + 1;
            }

            return 0;

        default:
            return state;
    }
}


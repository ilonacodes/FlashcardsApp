import React from "react";

import {currentFlashcardReducer, translateReducer} from "./reducers";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Flashcard} from "./Flashcard";

let store = createStore(combineReducers({
    translate: translateReducer,
    currentFlashcard: currentFlashcardReducer,
}));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Flashcard />
            </Provider>
        );
    }
}
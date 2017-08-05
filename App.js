import React from "react";
import {StyleSheet, View} from "react-native";

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
                <View style={styles.container}>
                    <Flashcard />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

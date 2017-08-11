import React from "react";
import {Font} from "expo";

import {currentFlashcardReducer, translateReducer} from "./reducers";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Flashcard} from "./Flashcard";
import {Text, View} from "react-native";


let store = createStore(combineReducers({
    translate: translateReducer,
    currentFlashcard: currentFlashcardReducer,
}));

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            "FontAwesome": require("./assets/fonts/fontawesome-webfont.ttf"),
        })

        this.setState({fontLoaded: true})
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <Provider store={store}>
                    <Flashcard />
                </Provider>
            );
        } else {
            return (
                <View><Text>Loading...</Text></View>
            )
        }
    }
}
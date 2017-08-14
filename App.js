import React from "react";
import {Font} from "expo";

import {currentFlashcardReducer, dimensionsReducer, translateReducer} from "./reducers";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Dimensions, Text, View} from "react-native";
import {Routes} from "./routes";
import {actions} from "./actions";

let store = createStore(combineReducers({
    translate: translateReducer,
    currentFlashcard: currentFlashcardReducer,
    dimensions: dimensionsReducer,
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
                    <Routes/>
                </Provider>
            );
        } else {
            return (
                <View><Text>Loading...</Text></View>
            )
        }
    }
}

Dimensions.addEventListener("change", (dimensions) => {
    store.dispatch(actions.updateDimensions(dimensions))
})
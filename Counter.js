import React from "react";
import {connect} from "react-redux";
import {Button, Text, View} from "react-native";
import {actions} from "./actions";

export const CounterComponent = ({counter, onPressCounter}) => {
    return <View>
        <Text>{counter}</Text>
        <Button
            title="Increment"
            onPress={onPressCounter}
        />
    </View>
};


export const Counter = connect(
    (state) => ({
        counter: state.counter
    }),

    (dispatch) => ({
        onPressCounter: () => dispatch(actions.incrementCounter())
    })
)(CounterComponent);
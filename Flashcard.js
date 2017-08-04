import React from "react";
import {connect} from "react-redux";

import {flashcardContent} from "./EnEspContent";
import {actions} from "./actions";
import {Button, Text, View} from "react-native";

export const flip = (e) => e.preventDefault()

export const FlashcardPresentation = ({flashcardModel, flip, translationHidden}) => {

    return <View>
        <Text>{translationHidden ? flashcardModel.expression : flashcardModel.translation}</Text>
        <Button
            title="Translate"
            onPress={e => flip(translationHidden)}
        />
    </View>
}

function mapStateToProps(state) {
    return {
        flashcardModel: flashcardContent[0],
        translationHidden: state.translationHidden,
    }
}

function toggleTranslation(dispatch, translationHidden) {
    if (translationHidden) {
        dispatch(actions.translateExpression())
    } else {
        dispatch(actions.translateBack())
    }
}

function mapDispatchToProps(dispatch) {
    return {
        flip: (translationHidden) => {
            toggleTranslation(dispatch, translationHidden)
        }
    }
}
export const Flashcard = connect(mapStateToProps, mapDispatchToProps)(FlashcardPresentation)

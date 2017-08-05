import React from "react";
import {connect} from "react-redux";

import {flashcardContent} from "./EnEspContent";
import {actions} from "./actions";
import {Button, Text, View} from "react-native";

export const flip = (e) => e.preventDefault()

export const FlashcardPresentation = ({flashcardModel, flip, translationHidden, goToNext}) => {

    return <View>
        <Text>{translationHidden ? flashcardModel.expression : flashcardModel.translation}</Text>
        <Button
            title="Translate"
            onPress={e => flip(translationHidden)}
        />
        <Button
            title="Next"
            onPress={goToNext}
        />
    </View>
}

function mapStateToProps(state) {
    return {
        flashcardModel: flashcardContent[state.currentFlashcard],
        translationHidden: state.translate.translationHidden,
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
        },

        goToNext: () => {
            dispatch(actions.goToNext())
        }
    }
}
export const Flashcard = connect(mapStateToProps, mapDispatchToProps)(FlashcardPresentation)

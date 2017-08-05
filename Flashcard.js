import React from "react";
import {connect} from "react-redux";

import {flashcardContent} from "./EnEspContent";
import {actions} from "./actions";
import {Button, Text, View} from "react-native";

export const flip = (e) => e.preventDefault()

export const FlashcardPresentation = ({flashcardModel, flip, translationHidden, goToNext, invertedTranslation, invertTranslation}) => {

    let language
    let expression

    if(translationHidden) {
        language = flashcardModel.language
        expression = flashcardModel.expression
    } else {
        language = flashcardModel.languageTranslation
        expression = flashcardModel.translation
    }

    return <View>

        <Text>{language}</Text>
        <Text>{expression}</Text>

        <Button
            title="Flip"
            onPress={e => flip(translationHidden)}
        />

        <Button
            title="Next"
            onPress={goToNext}
        />

        <Button
            title={invertedTranslation ? "English → Spanish" : "Spanish → English"}
            onPress={invertTranslation}
        />


    </View>
}

function mapStateToProps(state) {
    return {
        flashcardModel: flashcardContent[state.currentFlashcard],
        translationHidden: state.translate.translationHidden,
        invertedTranslation: state.translate.invertedTranslation
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
        },

        invertTranslation: () => {
            dispatch(actions.invertTranslation())
        }
    }
}
export const Flashcard = connect(mapStateToProps, mapDispatchToProps)(FlashcardPresentation)

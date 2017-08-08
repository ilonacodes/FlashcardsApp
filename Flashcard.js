import React from "react";
import {connect} from "react-redux";

import {flashcardContent} from "./EnEspContent";
import {actions} from "./actions";
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FlipCard from "react-native-flip-card/lib/FlipCard";

const styles = StyleSheet.create({
    flashcardView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    face: {
        flex: 1,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
    },

    back: {
        flex: 1,
        backgroundColor: '#f1c40f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15

    },

    flipCard: {
        minHeight: 190,
        minWidth: 300,
        borderRadius: 10,
        marginTop: 60,
    }
})

export const Face = ({flashcardModel}) => {
    return <View style={styles.face}>
        <View style={{paddingBottom: 60, flex: 1, flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between'}}>
            <Image
                style={{height: 20, width: 20}}
                source={require('./esp.png')}
            />
            <Image
                style={{height: 20, width: 20}}
                source={require('./reverse.png')}
            />
        </View>

        <Text style={{paddingBottom: 60}}>{flashcardModel.expression}</Text>
    </View>
}

export const Back = ({flashcardModel}) => {
    return <View style={styles.back}>
        <Text style={{alignSelf: 'flex-start', paddingBottom: 60}}>
            <Image
                style={{height: 20, width: 20}}
                source={require('./en.png')}
            />
        </Text>
        <Text style={{paddingBottom: 60}}>{flashcardModel.translation}</Text>
    </View>
}

export const FlashcardPresentation = ({flashcardModel, goToNext, invertedTranslation, invertTranslation}) => {

    let flipCard

    if (invertedTranslation) {
        flipCard = <FlipCard style={styles.flipCard}>
            <Back flashcardModel={flashcardModel} />
            <Face flashcardModel={flashcardModel} />
        </FlipCard>
    } else {
        flipCard = <FlipCard style={styles.flipCard}>
            <Face flashcardModel={flashcardModel} />
            <Back flashcardModel={flashcardModel} />
        </FlipCard>
    }

    return <View style={styles.flashcardView}>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
            <TouchableOpacity onPress={invertTranslation}>
                <Image style={{height: 100, width: 100}}
                    source={invertedTranslation ? require('./esp.png') : require('./en.png')}
                />
            </TouchableOpacity>
        </View>

        <View style={{flex: 2, justifyContent: 'center', marginTop: 0}}>
            {flipCard}
        </View>

        <View style={{flex: 2, justifyContent: 'center', marginTop: 0}}>
            <Button
                title="Next"
                onPress={goToNext}
            />
        </View>

    </View>
}

function mapStateToProps(state) {
    return {
        flashcardModel: flashcardContent[state.currentFlashcard],
        invertedTranslation: state.translate.invertedTranslation
    }
}


function mapDispatchToProps(dispatch) {
    return {
        goToNext: () => {
            dispatch(actions.goToNext())
        },

        invertTranslation: () => {
            dispatch(actions.invertTranslation())
        }
    }
}

export const Flashcard = connect(mapStateToProps, mapDispatchToProps)(FlashcardPresentation)

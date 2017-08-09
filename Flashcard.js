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
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    contentView: {
        flex: 1,
    },

    face: {
        flex: 1,
        backgroundColor: '#2ecc71',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'stretch',
    },

    back: {
        flex: 1,
        backgroundColor: '#f1c40f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
    },

    flipCard: {
        minHeight: 190,
        minWidth: 300,
        borderRadius: 10,
    }
})

export const Face = ({flashcardModel, flip}) => {
    return <View style={styles.face}>
        <TouchableOpacity onPress={flip}>
            <View style={{
                paddingTop: 10,
                paddingBottom: 75,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Image
                    style={{height: 20, width: 20}}
                    source={require('./esp.png')}
                />
                <Image
                    style={{height: 20, width: 20}}
                    source={require('./reverse.png')}
                />
            </View>

            <View style={{flex: 1, alignSelf: 'center'}}>
                <Text style={{}}>{flashcardModel.expression}</Text>
            </View>
        </TouchableOpacity>
    </View>
}

export const Back = ({flashcardModel, flip}) => {
    return <View style={styles.back}>
        <TouchableOpacity onPress={flip}>
            <View style={{
                paddingBottom: 60,
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'stretch',
                justifyContent: 'space-between'
            }}>
                <Image
                    style={{height: 20, width: 20}}
                    source={require('./en.png')}
                />
                <Image
                    style={{height: 20, width: 20}}
                    source={require('./reverse.png')}
                />
            </View>
            <View>
                <Text style={{paddingBottom: 60}}>{flashcardModel.translation}</Text>
            </View>
        </TouchableOpacity>
    </View>
}

export const FlashcardPresentation = ({flashcardModel, translationHidden, flip, goToNext, invertedTranslation, invertTranslation}) => {

    let flipCard

    let flipFn = () => flip(translationHidden)

    flipCard = <FlipCard
        style={styles.flipCard}
        flip={!translationHidden}
    >
        <Face flashcardModel={flashcardModel} flip={flipFn}/>
        <Back flashcardModel={flashcardModel} flip={flipFn}/>
    </FlipCard>

    return <View style={styles.flashcardView}>

        <View style={styles.contentView}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={invertTranslation}>
                    <Image style={{height: 100, width: 100}}
                           source={invertedTranslation ? require('./esp.png') : require('./en.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{flex: 2}}>
                {flipCard}
            </View>
        </View>

        <View style={{flexDirection: 'row'}}>
            <Button
                title="Settings"
                onPress={() => {
                }}
            />
            <Button
                title="Next"
                onPress={goToNext}
            />
        </View>

    </View>
}

function toggleTranslation(dispatch, translationHidden) {
    if (translationHidden) {
        dispatch(actions.translateExpression())
    } else {
        dispatch(actions.translateBack())
    }
}

function mapStateToProps(state) {
    return {
        translationHidden: state.translate.translationHidden,
        flashcardModel: flashcardContent[state.currentFlashcard],
        invertedTranslation: state.translate.invertedTranslation
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

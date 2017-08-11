import React from "react";
import {connect} from "react-redux";

import {flashcardContent} from "./EnEspContent";
import {actions} from "./actions";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FlipCard from "react-native-flip-card/lib/FlipCard";

import FontAwesome, {Icons} from "react-native-fontawesome";

const styles = StyleSheet.create({
    flashcardView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e7e4df',
    },

    contentView: {
        flex: 1,
    },

    face: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'stretch',
    },

    back: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        borderRadius: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },

    flipCard: {
        minHeight: 200,
        minWidth: 300,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        borderColor: '#959595',
        shadowColor: '#888888',
        shadowRadius: 3,
        shadowOpacity: 1,
        shadowOffset: {width: 4, height: 3},
    },

    navBar: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        height: 60,
    },

    navBarSettings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
    },

    navBarNext: {
        flex: 1,
        backgroundColor: '#1fa67a',
        justifyContent: 'center',
        alignItems: 'center',
    },

    flipIcon: {
        height: 20,
        width: 20,
        textAlign: 'right',
        color: "#777",
    },
})

export const FlipIcon = () => {
    return <FontAwesome style={styles.flipIcon}>
        {Icons.refresh}
    </FontAwesome>
}

export const Face = ({flashcardModel, flip}) => {
    return <View style={styles.face}>
        <TouchableOpacity onPress={flip}>
            <View style={{
                paddingTop: 10,
                paddingBottom: 80,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Image
                    style={{height: 20, width: 20}}
                    source={require('./esp.png')}
                />
                <FlipIcon/>
            </View>

            <View style={{flex: 1, alignSelf: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '400'}}>{flashcardModel.expression}</Text>
            </View>
        </TouchableOpacity>
    </View>
}

export const Back = ({flashcardModel, flip}) => {
    return <View style={styles.back}>
        <TouchableOpacity onPress={flip}>
            <View style={{
                paddingTop: 10,
                paddingBottom: 75,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Image
                    style={{height: 20, width: 20}}
                    source={require('./en.png')}
                />
                <FlipIcon/>
            </View>
            <View style={{flex: 1, alignSelf: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '400'}}>{flashcardModel.translation}</Text>
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
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={invertTranslation}>
                    <Image style={{height: 100, width: 100}}
                           source={invertedTranslation ? require('./esp.png') : require('./en.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{flex: 3}}>
                {flipCard}
            </View>
        </View>

        <View style={styles.navBar}>

            <View style={styles.navBarSettings}>
                <TouchableOpacity>
                    <Text style={{}}>Settings</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navBarNext}>
                <TouchableOpacity
                    onPress={goToNext}
                >
                    <Text style={{fontSize: 22, color: 'white', fontWeight: '500'}}>Next</Text>
                </TouchableOpacity>
            </View>
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

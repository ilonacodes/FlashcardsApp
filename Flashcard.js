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
        backgroundColor: '#eee9e9'
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
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        height: 50,
    },

    navBarTop: {
        flex: 0,
        alignSelf: 'stretch',
    },

    navBarSettings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    navBarLanguage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    navBarNext: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    flipIcon: {
        height: 20,
        width: 20,
        textAlign: 'right',
        color: "#777",
    },

    cogsIcon: {
        height: 'auto',
        width: 40,
        textAlign: 'center',
        color: '#1fa67a',
        fontSize: 18,
    },

    languageIcons: {
        height: 'auto',
        width: 40,
        textAlign: 'center',
        color: '#1fa67a',
        fontSize: 18,
    },


    nextIcon: {
        height: 'auto',
        width: 40,
        textAlign: 'center',
        color: '#1fa67a',
        fontSize: 18,
    }
})

export const FlipIcon = () => {
    return <FontAwesome style={styles.flipIcon}>
        {Icons.refresh}
    </FontAwesome>
}

export const Face = ({flashcardModel, flip}) => {
    return <View style={styles.face}>
        <TouchableOpacity onPress={flip}>
            <View>
                <View style={{
                    paddingTop: 10,
                    paddingBottom: 80,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Image
                        style={{height: 13, width: 20}}
                        source={require('./spain-flag.png')}
                    />
                    <FlipIcon/>
                </View>

                <View style={{flex: 1, alignSelf: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '400'}}>{flashcardModel.expression}</Text>
                </View>
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
                    style={{height: 13, width: 20}}
                    source={require('./uk-flag.png')}
                />
                <FlipIcon/>
            </View>
            <View style={{flex: 1, alignSelf: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '400'}}>{flashcardModel.translation}</Text>
            </View>
        </TouchableOpacity>
    </View>
}

export const FlashcardPresentation = ({flashcardModel, translationHidden, flip, goToNext, invertTranslation, navigation, dimensions}) => {
    let flipCard

    let flipFn = () => flip(translationHidden)

    const {navigate} = navigation

    flipCard = <FlipCard
        style={styles.flipCard}
        flip={!translationHidden}
    >
        <Face flashcardModel={flashcardModel} flip={flipFn}/>
        <Back flashcardModel={flashcardModel} flip={flipFn}/>
    </FlipCard>

    return <View style={styles.flashcardView}>

        <View style={styles.navBarTop}>
            <View style={{justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: '#1fa67a'}}>
                <Text style={{color: '#fff', fontSize: 18}}>Spanish to English Flashcards</Text>
            </View>
        </View>

        <View style={styles.contentView}>
            <View style={{flex: 2}}/>

            <View style={{flex: (dimensions.height <= 568) ? 6 : 5}}>
                {flipCard}
            </View>
        </View>

        <View style={styles.navBar}>

            <View style={styles.navBarSettings}>
                <TouchableOpacity onPress={() => navigate('Settings')}>
                    <FontAwesome style={styles.cogsIcon}>
                        {Icons.cogs}
                    </FontAwesome>
                    <Text style={{fontSize: 10, alignSelf: 'center', paddingTop: 3, color: '#1fa67a'}}>Settings</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navBarLanguage}>
                <TouchableOpacity onPress={invertTranslation}>
                    <FontAwesome style={styles.languageIcons}>
                        {Icons.language}
                    </FontAwesome>
                    <Text style={{fontSize: 10, alignSelf: 'center', paddingTop: 3, color: '#1fa67a'}}>Flip</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navBarNext}>
                <TouchableOpacity
                    onPress={goToNext}
                >
                    <FontAwesome style={styles.nextIcon}>
                        {Icons.arrowCircleORight}
                    </FontAwesome>
                    <Text style={{fontSize: 10, alignSelf: 'center', paddingTop: 3, color: '#1fa67a'}}>Next</Text>
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
        dimensions: state.dimensions,
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

Flashcard.navigationOptions = {
    title: 'Home',
}
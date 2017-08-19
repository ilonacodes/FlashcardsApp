import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Link} from "./Link";

export const styles = StyleSheet.create({
    aboutView: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },

    headline: {
        fontSize: 22,
        marginBottom: 5,
    },

    miscellaneous: {
        fontSize: 12,
    },

    aboutText: {
        marginTop: 10,
    },
})

export const About = (props) => {
    return <View style={styles.aboutView}>
        <Headline/>
        <Miscellaneous/>
        <AboutText/>
    </View>
}

const Headline = () => {
    return <Text style={styles.headline}>
        About
    </Text>
}

const Miscellaneous = () => {
    return <View>
        <Text style={styles.miscellaneous}>
            Version: 1.0.0
        </Text>

        <Text style={styles.miscellaneous}>
            Author:&nbsp;

            <Link url="http://ilonacodes.com"
                  text="ilonacodes"/>
        </Text>
    </View>
}

const AboutText = () => {
    return <Text style={styles.aboutText}>
        Learning common English and Spanish phrases using interactive flashcards.
    </Text>
}


About.navigationOpttions = {
    title: 'About',
}
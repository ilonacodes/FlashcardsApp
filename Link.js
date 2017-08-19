import React from "react";
import {Linking, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    },
})

export const Link = ({url, text}) => {
    return <Text style={styles.link}
                 onPress={() => Linking.openURL(url)}>
        {text}
    </Text>
}
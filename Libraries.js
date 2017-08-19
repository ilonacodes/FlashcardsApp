import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";

import licenses from "./licenses.json";
import {Link} from "./Link";

const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },

    headline: {
        fontSize: 22,
        marginBottom: 7
    },

    miscellaneous: {
        fontSize: 16,
        marginBottom: 2
    },
})

export const Libraries = (props) => {
    return <View style={styles.viewContainer}>
        <Headline />
        <List />
    </View>
}

const Headline = () => {
    return <Text style={styles.headline}>
        Open Source Libraries
    </Text>
}

const List = () => {
    return <ScrollView>

        {Object.keys(licenses).map(key =>
            <View key={key}>
                <Text style={styles.miscellaneous}>{key}</Text>
                <Text style={{fontSize: 12}}>
                    <Link url={licenses[key].repository}
                          text={licenses[key].repository}/>
                </Text>
                <Text style={{fontSize: 12, marginBottom: 7}}>License: {licenses[key].licenses}</Text>
            </View>
        )}

    </ScrollView>
}
Libraries.navigateOptions = {
    title: 'Libraries',
}
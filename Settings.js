import React from "react";
import {StyleSheet, View} from "react-native";
import SettingsList from "react-native-settings-list";

const styles = StyleSheet.create({
    settingsView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 50,
    },
})

export const Settings = ({navigation}) => {

    const {navigate} = navigation

    return <View style={styles.settingsView}>

        <SettingsList borderColor='#c8c7cc'>
            <SettingsList.Item
                title='About'
                onPress={() => navigate('About')}
                itemWidth={50}
                backgroundColor='#f7f7f8'
            />
            <SettingsList.Item
                title='Blog'
                onPress={() => {
                }}
                itemWidth={50}
                backgroundColor='#f7f7f8'
            />
            <SettingsList.Item
                title='Open-source Libraries'
                onPress={() => {
                }}
                itemWidth={50}
                backgroundColor='#f7f7f8'
            />
        </SettingsList>

    </View>
};

Settings.navigationOptions = {
    title: 'Settings',
}
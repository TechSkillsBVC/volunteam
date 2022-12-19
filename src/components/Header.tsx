import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { StackHeaderProps } from '@react-navigation/stack';

interface HeaderProps extends StackHeaderProps {
    showCancel?: boolean;
    title: string;
}

export default function Header({ showCancel = true, title, navigation }: HeaderProps) {
    function handleCancelCreateEvent() {
        navigation.navigate('EventsMap');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#00A3FF" />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {showCancel ? (
                <BorderlessButton onPress={handleCancelCreateEvent}>
                    <Feather name="x" size={24} color="#FF003A" />
                </BorderlessButton>
            ) : (
                <View style={{ width: 24 }} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',
        paddingTop: 64,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16,
    },
});

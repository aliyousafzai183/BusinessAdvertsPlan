import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const HomeCard = ({ title, value }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardValue}>{value}</Text>
        </View>
    );
};

export default HomeCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.linear2,
        borderRadius: 10,
        padding: 20,
        width: colors.width * 0.43,
        alignItems: 'center',
        marginBottom: colors.height * 0.02,
        height: colors.height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },
    cardValue: {
        fontSize: 22,
        color: colors.primary,
    },
});

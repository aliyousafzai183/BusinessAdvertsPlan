import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={styles.header}>
            <Icon name="bar-chart" size={24} color={colors.primary} style={styles.icon} />
            <Text style={styles.headerText}>Statistics</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: colors.height * 0.04,
        paddingTop: colors.height * 0.07,
    },
    icon: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
      },
});

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header, HomeCard } from '../../components/index';

const HomeScreen = ({ navigation }) => {
  const [totalExpenditure, setTotalExpenditure] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalImpressions, setTotalImpressions] = useState(0);
  const [clickThroughRate, setClickThroughRate] = useState(0);
  const [clickRate, setClickRate] = useState(0);
  const [impressionRate, setImpressionRate] = useState(0);

  // Sample data for expenditure, clicks, impressions
  const expenditureData = [
    { month: 'Jan', expenditure: 500 },
    { month: 'Feb', expenditure: 750 },
    { month: 'Mar', expenditure: 1000 },
    // Add more data as needed
  ];

  const clicksData = [
    { label: 'Impressions', value: 5000, key: 'impressions' },
    { label: 'Clicks', value: 150, key: 'clicks' },
    // Add more data as needed
  ];

  const impressionsData = [
    { month: 'Jan', impressions: 10000 },
    { month: 'Feb', impressions: 15000 },
    { month: 'Mar', impressions: 20000 },
    // Add more data as needed
  ];

  const calculateTotalExpenditure = () => {
    const total = expenditureData.reduce((sum, data) => sum + data.expenditure, 0);
    setTotalExpenditure(total);
  };

  const calculateTotalClicks = () => {
    const total = clicksData.reduce((sum, data) => sum + data.value, 0);
    setTotalClicks(total);
  };

  const calculateTotalImpressions = () => {
    const total = impressionsData.reduce((sum, data) => sum + data.impressions, 0);
    setTotalImpressions(total);
  };

  const calculateClickThroughRate = () => {
    const rate = totalImpressions !== 0 ? (totalClicks / totalImpressions) * 100 : 0;
    setClickThroughRate(rate);
  };

  const calculateClickRate = () => {
    const rate = totalClicks !== 0 ? totalExpenditure / totalClicks : 0;
    setClickRate(rate);
  };

  const calculateImpressionRate = () => {
    const rate = totalImpressions !== 0 ? totalExpenditure / totalImpressions : 0;
    setImpressionRate(rate);
  };

  // Call the calculation functions when the component mounts
  useEffect(() => {
    calculateTotalExpenditure();
    calculateTotalClicks();
    calculateTotalImpressions();
    calculateClickThroughRate();
    calculateClickRate();
    calculateImpressionRate();
  }, []);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

        <Header />

        <View style={styles.cardContainer}>
          <HomeCard title="Total Expenditure" value={`$ ${totalExpenditure}`} />
          <HomeCard title="Total Clicks" value={totalClicks} />
          <HomeCard title="Total Impressions" value={totalImpressions} />
          <HomeCard title="Click-Through Rate" value={`${clickThroughRate.toFixed(2)}%`} />
          <HomeCard title="Click Rate" value={`$ ${clickRate.toFixed(2)}`} />
          <HomeCard title="Impression Rate" value={`$ ${impressionRate.toFixed(2)}`} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingBottom: colors.height * 0.05,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: colors.width * 0.9,
    flexWrap: 'wrap'
  },
});

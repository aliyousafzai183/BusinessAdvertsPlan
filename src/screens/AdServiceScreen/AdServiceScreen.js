import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header2 } from '../../components/index';

const AdServiceScreen = ({ navigation }) => {
  const adServiceProviders = [
    { name: 'Google Ads', url: 'https://ads.google.com' },
    { name: 'Facebook Ads', url: 'https://www.facebook.com/business/ads' },
    { name: 'Amazon Advertising', url: 'https://advertising.amazon.com' },
    { name: 'Microsoft Advertising', url: 'https://ads.microsoft.com' },
    { name: 'LinkedIn Ads', url: 'https://business.linkedin.com/marketing-solutions/ads' },
    { name: 'Twitter Ads', url: 'https://ads.twitter.com' },
    { name: 'Pinterest Ads', url: 'https://ads.pinterest.com' },
    { name: 'Snapchat Ads', url: 'https://forbusiness.snapchat.com/advertising' },
    { name: 'TikTok Ads', url: 'https://www.tiktok.com/business/ads' },
    { name: 'Instagram Ads', url: 'https://business.instagram.com/advertising' },
    { name: 'YouTube Ads', url: 'https://www.youtube.com/ads' },
    { name: 'Bing Ads', url: 'https://ads.microsoft.com/en-us/bing' },
    { name: 'Twitter Promote Mode', url: 'https://business.twitter.com/en/help/campaign-measurement-and-analytics/twitter-promote-mode.html' },
    { name: 'Quora Ads', url: 'https://www.quora.com/business/advertising' },
    { name: 'Reddit Ads', url: 'https://www.redditinc.com/advertising' },
    { name: 'Snapchat Filters', url: 'https://forbusiness.snapchat.com/geofilters' },
    { name: 'Pinterest Promoted Pins', url: 'https://business.pinterest.com/en/promoted-pins' },
    { name: 'TikTok Brand Takeover', url: 'https://www.tiktok.com/business/ads/brand-takeovers' },
    { name: 'LinkedIn Sponsored Content', url: 'https://business.linkedin.com/marketing-solutions/native-advertising/sponsored-content' },
    { name: 'Instagram Shopping Ads', url: 'https://business.instagram.com/shopping/ads' },
  ];

  const openWebsite = (url) => {
    Linking.openURL(url);
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header2 title={"Ad Services Providers"} navigation={navigation}/>

        {adServiceProviders.map((provider, index) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWebsite(provider.url)}
            key={index}
          >
            <Text style={styles.buttonText}>{provider.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default AdServiceScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: colors.height * 0.2,
  },
  button: {
    backgroundColor: colors.linear2,
    borderRadius: colors.height * 0.02,
    width: '90%',
    height: colors.height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: colors.height * 0.02,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

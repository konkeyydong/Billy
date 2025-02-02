import React from 'react';
import { View, Text, Linking, Share } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import AnimatedButton from '../components/AnimatedButton';

const SettingsScreen = ({ navigation }) => {
    const handleShare = async () => {
        try {
            await Share.share({
                message: 'Check out this amazing invoice scanner app!',
                // Add your app's store links when available
                url: 'https://your-app-store-link.com'
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleRateApp = () => {
        // Add your app store links when available
        Linking.openURL('https://your-app-store-link.com');
    };

    return (
        <View style={styles.settingsContainer}>
            <Text style={styles.settingsTitle}>Settings</Text>

            <AnimatedButton
                style={styles.settingsButton}
                onPress={() => navigation.navigate('TermsConditions')}
            >
                <Feather name="file-text" size={24} color={styles.settingsIcon.color} />
                <Text style={styles.settingsButtonText}>Terms and Conditions</Text>
                <Feather name="chevron-right" size={24} color={styles.settingsIcon.color} />
            </AnimatedButton>

            <AnimatedButton
                style={styles.settingsButton}
                onPress={() => navigation.navigate('PrivacyPolicy')}
            >
                <Feather name="shield" size={24} color={styles.settingsIcon.color} />
                <Text style={styles.settingsButtonText}>Privacy Policy</Text>
                <Feather name="chevron-right" size={24} color={styles.settingsIcon.color} />
            </AnimatedButton>

            <AnimatedButton
                style={styles.settingsButton}
                onPress={handleRateApp}
            >
                <Feather name="star" size={24} color={styles.settingsIcon.color} />
                <Text style={styles.settingsButtonText}>Rate this App</Text>
                <Feather name="chevron-right" size={24} color={styles.settingsIcon.color} />
            </AnimatedButton>

            <AnimatedButton
                style={styles.settingsButton}
                onPress={handleShare}
            >
                <Feather name="share-2" size={24} color={styles.settingsIcon.color} />
                <Text style={styles.settingsButtonText}>Share this App</Text>
                <Feather name="chevron-right" size={24} color={styles.settingsIcon.color} />
            </AnimatedButton>
        </View>
    );
};

export default SettingsScreen; 
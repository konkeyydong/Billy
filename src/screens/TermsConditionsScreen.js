import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

const TermsConditionsScreen = () => {
    return (
        <ScrollView style={styles.legalContainer}>
            <View style={styles.legalContent}>
                <Text style={styles.legalTitle}>Terms and Conditions</Text>

                <Text style={styles.legalSection}>1. Service Description</Text>
                <Text style={styles.legalText}>
                    Our invoice scanning app provides OCR (Optical Character Recognition) and AI-powered invoice data extraction services. The app allows users to scan, store, and manage invoice information securely.
                </Text>

                <Text style={styles.legalSection}>2. User Obligations</Text>
                <Text style={styles.legalText}>
                    Users must:
                    • Provide accurate information
                    • Maintain the security of their account
                    • Use the service in compliance with applicable laws
                    • Not misuse or attempt to manipulate the service
                </Text>

                <Text style={styles.legalSection}>3. Data Processing</Text>
                <Text style={styles.legalText}>
                    We process invoice data using Google Cloud Vision API and OpenAI's services for text extraction and analysis. All processing is done in accordance with our Privacy Policy and GDPR requirements.
                </Text>

                <Text style={styles.legalSection}>4. Service Limitations</Text>
                <Text style={styles.legalText}>
                    • The accuracy of data extraction depends on image quality
                    • We implement rate limiting of 100 requests per 15 minutes
                    • Maximum image size is limited to 5MB
                </Text>

                <Text style={styles.legalSection}>5. Changes to Terms</Text>
                <Text style={styles.legalText}>
                    We reserve the right to modify these terms at any time. Users will be notified of significant changes.
                </Text>
            </View>
        </ScrollView>
    );
};

export default TermsConditionsScreen; 
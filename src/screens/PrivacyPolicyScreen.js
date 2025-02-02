import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

const PrivacyPolicyScreen = () => {
    return (
        <ScrollView style={styles.legalContainer}>
            <View style={styles.legalContent}>
                <Text style={styles.legalTitle}>Privacy Policy</Text>

                <Text style={styles.legalSection}>1. Data Collection</Text>
                <Text style={styles.legalText}>
                    We collect and process:
                    • Invoice images you upload
                    • Extracted text data including IBANs, recipient names, references, and invoice values
                    • Basic usage data for app functionality
                </Text>

                <Text style={styles.legalSection}>2. Data Processing</Text>
                <Text style={styles.legalText}>
                    Your data is processed using:
                    • Google Cloud Vision API for OCR
                    • OpenAI's API for data extraction
                    • Firebase for secure storage
                    All processing is GDPR compliant and done with appropriate security measures.
                </Text>

                <Text style={styles.legalSection}>3. Data Storage</Text>
                <Text style={styles.legalText}>
                    • Invoice data is stored securely in Firebase
                    • Data is stored within the EU region
                    • You can delete your data at any time
                </Text>

                <Text style={styles.legalSection}>4. Your Rights</Text>
                <Text style={styles.legalText}>
                    Under GDPR, you have the right to:
                    • Access your data
                    • Correct your data
                    • Delete your data
                    • Export your data
                    • Withdraw consent
                </Text>

                <Text style={styles.legalSection}>5. Third-Party Services</Text>
                <Text style={styles.legalText}>
                    We use:
                    • Google Cloud Vision API
                    • OpenAI API
                    • Firebase
                    Each service processes data according to their respective privacy policies and our data processing agreements.
                </Text>

                <Text style={styles.legalSection}>6. Contact</Text>
                <Text style={styles.legalText}>
                    For privacy-related concerns, contact us at: privacy@yourdomain.com
                </Text>
            </View>
        </ScrollView>
    );
};

export default PrivacyPolicyScreen; 
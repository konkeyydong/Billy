import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../screens/styles';
import { TouchableScale } from './AnimatedButton';

const InvoiceCarouselCard = ({ invoice, navigation }) => {
    // Format the date and time
    const formattedDateTime = new Date(invoice.timestamp).toLocaleDateString() + ' • ' +
        new Date(invoice.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

    return (
        <TouchableScale
            onPress={() => navigation.navigate('InvoiceDetail', { invoice })}
        >
            <View style={styles.carouselItem}>
                <View style={styles.carouselContent}>
                    {/* Title */}
                    <Text style={styles.carouselTitle} numberOfLines={1}>
                        {invoice.title || 'Untitled Invoice'}
                    </Text>

                    {/* Invoice data */}
                    <View style={styles.carouselDataContainer}>
                        {/* IBAN Field */}
                        <View style={styles.carouselDataRow}>
                            <Feather name="credit-card" size={16} color="#666" />
                            <Text style={styles.carouselText} numberOfLines={1}>
                                {invoice.data?.iban || 'No IBAN detected'}
                            </Text>
                        </View>

                        {/* Recipient Field */}
                        <View style={styles.carouselDataRow}>
                            <Feather name="user" size={16} color="#666" />
                            <Text style={styles.carouselText} numberOfLines={1}>
                                {invoice.data?.recipientName || 'No recipient detected'}
                            </Text>
                        </View>

                        {/* Reference Field */}
                        <View style={styles.carouselDataRow}>
                            <Feather name="bookmark" size={16} color="#666" />
                            <Text style={styles.carouselText} numberOfLines={1}>
                                {invoice.data?.reference || 'No reference detected'}
                            </Text>
                        </View>

                        {/* Invoice Value Field */}
                        <View style={styles.carouselDataRow}>
                            <Feather name="tag" size={16} color="#666" />
                            <Text style={styles.carouselText} numberOfLines={1}>
                                {invoice.data?.invoiceValue || 'No value detected'}
                            </Text>
                        </View>
                    </View>

                    {/* Date in bottom right */}
                    <Text style={styles.carouselDate}>
                        {formattedDateTime}
                    </Text>
                </View>
            </View>
        </TouchableScale>
    );
};

export default InvoiceCarouselCard;

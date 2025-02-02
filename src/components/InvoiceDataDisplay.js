import React, { useState } from 'react';
import { View, Text, Clipboard, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../screens/styles';

const InvoiceDataDisplay = ({ invoiceData, compact, labelStyle, valueStyle, containerStyle }) => {
    const [copiedField, setCopiedField] = useState(null);

    const copyToClipboard = async (text, fieldName) => {
        if (text && text !== "N/A") {
            await Clipboard.setString(text);
            setCopiedField(fieldName);
        }
    };

    if (compact) {
        return (
            <View style={styles.compactContainer}>
                {invoiceData && Object.entries(invoiceData).map(([key, value]) => (
                    <View style={styles.compactRow} key={key}>
                        <Text style={styles.compactLabel}>{key}:</Text>
                        <Text style={styles.compactValue}>{value}</Text>
                    </View>
                ))}
            </View>
        );
    }

    // Always render the container with placeholders if no data
    return (
        <View style={[styles.dataContainer, containerStyle]}>
            {/* IBAN Field */}
            <View style={styles.dataRow}>
                <View style={styles.dataIconContainer}>
                    <Feather name="credit-card" style={styles.dataIcon} />
                </View>
                <Text style={[styles.dataLabel, labelStyle]}>IBAN:</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollableValueContainer}
                >
                    <Text style={[
                        styles.dataValue,
                        valueStyle,
                        !invoiceData?.iban && styles.placeholderText
                    ]}>
                        {invoiceData?.iban || "No IBAN detected"}
                    </Text>
                </ScrollView>
                {invoiceData?.iban && invoiceData.iban !== "N/A" && (
                    <TouchableOpacity
                        style={styles.copyButton}
                        onPress={() => copyToClipboard(invoiceData.iban, "IBAN")}
                    >
                        {copiedField === "IBAN" ? (
                            <Feather name="check-circle" size={18} style={[styles.copyButtonIcon, { color: 'green' }]} />
                        ) : (
                            <Feather name="copy" size={18} style={styles.copyButtonIcon} />
                        )}
                    </TouchableOpacity>
                )}
            </View>

            {/* Recipient Field */}
            <View style={styles.dataRow}>
                <View style={styles.dataIconContainer}>
                    <Feather name="user" style={styles.dataIcon} />
                </View>
                <Text style={[styles.dataLabel, labelStyle]}>Recipient:</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollableValueContainer}
                >
                    <Text style={[
                        styles.dataValue,
                        valueStyle,
                        !invoiceData?.recipientName && styles.placeholderText
                    ]}>
                        {invoiceData?.recipientName || "No recipient detected"}
                    </Text>
                </ScrollView>
                {invoiceData?.recipientName && invoiceData.recipientName !== "N/A" && (
                    <TouchableOpacity
                        style={styles.copyButton}
                        onPress={() => copyToClipboard(invoiceData.recipientName, "Recipient Name")}
                    >
                        {copiedField === "Recipient Name" ? (
                            <Feather name="check-circle" size={18} style={[styles.copyButtonIcon, { color: 'green' }]} />
                        ) : (
                            <Feather name="copy" size={18} style={styles.copyButtonIcon} />
                        )}
                    </TouchableOpacity>
                )}
            </View>

            {/* Reference Field */}
            <View style={styles.dataRow}>
                <View style={styles.dataIconContainer}>
                    <Feather name="bookmark" style={styles.dataIcon} />
                </View>
                <Text style={[styles.dataLabel, labelStyle]}>Reference:</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollableValueContainer}
                >
                    <Text style={[
                        styles.dataValue,
                        valueStyle,
                        !invoiceData?.reference && styles.placeholderText
                    ]}>
                        {invoiceData?.reference || "No reference detected"}
                    </Text>
                </ScrollView>
                {invoiceData?.reference && invoiceData.reference !== "N/A" && (
                    <TouchableOpacity
                        style={styles.copyButton}
                        onPress={() => copyToClipboard(invoiceData.reference, "Reference")}
                    >
                        {copiedField === "Reference" ? (
                            <Feather name="check-circle" size={18} style={[styles.copyButtonIcon, { color: 'green' }]} />
                        ) : (
                            <Feather name="copy" size={18} style={styles.copyButtonIcon} />
                        )}
                    </TouchableOpacity>
                )}
            </View>

            {/* Invoice Value Field */}
            <View style={styles.dataRow}>
                <View style={styles.dataIconContainer}>
                    <Feather name="tag" style={styles.dataIcon} />
                </View>
                <Text style={[styles.dataLabel, labelStyle]}>Value:</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollableValueContainer}
                >
                    <Text style={[
                        styles.dataValue,
                        valueStyle,
                        !invoiceData?.invoiceValue && styles.placeholderText
                    ]}>
                        {invoiceData?.invoiceValue || "No value detected"}
                    </Text>
                </ScrollView>
                {invoiceData?.invoiceValue && invoiceData.invoiceValue !== "N/A" && (
                    <TouchableOpacity
                        style={styles.copyButton}
                        onPress={() => copyToClipboard(invoiceData.invoiceValue, "Invoice Value")}
                    >
                        {copiedField === "Invoice Value" ? (
                            <Feather name="check-circle" size={18} style={[styles.copyButtonIcon, { color: 'green' }]} />
                        ) : (
                            <Feather name="copy" size={18} style={styles.copyButtonIcon} />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default InvoiceDataDisplay;

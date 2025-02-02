import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles, { COLORS } from './styles'; // your style file
import { loadInvoices, deleteInvoice } from '../utils/storage';
import { exportToCSV } from '../utils/export';
import InvoiceListItem from '../components/InvoiceListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedButton from '../components/AnimatedButton';

const SavedScansScreen = ({ navigation }) => {
    const [invoices, setInvoices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Add filtered invoices state
    const [filteredInvoices, setFilteredInvoices] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const savedInvoices = await loadInvoices();
                console.log('Loaded Invoices in SavedScansScreen:', savedInvoices);
                setInvoices(savedInvoices || []);
                setFilteredInvoices(savedInvoices || []); // Initialize filtered list
            } catch (error) {
                console.log('Error loading invoices:', error);
            }
        };

        // Re-load data whenever this screen gains focus
        const unsubscribe = navigation.addListener('focus', loadData);
        return unsubscribe;
    }, [navigation]);

    // Add search filter effect
    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = invoices.filter(invoice => {
            return (
                invoice.title?.toLowerCase().includes(lowerCaseQuery) ||
                invoice.data?.iban?.toLowerCase().includes(lowerCaseQuery) ||
                invoice.data?.recipientName?.toLowerCase().includes(lowerCaseQuery) ||
                invoice.data?.reference?.toLowerCase().includes(lowerCaseQuery) ||
                invoice.data?.invoiceValue?.toLowerCase().includes(lowerCaseQuery)
            );
        });
        setFilteredInvoices(filtered);
    }, [searchQuery, invoices]);

    const handleDeleteInvoice = async (id) => {
        await deleteInvoice(id);
        setInvoices((prev) => prev.filter((invoice) => invoice.id !== id));
    };

    const handleRenameInvoice = async (id, newTitle) => {
        try {
            const invoice = await AsyncStorage.getItem(id);
            if (invoice) {
                const updatedInvoice = {
                    ...JSON.parse(invoice),
                    title: newTitle
                };
                await AsyncStorage.setItem(id, JSON.stringify(updatedInvoice));
                setInvoices(prev =>
                    prev.map(inv =>
                        inv.id === id ? { ...inv, title: newTitle } : inv
                    )
                );
            }
        } catch (error) {
            console.error('Error renaming invoice:', error);
        }
    };

    const handleExport = async () => {
        try {
            await exportToCSV(invoices);
        } catch (error) {
            Alert.alert(
                'Export Failed',
                'There was an error exporting your invoices. Please try again.'
            );
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.homeButton}
                onPress={() => navigation.navigate('Landing')}
            >
                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logoHeader}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            {/* Header Row with Export Button */}
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>Saved Invoices</Text>
                <AnimatedButton
                    style={styles.exportButton}
                    onPress={handleExport}
                >
                    <Feather name="download" style={styles.exportIcon} />
                </AnimatedButton>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Feather name="search" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search invoices..."
                    placeholderTextColor={COLORS.searchPlaceholder}
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    clearButtonMode="while-editing"
                />
            </View>

            <FlatList
                data={filteredInvoices}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <InvoiceListItem
                        invoice={item}
                        navigation={navigation}
                        onDelete={handleDeleteInvoice}
                        onRename={handleRenameInvoice}
                    />
                )}
                contentContainerStyle={styles.savedScansListContent}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyStateText}>
                            {searchQuery ? 'No matching invoices found' : 'No saved invoices yet'}
                        </Text>
                    </View>
                }
            />
        </View>
    );
};

export default SavedScansScreen;

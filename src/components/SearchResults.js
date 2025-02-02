import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles, { SPACING } from '../screens/styles';

const SearchResults = ({ filteredInvoices, navigation, searchQuery, width }) => {
    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.landingHeaderText}>
                {searchQuery
                    ? `Search Results (${filteredInvoices.length})`
                    : 'Type to find an invoice...'}
            </Text>

            {searchQuery === '' ? (
                <Text style={styles.searchResultsText}>
                    Start typing to find invoices.
                </Text>
            ) : filteredInvoices.length > 0 ? (
                <FlatList
                    data={filteredInvoices}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.listItemContainer,
                                { width: width - (SPACING.lg * 2) },
                            ]}
                            onPress={() => navigation.navigate('InvoiceDetail', { invoice: item })}
                        >
                            <View style={{ flex: 1 }}>
                                <Text style={styles.listItemTitle} numberOfLines={1}>
                                    {item.title || 'Untitled Invoice'}
                                </Text>
                                <Text style={styles.listItemDate} numberOfLines={1}>
                                    {item.data?.recipientName || 'No recipient'} •{' '}
                                    {new Date(item.timestamp).toLocaleDateString()}
                                </Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.searchResultsContainer}
                    ItemSeparatorComponent={() => <View style={{ height: SPACING.sm }} />}
                    scrollEnabled={false}
                />
            ) : (
                <Text style={styles.searchResultsText}>
                    No invoices found matching "{searchQuery}"
                </Text>
            )}
        </View>
    );
};

export default SearchResults; 
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles, { COLORS, SPACING } from './styles';
import { loadInvoices } from '../utils/storage';
import SearchResults from '../components/SearchResults';
import RecentScans from '../components/RecentScans';
import AnimatedButton from '../components/AnimatedButton';

const LandingScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchMode, setIsSearchMode] = useState(false);
    const [allInvoices, setAllInvoices] = useState([]);
    const [totalInvoices, setTotalInvoices] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const width = Dimensions.get('window').width;

    // Load invoices when the screen is focused
    useEffect(() => {
        const loadData = async () => {
            const savedInvoices = await loadInvoices();
            setAllInvoices(savedInvoices);
            setTotalInvoices(savedInvoices.length);
        };
        const unsubscribe = navigation.addListener('focus', loadData);
        return unsubscribe;
    }, [navigation]);

    // Filter invoices based on search query (limit to 10 results)
    const filteredInvoices = allInvoices
        .filter((invoice) => {
            const searchLower = searchQuery.toLowerCase();
            return (
                invoice.title?.toLowerCase().includes(searchLower) ||
                invoice.data?.iban?.toLowerCase().includes(searchLower) ||
                invoice.data?.recipientName?.toLowerCase().includes(searchLower) ||
                invoice.data?.reference?.toLowerCase().includes(searchLower) ||
                invoice.data?.invoiceValue?.toLowerCase().includes(searchLower)
            );
        })
        .slice(0, 10);

    const handleFocus = () => setIsSearchMode(true);
    const handleBlur = () => {
        if (searchQuery === '') setIsSearchMode(false);
    };
    const clearSearch = () => {
        setSearchQuery('');
        setIsSearchMode(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 180 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.landingContainer}>
                        {/* Logo */}
                        <Image
                            source={require('../../assets/Logo.png')}
                            style={styles.landingLogo}
                        />

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
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            {searchQuery !== '' && (
                                <AnimatedButton onPress={clearSearch} style={{ marginLeft: SPACING.sm }}>
                                    <Feather name="x-circle" size={24} color={COLORS.secondaryText} />
                                </AnimatedButton>
                            )}
                        </View>

                        {/* Conditional Rendering: Search Results vs. Recent Scans */}
                        {isSearchMode ? (
                            <SearchResults
                                filteredInvoices={filteredInvoices}
                                navigation={navigation}
                                searchQuery={searchQuery}
                                width={width}
                            />
                        ) : (
                            <RecentScans
                                allInvoices={allInvoices}
                                navigation={navigation}
                                width={width}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                            />
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Footer Buttons */}
            {!isSearchMode && (
                <View style={styles.footerContainer}>
                    {/* My Invoices Button */}
                    <AnimatedButton
                        style={[styles.footerBlock, styles.footerBlockLeft]}
                        onPress={() => navigation.navigate('SavedScans')}
                        scaleTo={0.95}
                    >
                        <Text style={[styles.footerBlockText, styles.footerBlockTextLeft]}>
                            My Invoices
                        </Text>
                        <Text style={styles.footerBlockNumber}>
                            {totalInvoices}
                        </Text>
                    </AnimatedButton>

                    {/* New Scan Button */}
                    <AnimatedButton
                        style={[styles.footerBlock, styles.footerBlockRight]}
                        onPress={() => navigation.navigate('Scan')}
                        scaleTo={0.95}
                    >
                        <Text style={[styles.footerBlockText, styles.footerBlockTextRight]}>
                            Start Scan
                        </Text>
                        <Feather
                            name="camera"
                            style={styles.footerBlockIcon}
                        />
                    </AnimatedButton>
                </View>
            )}
        </View>
    );
};

export default LandingScreen;

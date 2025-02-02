import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import InvoiceCarouselCard from './InvoiceCarouselCard';
import styles from '../screens/styles';

const RecentScans = ({ allInvoices, navigation, width, currentIndex, setCurrentIndex }) => {
    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.landingHeaderText}>Recent Scans</Text>

            {allInvoices.length > 0 ? (
                <View style={styles.carouselSection}>
                    <View style={styles.carouselContainer}>
                        <Carousel
                            loop
                            width={width}
                            height={260}
                            autoPlay
                            autoPlayInterval={2000}
                            data={allInvoices.slice(0, 5)}
                            scrollAnimationDuration={750}
                            // Using "stack" mode to achieve a slick animated effect
                            mode="stack"
                            modeConfig={{
                                // Number of cards visible in the stack
                                numberOfCards: 3,
                                // The vertical offset between stacked cards
                                stackInterval: 18,
                            }}
                            onSnapToItem={(slideIndex) => setCurrentIndex(slideIndex)}
                            renderItem={({ item }) => (
                                // The inner wrapper with padding adjusts each item's horizontal spacing.
                                <View style={{ paddingHorizontal: 17 }}>
                                    <InvoiceCarouselCard invoice={item} navigation={navigation} />
                                </View>
                            )}
                            defaultIndex={0}
                        />
                    </View>
                    <View style={styles.customPaginationContainer}>
                        {allInvoices.slice(0, 5).map((_, index) => {
                            const isActive = index === currentIndex;
                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.customDot,
                                        isActive && styles.customDotActive,
                                    ]}
                                />
                            );
                        })}
                    </View>
                </View>
            ) : (
                <Text style={styles.searchResultsText}>No invoices available yet.</Text>
            )}
        </View>
    );
};

export default RecentScans;

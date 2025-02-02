import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
    TextInput,
    Image,
    Share,
    Alert
} from 'react-native';
import styles from './styles';
import InvoiceDataDisplay from '../components/InvoiceDataDisplay';
import { saveInvoice, deleteInvoice } from '../utils/storage';
import { Feather } from '@expo/vector-icons';
import ContextMenu from '../components/ContextMenu';

const InvoiceDetailScreen = ({ route, navigation }) => {
    const { invoice: initialInvoice } = route.params;
    const [invoice, setInvoice] = useState(initialInvoice);
    const [showMenu, setShowMenu] = useState(false);
    const [showRenameModal, setShowRenameModal] = useState(false);
    const [newTitle, setNewTitle] = useState(invoice.title);

    const handleEditTitle = async () => {
        const updatedInvoice = { ...invoice, title: newTitle };
        await saveInvoice(updatedInvoice);
        setInvoice(updatedInvoice);
        setShowRenameModal(false);
    };

    const handleDelete = async () => {
        await deleteInvoice(invoice.id);
        navigation.navigate('SavedScans');
    };

    const handleShare = async () => {
        try {
            const formattedDate = new Date(invoice.timestamp).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            const shareContent = {
                title: 'Invoice Details',
                message: `Invoice Details

Title: ${invoice.title || 'Untitled Invoice'}
IBAN: ${invoice.data?.iban || 'N/A'}
Recipient: ${invoice.data?.recipientName || 'N/A'}
Reference: ${invoice.data?.reference || 'N/A'}
Value: ${invoice.data?.invoiceValue || 'N/A'}
Date: ${formattedDate}

Shared via Bills Paid`,
                url: invoice.image || '',
                subject: 'Invoice Details from Bills Paid'
            };

            const result = await Share.share(shareContent);

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared with', result.activityType);
                } else {
                    console.log('Shared successfully');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Sharing dismissed');
            }
        } catch (error) {
            Alert.alert('Error', 'Sharing failed. Please try again.');
            console.error('Sharing error:', error);
        }
        setShowMenu(false);
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
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Row */}
                <View style={styles.headerRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.headerText}>{invoice.title}</Text>
                    </View>

                    {/* Context Menu Button */}
                    <TouchableOpacity
                        style={styles.contextMenuButton}
                        onPress={() => setShowMenu(true)}
                    >
                        <Feather name="more-vertical" size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                <InvoiceDataDisplay invoiceData={invoice.data} />

                <Text style={[styles.listItemDate, { marginTop: 10, alignSelf: 'flex-end' }]}>
                    Saved: {new Date(invoice.timestamp).toLocaleDateString()} at{' '}
                    {new Date(invoice.timestamp).toLocaleTimeString()}
                </Text>

                <ContextMenu
                    isVisible={showMenu}
                    onClose={() => setShowMenu(false)}
                    onRename={() => setShowRenameModal(true)}
                    onShare={handleShare}
                    onDelete={handleDelete}
                />

                {/* Rename Modal */}
                <Modal
                    visible={showRenameModal}
                    transparent={true}
                    animationType="slide"
                >
                    <View style={styles.renameModalContainer}>
                        <View style={styles.renameModalContent}>
                            <Text style={styles.renameModalTitle}>Rename Invoice</Text>
                            <TextInput
                                style={styles.renameInput}
                                value={newTitle}
                                onChangeText={setNewTitle}
                                autoFocus={true}
                            />
                            <View style={styles.renameButtonContainer}>
                                <TouchableOpacity
                                    style={styles.renameCancelButton}
                                    onPress={() => setShowRenameModal(false)}
                                >
                                    <Text style={styles.renameButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.renameConfirmButton}
                                    onPress={handleEditTitle}
                                >
                                    <Text style={styles.renameButtonTextSave}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};

export default InvoiceDetailScreen;

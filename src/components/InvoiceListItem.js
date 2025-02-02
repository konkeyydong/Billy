import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Share, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../screens/styles';
import ContextMenu from './ContextMenu';

const InvoiceListItem = ({ invoice, navigation, onDelete, onRename }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showRenameModal, setShowRenameModal] = useState(false);
    const [newTitle, setNewTitle] = useState(invoice.title);

    const handleRename = () => {
        onRename(invoice.id, newTitle);
        setShowRenameModal(false);
        setShowMenu(false);
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
                    // Shared with activity type
                    console.log('Shared with', result.activityType);
                } else {
                    // Shared
                    console.log('Shared successfully');
                }
            } else if (result.action === Share.dismissedAction) {
                // Dismissed
                console.log('Sharing dismissed');
            }
        } catch (error) {
            Alert.alert('Error', 'Sharing failed. Please try again.');
            console.error('Sharing error:', error);
        }
        setShowMenu(false);
    };

    return (
        <TouchableOpacity
            style={styles.listItemContainer}
            onPress={() => navigation.navigate('InvoiceDetail', { invoice })}
        >
            {/* Text Details */}
            <View style={{ flex: 1 }}>
                <Text style={styles.listItemTitle}>
                    {invoice.title || 'Untitled Invoice'}
                </Text>
                <Text style={styles.listItemDate}>
                    {new Date(invoice.timestamp).toLocaleDateString()} •{' '}
                    {new Date(invoice.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </Text>
            </View>

            {/* Context Menu */}
            <TouchableOpacity
                style={styles.contextMenuButton}
                onPress={() => setShowMenu(true)}
            >
                <Feather name="more-vertical" size={24} color="#666" />
            </TouchableOpacity>

            <ContextMenu
                isVisible={showMenu}
                onClose={() => setShowMenu(false)}
                onRename={() => setShowRenameModal(true)}
                onShare={handleShare}
                onDelete={() => onDelete(invoice.id)}
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
                                onPress={handleRename}
                            >
                                <Text style={styles.renameButtonTextSave}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    );
};

export default InvoiceListItem;

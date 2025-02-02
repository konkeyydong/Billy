import React from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../screens/styles';
import AnimatedButton from './AnimatedButton';

const ContextMenu = ({
    isVisible,
    onClose,
    onRename,
    onShare,
    onDelete,
    deleteLabel = "Delete",
    renameLabel = "Rename",
    shareLabel = "Share"
}) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.uploadModalOverlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={e => e.stopPropagation()}
                >
                    <View style={styles.uploadOptionsContainer}>
                        <Text style={styles.uploadOptionsTitle}>
                            Invoice Options
                        </Text>

                        <AnimatedButton
                            style={styles.uploadOptionButton}
                            onPress={() => {
                                onRename?.();
                                onClose();
                            }}
                        >
                            <Feather name="edit" style={styles.uploadOptionIcon} />
                            <Text style={styles.uploadOptionText}>{renameLabel}</Text>
                        </AnimatedButton>

                        <AnimatedButton
                            style={styles.uploadOptionButton}
                            onPress={() => {
                                onShare?.();
                                onClose();
                            }}
                        >
                            <Feather name="share" style={styles.uploadOptionIcon} />
                            <Text style={styles.uploadOptionText}>{shareLabel}</Text>
                        </AnimatedButton>

                        <View style={styles.uploadOptionsDivider} />

                        <AnimatedButton
                            style={[styles.uploadOptionButton, styles.deleteButton]}
                            onPress={() => {
                                onDelete?.();
                                onClose();
                            }}
                        >
                            <Feather name="trash-2" style={[styles.uploadOptionIcon, styles.deleteIcon]} />
                            <Text style={[styles.uploadOptionText, styles.deleteText]}>{deleteLabel}</Text>
                        </AnimatedButton>

                        <View style={styles.uploadOptionsDivider} />

                        <AnimatedButton
                            style={styles.uploadOptionsCancelButton}
                            onPress={onClose}
                        >
                            <Text style={styles.uploadOptionsCancelText}>Cancel</Text>
                        </AnimatedButton>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ContextMenu; 
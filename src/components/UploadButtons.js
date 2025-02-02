import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../screens/styles';
import AnimatedButton from './AnimatedButton';

const UploadButtons = ({ showModal, onClose, onGalleryPress, onCameraPress }) => {
    return (
        <Modal
            transparent={true}
            visible={showModal}
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
                            Scan Invoice
                        </Text>

                        <AnimatedButton
                            style={styles.uploadOptionButton}
                            onPress={() => {
                                onGalleryPress();
                                onClose();
                            }}
                        >
                            <Feather name="image" style={styles.uploadOptionIcon} />
                            <Text style={styles.uploadOptionText}>Choose from Gallery</Text>
                        </AnimatedButton>

                        <AnimatedButton
                            style={styles.uploadOptionButton}
                            onPress={() => {
                                onCameraPress();
                                onClose();
                            }}
                        >
                            <Feather name="camera" style={styles.uploadOptionIcon} />
                            <Text style={styles.uploadOptionText}>Take a Picture</Text>
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

export default UploadButtons; 
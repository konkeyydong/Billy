import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../screens/styles';

const ImagePreview = ({ image, onEmptyPress }) => {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const handlePress = () => {
        if (image) {
            setIsImageEnlarged(true);
        } else {
            onEmptyPress();
        }
    };

    return (
        <>
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.7}
            >
                <View style={styles.imagePreviewContainer}>
                    {image ? (
                        <Image
                            source={{ uri: image }}
                            style={styles.imagePreview}
                            resizeMode="contain"
                        />
                    ) : (
                        <View style={styles.imagePreviewPlaceholder}>
                            <Feather name="image" style={styles.imagePreviewIcon} />
                            <Text style={styles.imagePreviewText}>
                                Upload an image or take a picture
                            </Text>
                            <Text style={styles.imagePreviewSubText}>
                                Tap to scan your invoice
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>

            <Modal
                visible={isImageEnlarged}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsImageEnlarged(false)}
            >
                <View style={styles.enlargedImageContainer}>
                    <Image
                        source={{ uri: image }}
                        style={styles.enlargedImage}
                        resizeMode="contain"
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setIsImageEnlarged(false)}
                    >
                        <Feather name="x" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

export default ImagePreview; 
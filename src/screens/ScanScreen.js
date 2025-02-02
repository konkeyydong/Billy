import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Alert, Image, SafeAreaView, Modal, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import * as MediaLibrary from 'expo-media-library';
import ImagePickerHandler from '../components/ImagePickerHandler';
import InvoiceDataDisplay from '../components/InvoiceDataDisplay';
import ImagePreview from '../components/ImagePreview';
import UploadButtons from '../components/UploadButtons';
import { saveInvoice, clearLastScan } from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScanScreen = ({ navigation, route }) => {
    const [image, setImage] = useState(null);
    const [invoiceData, setInvoiceData] = useState({});
    const [loading, setLoading] = useState(false);
    const [base64Image, setBase64Image] = useState(null);
    const [saveButtonState, setSaveButtonState] = useState('Save Invoice');
    const [invoiceTitle, setInvoiceTitle] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [showUploadOptions, setShowUploadOptions] = useState(false);

    useEffect(() => {
        (async () => {
            const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();

            if (libraryStatus.status !== 'granted' || cameraStatus.status !== 'granted') {
                Alert.alert("Permissions Required", "Both photo library and camera permissions are needed to use this app.");
            }
        })();
    }, []);

    useEffect(() => {
        const loadPersistedData = async () => {
            const savedData = await AsyncStorage.getItem('lastScan');
            if (savedData) {
                const { image, invoiceData } = JSON.parse(savedData);
                setImage(image);
                setInvoiceData(invoiceData);
            }
        };
        loadPersistedData();
    }, []);

    useEffect(() => {
        const saveData = async () => {
            if (Object.keys(invoiceData).length > 0) {
                await AsyncStorage.setItem('lastScan', JSON.stringify({
                    image,
                    invoiceData
                }));
            }
        };
        const unsubscribe = navigation.addListener('blur', saveData);
        return unsubscribe;
    }, [navigation, invoiceData, image]);

    useEffect(() => {
        if (route.params?.existingData) {
            setInvoiceData(route.params.existingData.data || {});
        }
    }, [route.params]);

    useEffect(() => {
        if (invoiceData?.recipientName) {
            setInvoiceTitle(invoiceData.recipientName);
        }
    }, [invoiceData?.recipientName]);

    const { pickImage, takePicture } = ImagePickerHandler({ setImage, setInvoiceData, setLoading });

    const handleImageResult = (result) => {
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
            setBase64Image(result.assets[0].base64);
            processImage(result.assets[0].base64);
        }
    };

    const handleSave = async () => {
        if (Object.keys(invoiceData).length === 0) return;

        setSaveButtonState('Saving...');
        const title = invoiceTitle || 'Untitled Invoice';
        const savedInvoice = {
            title,
            image: base64Image,
            data: invoiceData,
            timestamp: Date.now(),
        };
        console.log("Saving invoice with image data:", !!base64Image);
        const id = await saveInvoice(savedInvoice);
        if (id) {
            setSaveButtonState('Saved!');
            setTimeout(() => {
                setSaveButtonState('Save Invoice');
            }, 1500);
        } else {
            setSaveButtonState('Save Failed');
            setTimeout(() => {
                setSaveButtonState('Save Invoice');
            }, 1500);
        }
    };

    const handleImageContainerPress = () => {
        setShowUploadOptions(true);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
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

                {Object.keys(invoiceData).length > 0 && (
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText} numberOfLines={1}>
                            {invoiceTitle || "Untitled Invoice"}
                        </Text>
                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => setIsEditingTitle(true)}
                        >
                            <Feather name="edit" size={24} color="#666" />
                        </TouchableOpacity>
                    </View>
                )}

                <ImagePreview
                    image={image}
                    onEmptyPress={handleImageContainerPress}
                />

                {loading && <ActivityIndicator size="large" color="#64b5f6" style={styles.activityIndicator} />}

                <InvoiceDataDisplay invoiceData={invoiceData} />

                {Object.keys(invoiceData).length > 0 && (
                    <TouchableOpacity
                        style={[styles.saveButton, { marginBottom: 24 }]}
                        onPress={handleSave}
                    >
                        <Feather name={saveButtonState === 'Saved!' ? "check-circle" : "save"} style={styles.saveButtonIcon} />
                        <Text style={styles.saveButtonText}>{saveButtonState}</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    style={styles.nextScanButton}
                    onPress={() => setShowUploadOptions(true)}
                >
                    <Feather name="plus" style={styles.nextScanIcon} />
                    <Text style={styles.nextScanText}>Next Scan</Text>
                </TouchableOpacity>

                <UploadButtons
                    showModal={showUploadOptions}
                    onClose={() => setShowUploadOptions(false)}
                    onGalleryPress={pickImage}
                    onCameraPress={takePicture}
                />

                {isEditingTitle && (
                    <Modal
                        transparent={true}
                        visible={isEditingTitle}
                        onRequestClose={() => setIsEditingTitle(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.titleModal}>
                                <Text style={styles.modalTitle}>Edit Invoice Title</Text>
                                <TextInput
                                    style={styles.titleInput}
                                    value={invoiceTitle}
                                    onChangeText={setInvoiceTitle}
                                    autoFocus={true}
                                />
                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={() => setIsEditingTitle(false)}
                                >
                                    <Text style={styles.modalButtonText}>Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                )}
            </View>
        </SafeAreaView>
    );
};

export default ScanScreen; 
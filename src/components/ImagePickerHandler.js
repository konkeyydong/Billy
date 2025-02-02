import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { sendImageToBackend } from '../api';
import styles from '../screens/styles';

const ImagePickerHandler = ({ setImage, setInvoiceData, setLoading }) => {

    const handleImageResult = async (result) => {
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
            processImage(result.assets[0].base64);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true,
        });

        handleImageResult(result);
    };

    const takePicture = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true,
        });

        handleImageResult(result);
    };


    const processImage = async (base64) => {
        setLoading(true);
        setInvoiceData({});

        try {
            const response = await sendImageToBackend(base64);
            console.log("Full Backend Response:", response);

            if (response.invoiceData) {
                setInvoiceData(response.invoiceData);
            } else {
                console.error("Invoice data is missing from response.");
            }
        } catch (error) {
            console.error("Error processing image:", error);
            Alert.alert("Error", "Failed to extract text. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { pickImage, takePicture };
};

export default ImagePickerHandler; 
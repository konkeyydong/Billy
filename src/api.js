import axios from "axios";

// Update this with your actual Firebase function URL
const API_URL = "https://extracttextfromimage-mx74pwzrha-uc.a.run.app"; // For Emulator
// OR
// const API_URL = "https://YOUR_REGION-YOUR_PROJECT_ID.cloudfunctions.net/extractTextFromImage"; // For deployed function

/**
 * Sends a Base64 image to the Firebase backend for processing.
 *
 * @param {string} imageBase64 - The Base64 string of the image to be processed.
 * @returns {Promise<object>} - The response from the backend (extracted text).
 */
export const sendImageToBackend = async (imageBase64) => {
  try {
    const response = await axios.post(API_URL, {
      imageBase64, // Sending image data in the request body
    });
    return response.data; // Extracted text from the backend
  } catch (error) {
    console.error("Error sending image:", error);
    throw error; // Rethrow the error to handle it in the UI
  }
};

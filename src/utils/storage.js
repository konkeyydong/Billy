import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveInvoice = async (invoice) => {
    try {
        await clearLastScan();
        const id = invoice.id || Date.now().toString();
        const updatedInvoice = {
            id,
            title: invoice.title,
            data: invoice.data,
            timestamp: invoice.timestamp
        };
        await AsyncStorage.setItem(id, JSON.stringify(updatedInvoice));
        return id;
    } catch (error) {
        console.error('Error saving invoice:', error);
        return null;
    }
};

export const loadInvoices = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const invoiceKeys = keys.filter(key => key !== 'lastScan');
        const invoices = await AsyncStorage.multiGet(invoiceKeys);
        return invoices.map(([id, value]) => {
            try {
                return { id, ...JSON.parse(value) };
            } catch (e) {
                console.error('Error parsing invoice:', id, value);
                return null;
            }
        }).filter(Boolean).sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
        console.error('Error loading invoices:', error);
        return [];
    }
};

export const deleteInvoice = async (id) => {
    try {
        await AsyncStorage.removeItem(id);
        return true;
    } catch (error) {
        console.error('Error deleting invoice:', error);
        return false;
    }
};

export const clearLastScan = async () => {
    await AsyncStorage.removeItem('lastScan');
}; 
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export const exportToCSV = async (invoices) => {
    try {
        // Request permissions first
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
            throw new Error('Need storage permission to export files');
        }

        // Create CSV header
        const csvHeader = 'Title,IBAN,Recipient,Reference,Value,Date\n';

        // Create CSV content from invoices
        const csvContent = invoices.map(invoice => {
            const date = new Date(invoice.timestamp).toLocaleString();
            // Escape any quotes in the text fields to prevent CSV formatting issues
            const escapeField = (field) => {
                if (!field) return '';
                return `"${field.replace(/"/g, '""')}"`;
            };

            return [
                escapeField(invoice.title || 'Untitled'),
                escapeField(invoice.data?.iban),
                escapeField(invoice.data?.recipientName),
                escapeField(invoice.data?.reference),
                escapeField(invoice.data?.invoiceValue),
                escapeField(date)
            ].join(',');
        }).join('\n');

        // Combine header and content
        const fullContent = csvHeader + csvContent;

        // Generate filename with current date
        const fileName = `invoices_${new Date().toISOString().split('T')[0]}.csv`;

        // Use cache directory instead of document directory
        const filePath = `${FileSystem.cacheDirectory}${fileName}`;

        // Write file
        await FileSystem.writeAsStringAsync(filePath, fullContent, {
            encoding: FileSystem.EncodingType.UTF8
        });

        // Share file
        const result = await Sharing.shareAsync(filePath, {
            mimeType: 'text/csv',
            dialogTitle: 'Export Invoices',
            UTI: 'public.comma-separated-values-text'
        }).catch(error => {
            console.error('Sharing error:', error);
            throw error;
        });

        // Clean up: delete the temporary file after a short delay
        setTimeout(async () => {
            try {
                await FileSystem.deleteAsync(filePath, { idempotent: true });
            } catch (error) {
                console.log('Cleanup error:', error);
            }
        }, 1000);

        return result;

    } catch (error) {
        console.error('Error exporting to CSV:', error);
        throw error;
    }
}; 
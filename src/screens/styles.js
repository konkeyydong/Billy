import { StyleSheet, Dimensions, Platform } from 'react-native';

// Spacing scale
export const SPACING = {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
};

// Font families (ensure these fonts are loaded in your project)
const FONT_FAMILY_REGULAR = 'Inter_400Regular';
const FONT_FAMILY_MEDIUM = 'Inter_500Medium';
const FONT_FAMILY_SEMIBOLD = 'Inter_600SemiBold';
const FONT_FAMILY_BOLD = 'Inter_700Bold';

// Color palette
export const COLORS = {
    primary: '#335f84',
    primaryText: '#1F2937',
    secondaryText: '#4B5563',
    accent: '#F59E0B',
    background: '#F3F4F6',
    card: '#FFFFFF',
    border: '#E5E7EB',
    shadow: 'rgba(0, 0, 0, 0.1)',
    headerBackground: '#FFFFFF',
    statsBackground: '#FFFFFF',
    searchBackground: '#FFFFFF',
    searchText: '#1F2937',
    searchPlaceholder: '#9CA3AF',
};

const screenWidth = Dimensions.get('window').width;
const baseFontSize = 16;

export default StyleSheet.create({
    /////////////////////////////////////////////////////////////////////////////
    // MAIN CONTAINERS
    /////////////////////////////////////////////////////////////////////////////
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: SPACING.lg,
    },
    landingContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: SPACING.lg,
        alignItems: 'center',
        paddingTop: SPACING.xl,
    },

    /////////////////////////////////////////////////////////////////////////////
    // HEADERS / TITLES
    /////////////////////////////////////////////////////////////////////////////
    headerText: {
        fontSize: 26,
        fontFamily: FONT_FAMILY_BOLD,
        marginVertical: SPACING.lg,
        textAlign: 'center',
        color: COLORS.primaryText,
    },
    landingHeaderText: {
        fontSize: 28,
        fontFamily: FONT_FAMILY_BOLD,
        marginVertical: SPACING.lg,
        textAlign: 'center',
        color: COLORS.primaryText,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary,
        paddingBottom: SPACING.sm,
        alignSelf: 'center',
        paddingHorizontal: SPACING.xl,
    },

    /////////////////////////////////////////////////////////////////////////////
    // LOGO
    /////////////////////////////////////////////////////////////////////////////
    logoHeader: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: SPACING.md,
        marginLeft: -SPACING.xl
    },
    landingLogo: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        marginTop: SPACING.sm,
        marginBottom: -SPACING.xxl,
    },

    /////////////////////////////////////////////////////////////////////////////
    // HOME BUTTON
    /////////////////////////////////////////////////////////////////////////////
    homeButton: {
        padding: SPACING.sm,
        alignSelf: 'flex-start',
        marginBottom: -SPACING.xxl,
        marginTop: SPACING.md
    },

    /////////////////////////////////////////////////////////////////////////////
    // UPLOAD BUTTONS
    /////////////////////////////////////////////////////////////////////////////
    uploadButton: {
        backgroundColor: COLORS.card,
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.lg,
        borderRadius: 20,
        marginBottom: SPACING.md,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
        width: '100%',
    },
    uploadButtonText: {
        color: COLORS.primaryText,
        fontSize: baseFontSize,
        marginLeft: SPACING.sm,
        fontFamily: FONT_FAMILY_MEDIUM,
        textAlign: 'center',
    },
    uploadButtonIcon: {
        color: COLORS.primary,
        fontSize: 22,
    },

    /////////////////////////////////////////////////////////////////////////////
    // IMAGE PREVIEW
    /////////////////////////////////////////////////////////////////////////////
    imagePreviewContainer: {
        width: '100%',
        height: 250,
        backgroundColor: COLORS.card,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: SPACING.xl,
        padding: SPACING.sm,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    imagePreview: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
    imagePreviewPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        padding: SPACING.lg,
    },
    imagePreviewIcon: {
        fontSize: 48,
        color: COLORS.searchPlaceholder,
        marginBottom: SPACING.md,
    },
    imagePreviewText: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_MEDIUM,
        color: COLORS.secondaryText,
        textAlign: 'center',
        marginBottom: SPACING.xs,
    },
    imagePreviewSubText: {
        fontSize: baseFontSize - 2,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.searchPlaceholder,
        textAlign: 'center',
    },
    enlargedImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
    },
    enlargedImage: {
        width: screenWidth - 40,
        height: 500,
        resizeMode: 'contain',
    },
    closeButton: {
        position: 'absolute',
        top: SPACING.xl,
        right: SPACING.lg,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: SPACING.sm,
        borderRadius: 8,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_REGULAR,
    },

    /////////////////////////////////////////////////////////////////////////////
    // DATA DISPLAY (INVOICE FIELDS)
    /////////////////////////////////////////////////////////////////////////////
    dataContainer: {
        width: '100%',
        padding: SPACING.lg,
        backgroundColor: COLORS.card,
        borderRadius: 20,
        marginBottom: 0,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 4,
        alignSelf: 'stretch',
    },
    dataRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.md,
    },
    dataIconContainer: {
        backgroundColor: '#E5E7EB',
        borderRadius: 24,
        padding: SPACING.sm,
        marginRight: SPACING.sm,
    },
    dataIcon: {
        fontSize: 20,
        color: COLORS.primary,
    },
    dataLabel: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        marginRight: SPACING.xs,
        color: COLORS.primaryText,
    },
    detailDataLabel: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        marginRight: SPACING.sm,
        color: COLORS.primaryText,
    },
    dataValue: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
        flexWrap: 'wrap',
    },
    detailDataValue: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
    },

    // COPY BUTTON
    copyButton: {
        padding: SPACING.sm,
        borderRadius: 8,
        backgroundColor: '#E5E7EB',
        marginLeft: SPACING.sm,
    },
    copyButtonIcon: {
        fontSize: 14,
        color: COLORS.secondaryText,
    },

    /////////////////////////////////////////////////////////////////////////////
    // MODAL STYLES
    /////////////////////////////////////////////////////////////////////////////
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: COLORS.card,
        padding: SPACING.lg,
        borderRadius: 20,
        width: '80%',
    },
    modalTitle: {
        fontSize: 22,
        fontFamily: FONT_FAMILY_BOLD,
        marginBottom: SPACING.md,
        textAlign: 'center',
        color: COLORS.primaryText,
    },
    titleInput: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.primaryText,
        backgroundColor: COLORS.card,
    },
    modalButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.md,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontFamily: FONT_FAMILY_BOLD,
    },

    /////////////////////////////////////////////////////////////////////////////
    // SAVE BUTTON
    /////////////////////////////////////////////////////////////////////////////
    saveButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.md,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SPACING.sm,
        minWidth: 200,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    saveButtonIcon: {
        color: '#fff',
        fontSize: 22,
        marginRight: SPACING.sm,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_BOLD,
    },

    /////////////////////////////////////////////////////////////////////////////
    // EMPTY STATES
    /////////////////////////////////////////////////////////////////////////////
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    emptyStateText: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
        marginTop: SPACING.md,
    },

    /////////////////////////////////////////////////////////////////////////////
    // COMPACT DATA DISPLAY
    /////////////////////////////////////////////////////////////////////////////
    compactContainer: {
        width: '100%',
        padding: SPACING.md,
    },
    compactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.xs,
    },
    compactLabel: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: COLORS.primaryText,
    },
    compactValue: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
        maxWidth: '60%',
    },

    /////////////////////////////////////////////////////////////////////////////
    // SAVED SCANS LIST
    /////////////////////////////////////////////////////////////////////////////
    listItemContainer: {
        width: '100%',
        maxWidth: '100%',
        marginHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.card,
        padding: SPACING.md,
        borderRadius: 20,
        marginBottom: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
        paddingVertical: SPACING.md,
    },
    listItemTitle: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_BOLD,
        color: COLORS.primaryText,
        marginBottom: SPACING.xs,
    },
    listItemDate: {
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
    },
    listItemDeleteButton: {
        padding: SPACING.sm,
    },
    savedScansListContent: {
        paddingBottom: SPACING.xl,
        alignItems: 'center',
    },

    /////////////////////////////////////////////////////////////////////////////
    // RESET SCAN BUTTON
    /////////////////////////////////////////////////////////////////////////////
    resetButton: {
        backgroundColor: '#FFEBEE',
        padding: SPACING.md,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: SPACING.lg,
        borderWidth: 1,
        borderColor: '#D32F2F',
    },
    resetButtonText: {
        color: '#D32F2F',
        fontSize: 16,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        marginLeft: SPACING.sm,
    },
    resetButtonIcon: {
        color: '#D32F2F',
        fontSize: 22,
    },

    /////////////////////////////////////////////////////////////////////////////
    // PLACEHOLDER TEXT
    /////////////////////////////////////////////////////////////////////////////
    placeholderText: {
        color: COLORS.searchPlaceholder,
        fontStyle: 'italic',
        fontSize: baseFontSize - 1,
    },

    /////////////////////////////////////////////////////////////////////////////
    // HEADER CONTAINER (CUSTOM HEADER)
    /////////////////////////////////////////////////////////////////////////////
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.sm,
        backgroundColor: COLORS.headerBackground,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        paddingTop: SPACING.xl,
    },
    headerActionIcon: {
        fontSize: 26,
        color: COLORS.secondaryText,
        marginHorizontal: SPACING.sm,
    },
    headerDeleteIcon: {
        fontSize: 26,
        color: '#E74C3C',
        marginHorizontal: SPACING.sm,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SPACING.md,
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
    },
    actionButton: {
        padding: SPACING.xs,
        borderRadius: 8,
        backgroundColor: '#F3F4F6',
    },

    /////////////////////////////////////////////////////////////////////////////
    // CUSTOM PAGINATION DOTS
    /////////////////////////////////////////////////////////////////////////////
    customPaginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -SPACING.md,
        marginBottom: SPACING.lg,
    },
    customDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.border,
        marginHorizontal: SPACING.xs,
    },
    customDotActive: {
        backgroundColor: COLORS.primary,
        width: 10,
        height: 10,
        borderRadius: 5,
    },

    /////////////////////////////////////////////////////////////////////////////
    // CAROUSEL & PAGINATION
    /////////////////////////////////////////////////////////////////////////////
    carouselSection: {
        width: '100%',
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    carouselContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 0,
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.md,
    },
    carouselItem: {
        width: screenWidth * 0.85,
        backgroundColor: COLORS.card,
        borderRadius: 20,
        padding: SPACING.lg,
        height: 240,
        justifyContent: 'center',
        marginHorizontal: SPACING.md,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    carouselContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    carouselTitle: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: COLORS.primaryText,
        marginBottom: SPACING.sm,
    },
    carouselText: {
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
        marginLeft: SPACING.sm,
    },
    carouselDataRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.sm,
    },
    carouselDate: {
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        marginTop: SPACING.sm,
    },
    carouselDataContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    /////////////////////////////////////////////////////////////////////////////
    // FOOTER BUTTONS
    /////////////////////////////////////////////////////////////////////////////
    footerContainer: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 30 : 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        gap: SPACING.md,
        marginBottom: 40,
    },
    footerBlock: {
        flex: 1,
        backgroundColor: COLORS.card,
        borderRadius: 24,
        paddingVertical: SPACING.lg,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    footerBlockLeft: {
        backgroundColor: COLORS.primary,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        marginRight: SPACING.sm / 2,
    },
    footerBlockRight: {
        backgroundColor: '#fff',
        borderColor: COLORS.primary,
    },
    footerBlockText: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        marginBottom: 4,
    },
    footerBlockTextLeft: {
        color: '#fff',
    },
    footerBlockTextRight: {
        color: COLORS.primary,
    },
    footerBlockNumber: {
        fontSize: 20,
        fontFamily: FONT_FAMILY_BOLD,
        color: '#fff',
    },
    footerBlockIcon: {
        fontSize: 24,
        color: COLORS.primary,
    },

    /////////////////////////////////////////////////////////////////////////////
    // TITLE CONTAINER
    /////////////////////////////////////////////////////////////////////////////
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.md,
        paddingHorizontal: SPACING.md,
        position: 'relative',
    },
    titleText: {
        fontSize: 22,
        fontFamily: FONT_FAMILY_BOLD,
        color: COLORS.primaryText,
        textAlign: 'center',
        marginRight: SPACING.sm,
    },
    editButton: {
        position: 'absolute',
        right: 0,
        padding: SPACING.xs,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    titleModal: {
        backgroundColor: COLORS.card,
        padding: SPACING.lg,
        borderRadius: 20,
        width: '80%',
    },

    /////////////////////////////////////////////////////////////////////////////
    // NEXT SCAN BUTTON
    /////////////////////////////////////////////////////////////////////////////
    nextScanButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.md,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SPACING.sm,
        width: '100%',
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    nextScanIcon: {
        color: '#fff',
        fontSize: 26,
        marginRight: SPACING.sm,
    },
    nextScanText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
    },

    /////////////////////////////////////////////////////////////////////////////
    // UPLOAD OPTIONS MODAL
    /////////////////////////////////////////////////////////////////////////////
    uploadModalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'flex-end',
        padding: SPACING.lg,
    },
    uploadOptionsContainer: {
        backgroundColor: COLORS.card,
        borderRadius: 24,
        padding: SPACING.lg,
        marginBottom: Platform.OS === 'ios' ? 40 : 20,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    uploadOptionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.lg,
        borderRadius: 16,
        marginVertical: SPACING.xs,
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    uploadOptionIcon: {
        fontSize: 24,
        color: COLORS.primary,
        marginRight: SPACING.md,
    },
    uploadOptionText: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: COLORS.primaryText,
    },
    uploadOptionsTitle: {
        fontSize: 20,
        fontFamily: FONT_FAMILY_BOLD,
        color: COLORS.primaryText,
        textAlign: 'center',
        marginBottom: SPACING.lg,
    },
    uploadOptionsDivider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: SPACING.md,
    },
    uploadOptionsCancelButton: {
        padding: SPACING.md,
        borderRadius: 16,
        backgroundColor: COLORS.background,
        marginTop: SPACING.sm,
    },
    uploadOptionsCancelText: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: COLORS.secondaryText,
        textAlign: 'center',
    },

    /////////////////////////////////////////////////////////////////////////////
    // SEARCH BAR
    /////////////////////////////////////////////////////////////////////////////
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.searchBackground,
        borderRadius: 16,
        paddingHorizontal: SPACING.md,
        marginHorizontal: SPACING.sm,
        marginVertical: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 3,
        elevation: 3,
        height: 50,
    },
    searchIcon: {
        color: COLORS.searchPlaceholder,
        fontSize: 20,
        marginRight: SPACING.sm,
    },
    searchInput: {
        flex: 1,
        fontSize: baseFontSize,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.searchText,
        paddingVertical: SPACING.sm,
    },
    searchResultsText: {
        fontSize: baseFontSize - 2,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COLORS.secondaryText,
        textAlign: 'center',
        marginBottom: SPACING.md,
    },
    searchResultsContainer: {
        width: '100%',
        paddingHorizontal: SPACING.sm,
    },

    /////////////////////////////////////////////////////////////////////////////
    // CONTEXT MENU BUTTON
    /////////////////////////////////////////////////////////////////////////////
    contextMenuButton: {
        padding: SPACING.xs,
        marginLeft: SPACING.sm,
    },
    menuOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: SPACING.sm,
        width: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin: 20,
        alignSelf: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.md,
    },
    menuItemText: {
        marginLeft: SPACING.sm,
        fontSize: 16,
        color: COLORS.primaryText,
    },
    deleteMenuItem: {
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        marginTop: SPACING.xs,
        paddingTop: SPACING.sm,
    },
    deleteMenuText: {
        color: '#e74c3c',
    },
    renameModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    renameModalContent: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: SPACING.lg,
        width: '80%',
    },
    renameModalTitle: {
        fontSize: 18,
        fontFamily: FONT_FAMILY_BOLD,
        marginBottom: SPACING.md,
        textAlign: 'center',
    },
    renameInput: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        marginBottom: SPACING.lg,
        padding: SPACING.sm,
        fontSize: 16,
    },
    renameButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    renameCancelButton: {
        backgroundColor: '#f0f0f0',
        padding: SPACING.md,
        borderRadius: 8,
        flex: 1,
        marginRight: SPACING.sm,
        alignItems: 'center',
    },
    renameConfirmButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.md,
        borderRadius: 8,
        flex: 1,
        marginLeft: SPACING.sm,
        alignItems: 'center',
    },
    renameButtonText: {
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: COLORS.primaryText,
    },
    renameButtonTextSave: {
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: '#fff',
    },

    // Add these to the existing styles
    deleteButton: {
        backgroundColor: '#FEE2E2', // Light red background
        borderColor: '#FCA5A5', // Light red border
    },
    deleteIcon: {
        color: '#DC2626', // Red color for icon
    },
    deleteText: {
        color: '#DC2626', // Red color for text
    },

    // Add to your existing styles
    exportButton: {
        padding: SPACING.sm,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
    },
    exportIcon: {
        fontSize: 24,
        color: '#fff',
    },
});

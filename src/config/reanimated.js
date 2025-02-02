import { LogBox } from 'react-native';
import { enableStrictMode } from 'react-native-reanimated';

// Disable Reanimated strict mode warnings


// Optionally suppress the warning logs completely
LogBox.ignoreLogs([
    'Reanimated: Reading from `value` during component render',
]); 
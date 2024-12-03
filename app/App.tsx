import { StyleSheet, StatusBar} from 'react-native';
import { useFonts } from 'expo-font'
import { Main } from './src/Main';

export default function App() {
  const [isFontsLoaded] = useFonts({
		'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
		'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
		'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
	});

	if(!isFontsLoaded) {
		return null;
	}

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Main />
      </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

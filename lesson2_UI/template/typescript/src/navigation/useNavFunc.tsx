import { useNavigation, useRoute } from '@react-navigation/native';

export const reset = (navigation: any, screenName: string) => {
	navigation.reset({ index: 0, routes: [{ name: screenName }] });
};

export const goBackOrTo = (navigation: any, screenName: string) => {
	const { index } = navigation.dangerouslyGetState();
	index === 0 ? navigation.navigate(screenName) : navigation.goBack();
};

export const useNavFunc = () => {
	const navigation = useNavigation();
	const route = useRoute();
	return {
		route,
		navigation,
		navigate: navigation.navigate,
		reset: (screenName: string) => reset(navigation, screenName),
		goBackOrTo: (screenName: string) => goBackOrTo(navigation, screenName),
	};
};

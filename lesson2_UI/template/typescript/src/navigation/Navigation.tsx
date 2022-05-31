import React, { useMemo } from 'react';
import { Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenObjects from '../screens';
import ScreensInfo from '../screens/info';

// specify all navigation here
const Stack = Platform.OS === 'web' ? createStackNavigator() : createNativeStackNavigator();

interface IScreenObj {
	[key: string]: string,
}

const Navigation = () => {
	const { linking, screenArr } = (() => {
		const screenUrls: IScreenObj = {};
		const screenArr: any = [];
		Object.keys(ScreenObjects).forEach((screenName: string) => {
			// @ts-ignore
			const screenObj = ScreenObjects[screenName];
			// @ts-ignore
			screenArr.push({ name: screenName, component: screenObj, title: ScreensInfo[screenName].title });
			if (!screenUrls[screenName]) {
				// @ts-ignore
				screenUrls[screenName] = ScreensInfo[screenName].path;
			}
		});
		return {
			linking: screenUrls,
			screenArr,
		};
	})();

	return (
		<NavigationContainer
			linking={{ config: { screens: linking }, prefixes: [] }}
			documentTitle={{
				formatter: (options: any) => options.title || options.name,
			}}
			fallback={<Text>Loading...</Text>}
		>
			<Stack.Navigator screenOptions={{ header: () => null }}>
				{useMemo(() => {
					return screenArr.map((val: any, i: number) => (
						<Stack.Screen key={'screen-' + val + i} name={val.name} component={val.component} options={{ title: val.title }} />
					));
				}, [])}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

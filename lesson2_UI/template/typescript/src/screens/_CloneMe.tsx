import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavFunc } from '../navigation/useNavFunc';
import GetColors from '../utils/CommonColors';

const CloneMe = () => {
	return (
		<View style={styles.container}>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GetColors().MAIN,
	}
})

export default CloneMe;

import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik';

import * as yup from 'yup';

const FormSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup
		.string()
		.required()
		.test('is-num-1-5', 'Rating must be number between 1 - 5', (val) => {
			return parseInt(val) < 6 && parseInt(val) > 0;
		})
});

const Validasi = () => {
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{
					title: '',
					body: '',
					rating: ''
				}}
				validationSchema={FormSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					actions.resetForm();
				}}
			>
				{(props) => (
					<View style={{ width: '100%' }}>
						<Text style={{ color: 'white', fontSize: 24 }}>
							Latihan Validasi Formik
						</Text>
						<TextInput
							placeholder="Review Title"
							onChangeText={props.handleChange('title')}
							value={props.values.title}
							onBlur={props.handleBlur('title')}
							style={styles.input}
						/>
						<Text
							style={{
								color: 'red'
							}}
						>
							{props.touched.title && props.errors.title}
						</Text>
						<TextInput
							multiline
							placeholder="Review Body"
							onChangeText={props.handleChange('body')}
							value={props.values.body}
							onBlur={props.handleBlur('body')}
							style={styles.input}
						/>
						<Text
							style={{
								color: 'red'
							}}
						>
							{props.touched.body && props.errors.body}
						</Text>
						<TextInput
							placeholder="Rating (1-5)"
							onChangeText={props.handleChange('rating')}
							value={props.values.rating}
							keyboardType="numeric"
							onBlur={props.handleBlur('rating')}
							style={styles.input}
						/>
						<Text
							style={{
								color: 'red'
							}}
						>
							{props.touched.rating && props.errors.rating}
						</Text>
						<Button
							title="submit"
							colors="maroon"
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 70,
		alignItems: 'center',
		backgroundColor: '#141414'
	},
	input: {
		backgroundColor: '#e8e8e8',
		width: '100%',
		padding: 10,
		borderRadius: 8,
		color: 'black',
		marginVertical: 8,
		fontSize: 16
	}
});

export default Validasi;

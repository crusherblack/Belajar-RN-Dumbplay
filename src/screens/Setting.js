import React from 'react';
import {View, Text, Button} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import * as yup from 'yup';

const FormSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be number between 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const Setting = () => {
  return (
    <View>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}>
        {(props) => (
          <View>
            <TextInput
              placeholder="Review Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text
              style={{
                color: 'red',
              }}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              placeholder="Review Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text
              style={{
                color: 'red',
              }}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur('rating')}
            />
            <Text
              style={{
                color: 'red',
              }}>
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

export default Setting;

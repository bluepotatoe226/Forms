import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function EmployeeFormScreen() {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    age: Yup.number().required('Age is required').positive().integer(),
    department: Yup.string().required('Department is required'),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Employee Information</Text>
      <Formik
        initialValues={{ name: '', email: '', phone: '', age: '', department: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          Alert.alert('Success', JSON.stringify(values, null, 2));
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            {['name', 'email', 'phone', 'age', 'department'].map((field, idx) => (
              <View key={idx}>
                <TextInput
                  style={styles.input}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  onChangeText={handleChange(field)}
                  onBlur={handleBlur(field)}
                  value={values[field]}
                />
                {touched[field] && errors[field] && (
                  <Text style={styles.error}>{errors[field]}</Text>
                )}
              </View>
            ))}
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 10, marginBottom: 15 },
  error: { color: 'red', marginBottom: 10 },
});

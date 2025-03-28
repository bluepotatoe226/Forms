import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function SignInScreen({ navigation }) {
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    department: Yup.string().required('Required'),
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            phone: '',
            department: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            Alert.alert('Signed In', JSON.stringify(values, null, 2));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              {touched.phone && errors.phone && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Department"
                onChangeText={handleChange('department')}
                onBlur={handleBlur('department')}
                value={values.department}
              />
              {touched.department && errors.department && (
                <Text style={styles.error}>{errors.department}</Text>
              )}

              <Button title="Sign In" onPress={handleSubmit} />

              <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.link}>Don't have an account? Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EmployeeFormScreen = () => {
  const EmployeeSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    department: Yup.string().required('Required'),
    jobTitle: Yup.string().required('Required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Information</Text>
      <Formik
        initialValues={{ fullName: '', email: '', phone: '', department: '', jobTitle: '' }}
        validationSchema={EmployeeSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {touched.fullName && <Text style={styles.error}>{errors.fullName}</Text>}

            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {touched.phone && <Text style={styles.error}>{errors.phone}</Text>}

            <TextInput
              placeholder="Department"
              style={styles.input}
              onChangeText={handleChange('department')}
              onBlur={handleBlur('department')}
              value={values.department}
            />
            {touched.department && <Text style={styles.error}>{errors.department}</Text>}

            <TextInput
              placeholder="Job Title"
              style={styles.input}
              onChangeText={handleChange('jobTitle')}
              onBlur={handleBlur('jobTitle')}
              value={values.jobTitle}
            />
            {touched.jobTitle && <Text style={styles.error}>{errors.jobTitle}</Text>}

            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default EmployeeFormScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
});

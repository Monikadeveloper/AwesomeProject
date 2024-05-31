import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import * as yup from 'yup';
  import { Formik } from 'formik'

const loginValidationSchema = yup.object().shape({
  name:yup.string().min(6,'Please enter full name').max(50).required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    cpassword:yup.string().min(8, ({ min }) => `Password must be at least ${min} characters`).oneOf([yup.ref('password')],'Your password do not match').required('Confirm password is required')
})
  const Registration = ({navigation}) => {
    return (
      <View style={{backgroundColor: '#F0F4F3',flex:1}}>
        
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/shape.png',
          }}
          style={styles.ImageTop}
        />
       
        <Text style={styles.text1}>Welcome to Onboard!</Text>
        <Text style={styles.text2}>
          Let's help to meet up your 
        </Text>
        <Text style={styles.text4}>
          tasks.
        </Text>
        <Formik
   validationSchema={loginValidationSchema}
   initialValues={{ name:'',
    email:'',
    password:'',
    cpassword:''
    }}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     touched,
     values,
     errors,
     isValid,
   }) => (<>
        <TextInput
       style={styles.input1}
       placeholder='Enter your full name'
       onChangeText={handleChange('name')}
         onBlur={handleBlur('name')}
         value={values.name}
  
      />
       {touched.name && errors.name &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.name}</Text>}
        <TextInput
       style={styles.input1}
       placeholder='Enter your Email'
       onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
      />
      {touched.email && errors.email &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.email}</Text>}
        <TextInput
       style={styles.input1}
       placeholder='Enter Password'
       onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
      />
      {touched.password && errors.password &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.password}</Text>}
        <TextInput
       style={styles.input1}
       placeholder='Confirm Password'
       onChangeText={handleChange('cpassword')}
         onBlur={handleBlur('cpassword')}
         value={values.cpassword}
      />
      {touched.cpassword && errors.cpassword &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.cpassword}</Text>}
        <Text style={styles.text3}>Already have an account ? Sign in</Text>
        </>
        )}
        </Formik>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.ButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Registration;
  
  const styles = StyleSheet.create({
    text1: {
      fontStyle:'normal',
      fontWeight: 'bold',
      fontSize: 18,
      width:204,
      height:27,
    marginLeft: 87,
    marginTop:0,
   
    
    color:'#000000'
    },
    text2: {
      fontStyle: 'normal',
      textAlign: 'center',
      fontWeight: 400,
      fontSize: 13,
      color:'#000000',
      
    },
    text4:{
        fontSize:13,
        fontWeight:400,
        fontStyle:'normal',
      textAlign:'center',
    

    },
    text3:{
        fontStyle:'normal',
        textAlign:'center',
        marginLeft:40,
        fontWeight:400,
        fontSize:16,
        
        width:272,
        height:25

    },
    input1:
    {
        height: 40, marginLeft:23,marginRight:23,borderRadius:25,padding:10,margin:10, backgroundColor:'white',color:'black'},
    addButton: {
      backgroundColor: '#50C2C9',
      padding: 10,
      borderRadius: 5,
      margin: 15,
      height: 50,
      marginTop: 10,
    },
    ButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      padding: 8,
    },
    Image: {
      height: 150,
      width: 200,
      marginLeft: 60,
      marginTop: 0,
      marginBottom:10
    },
    ImageTop: {
      height: 270,
      width: 300,
      marginLeft: -87,
      marginTop:-100
    
    },
  });
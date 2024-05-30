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
  
  const LoginScreen = ({navigation}) => {
    return (
      <View style={{backgroundColor: '#F0F4F3',flex:1}}>
        
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/shape.png',
          }}
          style={styles.ImageTop}
        />
       
        <Text style={styles.text1}>Welcome back</Text>
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/undraw_back_to_school_inwc 1.png',
          }}
          style={styles.Image}
        />
      
        <TextInput
       style={styles.input1}
       placeholder='Enter your Email'
      />
        <TextInput
       style={styles.input1}
       placeholder='Enter Password'
      />
      <Text style={styles.text2}>Forgot Password ?</Text>
       
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>Already have an account ? Sign in</Text>
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    text1: {
      fontStyle:'normal',
      fontWeight: 'bold',
      fontSize: 18,
  textAlign:'center',
    marginBottom:10,
    
    color:'#000000'
    },
    text2: {
      fontStyle: 'normal',
      textAlign: 'center',
      fontWeight: 400,
      fontSize: 13,
      color:'#000000',
      
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
      marginTop: 30,
    },
    ButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      padding: 8,
    },
    Image: {
      height: 138,
      width: 184,
     marginLeft:90,
      marginBottom:20
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
    text2:{
        fontStyle:'normal',
        textAlign:'center',
        marginLeft:40,
        fontWeight:400,
        fontSize:16,
        marginTop:10,
    

    },
    ImageTop: {
      height: 270,
      width: 300,
      marginLeft: -87,
      marginTop:-100
    
    },
  });
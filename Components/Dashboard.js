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
  
  const Dashboard = () => {
    return (<>
      <View style={{backgroundColor: '#50C2C9'}}>
        
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/shape.png',
          }}
          style={styles.ImageTop}
        />
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/Ellipse 3.png',
          }}
          style={styles.Image1}
        />
        <Text style={styles.text1}>Welcome Jeegar gayani</Text>
       
      </View>
      <View style={{backgroundColor: '#F0F4F3'}}>
        <Text style={styles.text2}>Good Afternoon</Text>
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/clock.png',
          }}
          style={styles.Image2}
        />
        
        <Text style={styles.text3}>Task list</Text>
        
       
<View style={styles.view3}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/task_heading.png',
          }}
          style={styles.Image7}
          />

<Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/task1.png',
          }}
          style={styles.Image4}
        />
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/task.png',
          }}
          style={styles.Image5}
        />
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/task3.png',
          }}
          style={styles.Image5}
        />
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/task4.png',
          }}
          style={styles.Image6}
        />
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/task5.png',
          }}
          style={styles.Image6}
        />
{/* <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/plus.png',
          }}
          style={styles.Image3} */}

</View>
</View>
    
      </>);
  };
  
  export default Dashboard;
  
  const styles = StyleSheet.create({
   
    ImageTop: {
      height: 292,
      width: 300,
      marginLeft: -87,
      marginTop:-100
    
    },
    Image1: {
        height: 80,
        width: 80,
        marginLeft: 140,
        marginTop:-120
      
      },
      Image3:{
        height:25,
        width:25,
        alignItems:'flex-end'
      },
      Image4:{
  height:18,
  width: 240,
margin:10,
marginTop:20,
marginLeft:20
      },
      Image5:{
        height:18,
       width:200,
        marginLeft:20,
        margin:10
            },
            Image6:{
                height:18,
                width:160,
                marginLeft:20,
                margin:10
                    },
      text5:{
      padding:10,
      fontWeight:600,
      fontSize:12
      },
      text1:{
        fontWeight:'bold',
        fontSize:18,
        color:'white',
        textAlign:'center',
        margin:10
      },
      text2:{
        fontWeight:'bold',
        fontSize:12,
        textAlign:'right',
        margin:10
      },
      text3:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'left',
        margin:10
      },
      Image2:{
        height:100,
        width:100,
        marginLeft:140
      },
      Image7:{
        height:18,
        width:300,
        margin:10
      },
      
      view3:{
        backgroundColor:'#FFFFFF',
        height:250,
        width:330,
        margin:10,
        marginLeft:20,
        marginBottom:30,
        
      }
  });
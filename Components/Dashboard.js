import {
    Button,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  
  const Dashboard = () => {
    const[task,setTask]=useState('')
    const [tasklist,setTasklist]=useState([])

    const handleAdd=()=>{
      setTasklist([...tasklist,task])
      setTask('')
    }
    const renderTodo = ({item, index}) => {
      return (<View style={styles.radioWrap}>
         <View style={styles.radio}>
    
    </View>
        <Text style={styles.radioText}>{item}</Text>
        
       
        
      </View>)
    };
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
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:10}}>
  <TextInput style={styles.radioText}
  placeholder='Daily Task'
  value={task}
  onChangeText={(userText)=>setTask(userText)}/>
  <TouchableOpacity onPress={handleAdd}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/plus.png',
          }}
          style={styles.Image7}
          />
          </TouchableOpacity>
          </View>
        
       
    <FlatList
          
  data={tasklist}
        renderItem={renderTodo}/>
    

      
{/* 
          <TouchableOpacity><View style={styles.radioWrap}>
<View style={styles.radio2}></View>
  <Text style={styles.radioText}>Learn how to cook by 1 PM</Text>
</View>
          </TouchableOpacity>
          <TouchableOpacity><View style={styles.radioWrap}>
<View style={styles.radio2}></View>
  <Text style={styles.radioText}>Learn how to play at 1 PM</Text>
</View>
          </TouchableOpacity>
          <TouchableOpacity><View style={styles.radioWrap}>
<View style={styles.radio2}></View>
  <Text style={styles.radioText}>Have lunch at 4 PM</Text>
</View>
          </TouchableOpacity>
          <TouchableOpacity><View style={styles.radioWrap}>
<View style={styles.radio2}></View>
  <Text style={styles.radioText}>Going to travel 6 PM</Text>
</View>
          </TouchableOpacity> */}

          

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
        height:25,
        width:25,
      
      },
      
      view3:{
        backgroundColor:'#FFFFFF',
        height:250,
        width:330,
        margin:10,
        marginLeft:20,
        marginBottom:30,
        
        
      },
      radio:{
        height:20,
        width:20,
        borderColor:'black',
        borderWidth:2,
        borderRadius:2,
        backgroundColor:'#50C2C9',
       margin:10
      },
      radioText:{
       margin:10
      },
      radioWrap:{
        flexDirection:"row"
       
        
      },radio2:{
        height:20,
        width:20,
        borderColor:'black',
        borderWidth:2,
        borderRadius:2,
       margin:10
      },
  
  });
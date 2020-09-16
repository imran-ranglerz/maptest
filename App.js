import React , {useState} from 'react';
import {View, Text, StyleSheet, Picker, Image} from 'react-native';
import MapView , {Marker} from 'react-native-maps';
import bank from './src/images/banks.png';
import { Icon } from 'react-native-elements'
import {Resturent, Banks, Schools} from './src/component/mapdata';
//import  Icon  from 'react-native-vector-icons/ionicons';
import { withTheme } from 'react-native-elements';
 



export default function App(){
 
  const [ counter, setCounter ] = useState(0) 
  const [selectedValue, setSelectedValue] = useState([]);
  

  return(
    <View  style={{flex:1}}>
    <View style={Styles.content}>
    <Picker  style={Styles.poker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
        <Picker.Item label="Select" value="select" />   
        <Picker.Item label="Resturent" value={Resturent} />
        <Picker.Item label="Banks" value={Banks} />
        <Picker.Item label="Schools" value={Schools} />
    </Picker>
    </View>

    <View style={Styles.iconview}>
    <View>
      <Text style={{color:'#FF5733',fontSize:15}}>Radius(miles)</Text>
    </View>
    <View style={Styles.iconborderview}>
    <Icon name="minussquare"  type="ant-design" 

    onPress={ ()=>{
       if(counter > 0){
      setCounter(counter - 1)
    }} } 
      
    />
    <Text style={Styles.text}>{counter}</Text>
    <Icon name="plussquare" type="ant-design"  
    
    onPress={() => {
      if (counter < 5){
       setCounter(counter + 1 ) }
       
       }}/>
    </View>
    </View>
    
    <MapView style={{flex:5}}
    initialRegion={{
      latitude: 31.530156,
      longitude: 74.323837,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
 <MapView.Circle 
    
    radius = { counter * 1000 } 
    center = { {latitude: 31.530156,
    longitude: 74.323837}}

 />

 {selectedValue.map(marker =>(
   <Marker 
     coordinate ={{latitude:marker.latitude, longitude:marker.longitude}}
     title = {marker.title}
    />
 ))}
  <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324}} />
  </MapView>
  </View>
  );
}
const Styles = StyleSheet.create({
  mian:{flex:1},
  content:{
    marginTop:10,
    borderRadius:10,
    borderWidth:1,
    margin:5,
    borderColor:"#FF5733",
  },
  poker:{
    height:40,
     width:270,
     borderWidth:1,
     borderColor:'blue',
     color:'red',
     padding:20,
     marginHorizontal:20,
  },
  iconview:{
    flexDirection:'row', 
    justifyContent: 'space-between',
    margin:10,
    
  },
  iconborderview:{
    flexDirection:"row",
    borderTopWidth:1,
    borderBottomWidth:1,
    height:22,
    width:84,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,

  },
 
  text:{
    fontSize:20,
    marginTop:-3,
    color:'#FF5733',
    marginHorizontal:12
  }
})
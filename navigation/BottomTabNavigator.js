import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Job from "../Screens/Job";
import EditJob from "../Screens/editJob";
import {scale,fontScale,verticalScale} from "../helper/scaling"
import TabBarIcon from '../Component/TabBarIcon';

const Tab = createBottomTabNavigator();

const Post = () => (
  <View style={styles.container}>
    <Text>Post Content</Text>
  </View>
);

const Calendar = () => (
  <View style={styles.container}>
    <Text>Calendar</Text>
  </View>
);

const Task = () => (
  <View style={styles.container}>
    <Text>Task</Text>
  </View>
);

const Home = () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={
        {
            tabBarShowLabel:false,
            tabBarStyle:styles.tabBarStyle
        }
    }
    >
      <Tab.Screen name="Home" 
      component={Home} 
      options={
        {
            tabBarIcon:({focused})=><TabBarIcon focused={focused} iconName={"home-outline"} label={"Home"}/>
        }
      }
      />
      <Tab.Screen name="Job" 
      component={Job} 
      options={
        {
            tabBarIcon:({focused})=><TabBarIcon focused={focused} iconName={"briefcase-outline"} label={"Job"}/>,
            header:({navigation,route})=>
            <View 
            style={styles.JobheaderContainer}>
            <Ionicons
            name={"chevron-back"}
            size={verticalScale(23)}
            color={'#000'}
            onPress={()=>navigation.navigate("Home")}
            />
            <Text style={styles.JobHeaderLabel}>All Jobs</Text>
            <View style={{flexDirection:'row'}}>
            <Ionicons
            name={"funnel-outline"}
            size={verticalScale(23)}
            color={'#000'}
            />
            <Ionicons
            name={"notifications-outline"}
            size={verticalScale(23)}
            color={'#000'}
            style={{marginHorizontal:scale(10)}}
            />
            </View>
             </View>
        }
      }
      />

  
      <Tab.Screen name="EditJob" 
      component={EditJob} 
      options={
        {
           tabBarItemStyle:{display:'none'},
           tabBarStyle:{display:'none'},
           header:({navigation,route})=>
           <View style={styles.JobheaderContainer}>
           <Ionicons
           name={"chevron-back"}
           size={verticalScale(23)}
           color={'#000'}
           onPress={()=>navigation.navigate("Job")}
           />
           <Text style={styles.JobHeaderLabel}>{route.params.item.edit.title}</Text>
           <Ionicons
           name={"ellipsis-vertical"}
           size={verticalScale(23)}
           color={'#000'}
           />
           </View>
        }
      }
      />      
      
      
      <Tab.Screen name="Post" 
      component={Post} 
      options={
        {
            tabBarIcon:({focused})=>{
              return(
            <View style={{justifyContent:'center',alignItems:'center',marginTop:verticalScale(-60)}}>
            <Ionicons
            name={"add-circle"}
            size={verticalScale(65)}
            color={"#53CEF3"}
            />
            </View>
            )
            }
        }
      }
      />
      <Tab.Screen name="Calendar" 
      component={Calendar} 
      options={
        {
          tabBarIcon:({focused})=><TabBarIcon focused={focused} iconName={"calendar-outline"} label={"Calendar"}/>,
            }
        }
      />

<Tab.Screen name="Task" 
      component={Task} 
      options={
        {
          tabBarIcon:({focused})=><TabBarIcon focused={focused} iconName={"clipboard-outline"} label={"Task"}/>,
        }
      }
      />
      
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle:{
    borderTopLeftRadius:scale(10),
    borderTopRightRadius:scale(10),
    elevation:10,
    shadowColor:'black',
    width:'100%',
    height:"8%",
    backgroundColor:'white',
    position:'absolute',
    bottom:0,
  },
  JobheaderContainer:{
    paddingVertical:verticalScale(15),backgroundColor:'white',elevation:10,flexDirection:'row',alignItems:'center',paddingHorizontal:scale(15),justifyContent:'space-between'
  },
  JobHeaderLabel:{
    fontFamily:'Poppins-Bold',fontSize:fontScale(17),fontWeight:'bold',color:'#000'
  }
});

export default BottomTabNavigator;

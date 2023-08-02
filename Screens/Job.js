import {View,Text,FlatList,Pressable,StatusBar,ActivityIndicator, StyleSheet} from "react-native"
import React,{useEffect} from "react";
import IconTitle from "../Component/IconTitle";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux-store/dataSlice';
import { scale,fontScale, verticalScale } from "../helper/scaling";


export default Job=({navigation})=>{

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.items);
    const loading = useSelector((state) => state.data.loading);
    const error = useSelector((state) => state.data.error);
    let abortController = new AbortController();

    useEffect(() => {
    dispatch(fetchData({ signal: abortController.signal }));

    return () => {
      abortController.abort();
    };
  }, [dispatch]);


    return(
        <View style={styles.container}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
        {loading?
        <View style={styles.ActivityIndicator}>
         <ActivityIndicator size="large" color="#53CEF3" />
        </View>:
        <FlatList
        contentContainerStyle={{alignItems:'center',paddingVertical:verticalScale(10)}}
        style={{flex:1,maxHeight:'91%'}}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={
            ({item,index})=>
                (
                <Pressable 
                onPress={()=>navigation.navigate("EditJob",{item})}
                style={styles.ItemStyle}
                >
                    <View style={{justifyContent:'space-around',alignItems:'flex-start'}}>
                    <Text style={{fontFamily:'Poppins-Bold',fontWeight:'500',fontSize:fontScale(16),color:"#53CEF3"}}>{item.title}</Text>
                    <Text style={{fontFamily:'Poppins-Bold',fontWeight:'500',fontSize:fontScale(12),color:"#787878",marginTop:verticalScale(-5)}}>{item.industry}</Text>
                    </View>
                    <IconTitle
                    iconColor={"#717171"}
                    titleColor={"#232323"}
                    fontWeight="500"
                    title={item.job}
                    iconName={"briefcase-outline"}
                    style={{position:'absolute',left:scale(10),top:verticalScale(55)}}
                    fontSize={fontScale(13)}
                    />
                     <IconTitle
                    iconColor={"#717171"}
                    titleColor={"#232323"}
                    fontWeight="500"
                    title={item.date}
                    iconName={"calendar-outline"}
                    style={{position:'absolute',left:scale(135),top:verticalScale(55)}}
                    fontSize={fontScale(13)}
                    />
                     <IconTitle
                    iconColor={"#717171"}
                    titleColor={"#232323"}
                    fontWeight="700"
                    title={item.address}
                    iconName={"location-outline"}
                    style={{position:'absolute',left:scale(10),top:verticalScale(85)}}
                    fontSize={fontScale(13)}
                    />

                </Pressable>) 
        }
        />}
        </View>
    );
}

const styles= StyleSheet.create({
  container:{flex:1,height:'100%',backgroundColor:'#F6F7FA'},
  ActivityIndicator:{flex:1,height:'91%',justifyContent:'center',alignItems:'center'},
  ItemStyle:{width:scale(340),height:verticalScale(130),backgroundColor:'white',borderRadius:verticalScale(10),elevation:5,marginTop:verticalScale(20),paddingHorizontal:scale(10),paddingVertical:verticalScale(5),justifyContent:"space-between",alignItems:'flex-start'},
  

})
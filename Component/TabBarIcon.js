import {View,Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {scale,verticalScale,fontScale} from "../helper/scaling"

export default tabBarIcon=({focused,iconName,label})=>{
    return(
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Ionicons
    name={iconName}
    size={verticalScale(23)}
    color={focused?"#53CEF3":'#969696'}
    />
    <Text style={{fontFamily:'Poppins-Regular',fontWeight:'bold',color:focused?"#53CEF3":"#969696",fontSize:fontScale(12)}}>{label}</Text>
    <View style={{backgroundColor:focused?"#53CEF3":"transparent",width:scale(32),height:verticalScale(5),borderTopLeftRadius:scale(2.5),borderTopRightRadius:scale(2.5)}}/>
    </View>
    );
}
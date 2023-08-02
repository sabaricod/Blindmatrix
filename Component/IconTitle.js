import {View,Text} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export default IconTitle=({iconName,iconColor,fontWeight,titleColor,title,fontSize=12,style,size=20})=>{
    return(
        <View style={{flexDirection:'row',alignItems:'center',...style,justifyContent:'center'}}>
            <Ionicon 
            name={iconName}
            color={iconColor}
            size={size}
            />
            <Text style={{fontFamily:'Poppins-Bold',fontWeight,color:titleColor,marginLeft:5,fontSize:fontSize}}>{title}</Text>
        </View>
    )
}
import {View,ScrollView, Pressable,Text, Image, StyleSheet} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import IconTitle from "../Component/IconTitle";
import { scale,fontScale, verticalScale } from "../helper/scaling";

export default EditJob=({navigation,route})=>{
    return (
        <View style={styles.container}>
        <ScrollView
        style={{width:'100%',height:'90%'}}
        contentContainerStyle={{alignItems:'center',paddingVertical:verticalScale(15)}}
        >
        <View style={styles.titleContainer}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Ionicon
            name={"person-circle"}
            size={verticalScale(70)}
            color={"#969696"}
            />
            <View>
                <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(14),color:'#000'}}>{route.params.item.edit.name}</Text>
                <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(12),color:'#969696',marginTop:scale(-5)}}>{route.params.item.edit.industry}</Text>
            </View>
            </View>
            <Ionicon
            name={"chevron-down-circle-outline"}
            size={verticalScale(22)}
            color={"#969696"}/>
        </View>
        <View style={styles.actionContainer}>
         <Pressable
         style={styles.button}
         >
            <Ionicon
            name="add-outline"
            size={verticalScale(16)}
            color={"white"}
            />
            <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:fontScale(14),color:'white'}}>
                Add Product
            </Text>
         </Pressable>
         <View style={{flexDirection:'row',width:scale(120),justifyContent:'space-between',alignItems:'center'}}>
         <MaterialIcon
            name="camera"
            size={verticalScale(22)}
            color={"#CF2379"}
            />
        <MaterialIcon
            name="printer"
            size={verticalScale(22)}
            color={"#CF2379"}
            />
        <MaterialIcon
            name="microsoft-windows"
            size={verticalScale(22)}
            color={"#969696"}
            />
         </View>        
        </View>
        { route.params.item.edit.item.map((product,idx)=>(
            <View 
            key={"product"+idx}
            style={styles.productItem}>
                <View style={styles.titleImageContainer}>
                <Image
                source={require("../asset/durashade.jpg")}
                style={{width:verticalScale(70),height:verticalScale(70),resizeMode:'cover',marginRight:scale(5)}}
                />
                <View style={{width:scale(245),height:verticalScale(70),justifyContent:'center'}}>
                 <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(16),color:'#000'}}>{product.item_name}</Text>
                 <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(12),color:'#969696'}}>{product.description}</Text>
                </View>
                </View>
                <View style={styles.numContainer}>
                <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(12),color:'#000',marginRight:scale(10)}}>Qty:{product.Qty||product.qty}</Text>
                <Text style={{fontFamily:'Poppins-Bold',fontWeight:'500',fontSize:fontScale(16),color:'#000',marginRight:scale(10)}}>{product.price}</Text>
                <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(10),color:'#969696',textAlign:'center',marginRight:scale(10)}}>Net:{product.net}</Text>
                <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(10),color:'#969696',marginRight:scale(10)}}>Vat:{product.vat}</Text>
                </View>

            <View style={{position:'absolute',bottom:0,borderTopWidth:scale(1.5),width:scale(340),borderColor:'#F1F1F1',flexDirection:'row'}}>
            <IconTitle
            iconName={"copy-outline"}
            iconColor={"#969696"}
            fontWeight={"bold"}
            titleColor={"#969696"}
            title={"Copy"}
            style={{width:scale(85),height:verticalScale(40),borderRightWidth:scale(1.5),borderColor:'#F1F1F1'}}
            />
            <IconTitle
            iconName={"pause-circle-outline"}
            iconColor={"#969696"}
            fontWeight={"bold"}
            titleColor={"#969696"}
            title={"Hold"}
            style={{width:scale(85),height:verticalScale(40),borderRightWidth:scale(1.5),borderColor:'#F1F1F1'}}/>
            <IconTitle
            iconName={"ellipse-sharp"}
            iconColor={"#969696"}
            fontWeight={"bold"}
            titleColor={"#969696"}
            title={"Ready"}
            style={{width:scale(85),height:verticalScale(40),borderRightWidth:scale(1.5),borderColor:'#F1F1F1'}}/>
            <IconTitle
            iconName={"trash-outline"}
            iconColor={"#969696"}
            fontWeight={"bold"}
            titleColor={"#969696"}
            title={"Delete"}
            style={{width:scale(85),height:verticalScale(40)}}/>
            </View>
            </View>
            ))
        }

        <Text style={{fontFamily:'Poppins-Bold',fontWeight:'500',fontSize:fontScale(16),color:'#000',marginLeft:scale(20),alignSelf:'flex-start',marginTop:verticalScale(70)}}>Order Item Summary</Text>
        <View style={{width:scale(340),justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginTop:verticalScale(10)}}>
            <Text style={{fontFamily:'Poppins-Regular',fontWeight:'bold',fontSize:fontScale(14),color:'#969696',textAlign:'center'}}>Total quantity</Text>
            <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(16),color:'#000',textAlign:'center'}}>{route.params.item.edit.total_qty}</Text>
        </View>

        <View style={{width:340,justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginTop:verticalScale(50),marginBottom:verticalScale(70)}}>
            <Text style={{fontFamily:'Poppins-Bold',fontWeight:'500',fontSize:fontScale(16),color:'#000',textAlign:'center'}}>Price Details</Text>
            <Text style={{fontFamily:'Poppins-Bold',fontWeight:'bold',fontSize:fontScale(16),color:'#CF2379',textAlign:'center'}}>Show More</Text>
        </View>
        </ScrollView>
        <View style={{width:"100%",height:"12%",position:'absolute',bottom:0,backgroundColor:"white",elevation:10,justifyContent:'center',paddingHorizontal:scale(35)}}>
        <Pressable style={{width:scale(130),height:verticalScale(40),borderWidth:1,borderRadius:verticalScale(20),justifyContent:'center',alignItems:'center',borderColor:"#969696"}}>
            <Text style={{fontFamily:'Poppins-Regular',fontWeight:'600',fontSize:fontScale(16),color:"#969696"}}>More Option</Text>
        </Pressable>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{width:'100%',height:'100%',backgroundColor:'white'},
    titleContainer:{flexDirection:'row',width:scale(340),height:verticalScale(70),justifyContent:'space-between',alignItems:'center'},
    actionContainer:{flexDirection:'row',width:scale(340),height:verticalScale(70),justifyContent:'space-between',alignItems:'center',marginVertical:verticalScale(15)},
    button:{width:scale(140),height:verticalScale(40),borderRadius:verticalScale(5),backgroundColor:'#CF2379',justifyContent:'center',alignItems:'center',flexDirection:'row'},
    productItem:{width:scale(340),height:verticalScale(170),backgroundColor:'white',elevation:5,borderRadius:verticalScale(10),overflow:'hidden',alignItems:'center',marginTop:verticalScale(10)},
    titleImageContainer:{flexDirection:'row',width:scale(320),alignItems:'center',overflow:'hidden',justifyContent:'center',marginTop:verticalScale(10)},
    numContainer:{flexDirection:'row',width:scale(320),alignItems:'center',overflow:'hidden',justifyContent:'flex-start',alignItems:'center',marginTop:verticalScale(10)},

})
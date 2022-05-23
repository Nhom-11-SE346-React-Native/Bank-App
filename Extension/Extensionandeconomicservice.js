import React from 'react';
import {View, Text,Dimensions} from "react-native"
import Ecustombutton from './Ecustombutton';


export default function Extensionandeconomicservice(){
    return(
        <View style={{flex:1,alignItems:"center"}}>
            <View style={{flex:1,alignItems:"center",backgroundColor:"white",borderRadius:10}}>
                <Text style={{marginTop:10,fontSize:40,marginBottom:20}}>Tiện ích</Text>
                <Ecustombutton Text="Thanh toán hóa đơn" icon="browser" onPress={()=>{}}/>
                <Ecustombutton Text="Nạp tiền điện thoại" icon="phone" onPress={()=>{}}/>
                <Ecustombutton Text="Vé máy bay, vé tàu" icon="ticket" onPress={()=>{}}/>
            </View>

            <View style={{flex:1,alignItems:"center",backgroundColor:"white",borderRadius:10}}>
            <Text style={{fontSize:40,marginBottom:20}}>Dịch vụ tài chính</Text>
                <Ecustombutton Text="Bảo hiểm" icon="wallet" onPress={()=>{}}/>
                <Ecustombutton Text="Tiết kiệm online" icon="phone" onPress={()=>{}}/>


            </View>






        </View>
    )
}
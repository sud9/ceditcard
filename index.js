import { View, Text, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { windowHeight, windowWidth } from "../../utils/Dimension"
import Ripple from 'react-native-material-ripple';
import COLOR from '../../assets/Color';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function index() {

  const [cardno, setcardno] = useState('')
  const [cardname, setcardname] = useState('')
  const [cvvdetail, setcvvdetail] = useState('')
  useEffect(() => {
    getdata();
  }, []);

  

  const getdata = () => {
    try {
      AsyncStorage.getItem('UserData')

        .then(value => {
          if (value != null) {
         setcardno(value)
          }
        }

        )
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <View style={{ alignItems: "center", justifyContent: "center", width: windowWidth, height: windowHeight, backgroundColor: '#f0ebeb' }}>
      <View style={{ backgroundColor: "white", width: windowWidth / 1.08, height: 'auto', borderRadius: 12, elevation: 5 }}>
        <View style={{ marginHorizontal: 20, marginTop: 15 }}>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: "Roboto-Medium", color: "#666", fontSize: 18 }}>My Personal Card</Text>
            { }
            <Image style={{ position: 'absolute', right: 10 }} source={require('../../assets/Image/visa2.png')} />
          </View>



          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 15 }}>Card Number</Text>

            <Text style={{ position: 'absolute', right: 20, fontFamily: "Roboto-Medium", fontSize: 15 }}>Exp.</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 15, color: "grey" }}>{cardno}</Text>

            <View style={{flexDirection:"row",position: 'absolute', right: 20,paddingHorizontal:0}}>
              <Text style={{  fontFamily: "Roboto-Medium", fontSize: 15, color: "grey" }}>08 /</Text>
              <Text style={{ fontFamily: "Roboto-Medium", fontSize: 15, color: "grey" }}> 22</Text>
            </View>

          </View>



          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 15 }}>Card holder name</Text>

            <Text style={{ position: 'absolute', right: 20, fontFamily: "Roboto-Medium", fontSize: 15 }}>CVV/CVC</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 15, color: "grey" }}>{cardname}</Text>

            <Text style={{ position: 'absolute', right: 20, fontFamily: "Roboto-Medium", fontSize: 15, color: "grey" }}>{cvvdetail} </Text>
          </View>

          <Ripple rippleColor={COLOR.white} style={{ backgroundColor: "blue", height: 45, borderRadius: 5, alignItems: "center", justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
            <Text style={{
              color: COLOR.white,
              fontFamily: 'Roboto-Medium', fontSize: 17
            }}>Edit Detail</Text>
          </Ripple>
        </View>
      </View>
    </View>
  )
}
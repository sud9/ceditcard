import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, ScrollView, Modal, Alert, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Forminput from "../../Component/cardinputfield"
import Button from "../../Component/Cardbutton"
import Ripple from 'react-native-material-ripple';
import { windowHeight, windowWidth } from "../../utils/Dimension"
import COLOR from '../../assets/Color'
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { List1, List2 } from "../../Component/Modallist/moadal"

export default function index({ navigation }) {

  // const Input1 = (value) =>  {setcardno(value),se }
  // const Input2 = (value) => { setcardname(value) }

  useEffect(() => {
    getdata();
  }, []);



  const getdata = () => {
    try {
      AsyncStorage.getItem('UserData')

        .then(value => {
          if (value != null) {
            navigation.navigate('Detail');
          }
        }

        )
    } catch (error) {
      console.log(error);
    }
  }


  const setData = async () => {
    if (cardno.length == 0 && cardname.length == 0) {
      Alert.alert("Warning!", "Please Fill all the detail");
    } else {
      try {
        var user = {
          Cardnumber: cardno,
          Cardname: cardname,

        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));

        navigation.navigate('Detail');
      } catch (error) {
        console.log(error);
      }
    }
  }

  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [cardno, setcardno] = useState('')
  const [cardname, setcardname] = useState('')
  const [cardmonth, setcardmonth] = useState('01')
  return (

    <View style={{ ...styles.container }}>
      <View style={{ ...styles.headingtxtcontainer, justifyContent: 'center' }}>
        <Text style={{ ...styles.hdingtxt1 }}>Add Credit Card</Text>

        <View style={{ marginTop: 10, justifyContent: "center" }}>
          <Text style={{ ...styles.hdingtxt2 }}>The Monkey-rope is found inall whaler;but it</Text>
          <Text style={{ ...styles.hdingtxt2 }}> was only in the Prequed that the monkey and</Text>
        </View>

      </View>
      <View style={{ borderWidth: 0.2, marginTop: 50, borderColor: "#919294" }}></View>

      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>



        {/* //card no detail ................................................ */}


        <View style={{ ...styles.carddetailcontainer, marginTop: 20 }}>
          <View style={{ marginTop: 15, justifyContent: "center" }}>
            <Text style={{ color: "#666", fontFamily: "Roboto-Bold", fontSize: 14, }}>Card Number</Text>

            <View style={{ justifyContent: "center" }}>
              <Forminput imgsource={require("../../assets/Image/visa.png")} onChangeText={value=>setcardno(value)} boardtype="number-pad" placeholderText="XXX XXX XXX XXX  8302" />

            </View>
          </View>



          {/* //card Holder detail ................................................ */}


          <View style={{ marginTop: 15, justifyContent: "center" }}>
            <Text style={{ color: "#666", fontFamily: "Roboto-Bold", fontSize: 14 }}>Card Holder</Text>
            <Forminput onChangeText={value =>setcardname(value)} placeholderText="Thomas Michael" />
          </View>


          <View style={{ marginTop: 20, flexDirection: "row" }}>

            <Text style={{ ...styles.txt }}>Expiration Date</Text>
            <Text style={{ ...styles.txt, width: "20%" }}>CVV</Text>

          </View>

          <View style={{ marginTop: 10, flexDirection: "row" }}>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.6} style={{ ...styles.cardoption, width: "38%" }}>
                <Text onValueChange style={{ fontFamily: 'Roboto-Regular', fontSize: 15 }}>{cardmonth}</Text>
                <Entypo style={{ position: 'absolute', right: 2, }} size={25} color={COLOR.black} name="chevron-small-down" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible2(true)} activeOpacity={0.6} style={{ ...styles.cardoption, marginLeft: 10, width: "38%" }}>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15 }}>2022</Text>
                <Entypo style={{ position: 'absolute', right: 2, }} size={25} color={COLOR.black} name="chevron-small-down" />
              </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 1, width: '20%', height: 35, position: "absolute", borderRadius: 5, right: 20, alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: COLOR.white }}>
              <TextInput placeholder="333" maxLength={3} keyboardType="number-pad" style={{ fontFamily: 'Roboto-Regular', fontSize: 15, padding: 0 }} />
            </View>

          </View>
















          <View style={{ paddingTop: 25 }}>
            <View style={{ flexDirection: 'row' }}>

              <Switch value={isEnabled} onValueChange={toggleSwitch} trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "blue" : "#f4f3f4"} />
              <Text style={{ position: "absolute", left: 60, justifyContent: 'center', color: isEnabled ? '#666' : "lightgrey", fontFamily: 'Roboto-Regular', fontSize: 14 }}>Marks As Default Card</Text>
            </View>


          </View>
          <Ripple onPress={setData} rippleColor={COLOR.white} style={{ backgroundColor: "blue", height: 50, borderRadius: 8, alignItems: "center", justifyContent: 'center', marginTop: 40 }}>
            <Text style={{
              color: COLOR.white,
              fontFamily: 'Roboto-Medium', fontSize: 17
            }}>Add Card</Text>
          </Ripple>

        </View>

      </ScrollView>







      {/* //Modal 1 ................................................ */}

      <Modal onRequestClose={() => setModalVisible(!modalVisible)} animationType='slide' visible={modalVisible} transparent={true} >
        <View style={{ height: windowHeight / 1.38, marginHorizontal: windowWidth / 4, marginTop: 100, alignItems: 'center', borderRadius: 10, elevation: 5, backgroundColor: COLOR.white }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible(!modalVisible)} style={{ width: '100%', height: "8%", justifyContent: 'center', backgroundColor: '#f2f0f0' }}>
            <AntDesign color={COLOR.black} style={{ position: 'absolute', right: 20 }} name='close' size={22} />

          </TouchableOpacity>
          <View style={{ flex: 1, overflow: "hidden", width: "100%" }}>
           
            <List1 />
          </View>
        </View>
      </Modal>










      {/* //Modal 2 ................................................ */}

      <Modal onRequestClose={() => setModalVisible2(!modalVisible2)} animationType='slide' visible={modalVisible2} transparent={true} >
        <View style={{ height: windowHeight / 1.38, marginHorizontal: windowWidth / 4, marginTop: 100, alignItems: 'center', borderRadius: 10, elevation: 5, backgroundColor: COLOR.white }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible2(!modalVisible2)} style={{ width: '100%', height: "8%", justifyContent: 'center', backgroundColor: '#f2f0f0' }}>
            <AntDesign color={COLOR.black} style={{ position: 'absolute', right: 20 }} name='close' size={22} />

          </TouchableOpacity>
          <View style={{ flex: 1, overflow: "hidden", width: "100%" }}>
            <List2 />
          </View>
        </View>
      </Modal>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 'auto', marginTop: windowHeight / 15, flex: 1,
  },
  headingtxtcontainer: {
    alignItems: "center",
  },
  hdingtxt1: {
    fontSize: 25, fontFamily: 'Roboto-Bold', color: '#666'
  },
  hdingtxt2: {
    fontFamily: 'Roboto-Regular', color: 'grey', fontSize: 13,
  },
  carddetailcontainer: {
    marginHorizontal: 10, paddingHorizontal: 20, marginTop: windowWidth / 10
  },
  txt: {
    color: "#666", fontFamily: "Roboto-Bold", fontSize: 14, width: "80%"
  },
  cardoption: {
    width: 90, backgroundColor: COLOR.white, height: 35, borderRadius: 5, borderColor: "#666", borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22, backgroundColor: 'red'
  },
})
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native'
import AdMob from "../components/AdMob"
import FooterView from "../components/FooterView"

let dataUncenVid = [
  {
    id: '1',
    title: "Nguoi dong nghiep dang men",
    image: require("../../photos/demo1.jpg")
  }, 
  {
    id: '2',
    title: "Chu hang xom than thien",
    image: require("../../photos/demo2.jpg")
  },
  {
    id: '3',
    title: "Chi gai nha ben de thuong",
    image: require("../../photos/demo3.jpg")
  },
  {
    id: '4',
    title: "Chuyen xe bus trong mo",
    image: require("../../photos/demo4.jpg")
  },
  {
    id: '5',
    title: "Em giang vien than mat",
    image: require("../../photos/demo5.jpg")
  },
  {
    id: '6',
    title: "Nguoi dong nghiep dang men",
    image: require("../../photos/demo1.jpg")
  }, 
  {
    id: '7',
    title: "Chu hang xom than thien",
    image: require("../../photos/demo2.jpg")
  },
  {
    id: '8',
    title: "Chi gai nha ben de thuong",
    image: require("../../photos/demo3.jpg")
  },
  {
    id: '9',
    title: "Chuyen xe bus trong mo",
    image: require("../../photos/demo4.jpg")
  },
  {
    id: '10',
    title: "Em giang vien than mat",
    image: require("../../photos/demo5.jpg")
  },
]

class UncenVid extends Component {

    _keyExtractor = (item, index) => item.id;

    _renderUncenVid = ({item}) => (
        <TouchableOpacity
        style={{width: Dimensions.get('window').width / 2, height: 180, paddingRight: 10, paddingBottom: 10}}
        onPress={() => {
            //
        }}>
        <Image style={{position: "absolute", width: "100%", height: "100%"}} source={item.image}/>
        <View style={{width: "100%", height: "100%", justifyContent: "flex-end"}}>
            <View style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
            <Text 
                numberOfLines={1}
                style={{padding: 5, color: "#FF8040", fontSize: 15, fontWeight: "500"}}>
                {item.title}
            </Text>
            </View>
        </View>
        <View style={{alignSelf: "flex-end", backgroundColor: "#A21D0A", marginTop: 5, right: 15, borderRadius: 5, position: "absolute"}}><Text style={{color: "#FFFFFF", padding: 5}}>1080p</Text></View>
        </TouchableOpacity>
    )

    render() {
        return(
            <View style={{flex: 1}}>
                <Image
                    source={require("../../photos/HomeScreenBG.png")}
                    imageStyle={{resizeMode: 'cover'}}
                    style={{width: "100%", height: "100%", position: "absolute"}}
                />
                <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "700",color: "#dacb46", paddingLeft: 10, marginTop: 10}}>PHIM ÍT CHOE ➤</Text>
                    <FlatList 
                        style={{flexGrow: 0}}
                        numColumns={2}
                        contentContainerStyle={{ paddingTop: 10, paddingLeft: 5 }}
                        data={dataUncenVid}
                        renderItem={this._renderUncenVid}
                        keyExtractor={this._keyExtractor}
                    />
                    <FooterView />
                </ScrollView>
            </View>
        )
    }
}

export default UncenVid
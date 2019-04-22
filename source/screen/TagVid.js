import React, {
    Component
} from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    Text,
    View,
    FlatList,
    ScrollView,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native';
import FooterView from "../components/FooterView"

let dataTag = [
  {
    id: '1',
    tag: "Hindi Mom and son"
  },
  {
    id: '2',
    tag: "NEw shemale teen"
  },
  {
    id: '3',
    tag: "Hot mom"
  },
  {
    id: '4',
    tag: "Unknown person Schoolgirl"
  },
  {
    id: '5',
    tag: "Indian massage"
  },
  {
    id: '6',
    tag: "Arielle ferrar"
  },
  {
    id: '7',
    tag: "Dry humping jodi west"
  },
  {
    id: '8',
    tag: "Fuck sister"
  },
  {
    id: '9',
    tag: "Sister Force"
  },
  {
    id: '10',
    tag: "Hindi Mom and son"
  },
  {
    id: '11',
    tag: "NEw shemale teen"
  },
  {
    id: '12',
    tag: "Hot mom"
  },
  {
    id: '13',
    tag: "Unknown person Schoolgirl"
  },
  {
    id: '14',
    tag: "Indian massage"
  },
  {
    id: '15',
    tag: "Arielle ferrar"
  },
  {
    id: '16',
    tag: "Dry humping jodi west"
  },
  {
    id: '17',
    tag: "Fuck sister"
  },
  {
    id: '18',
    tag: "Sister Force"
  },
]

export default class TagVid extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let tagView = dataTag.map(i => (
      <TouchableOpacity style={{
        // flex: 1,
        // width: 100, 
        height: 30, 
        borderRadius: 30,
        borderColor: "#000000", 
        borderWidth: 0.5, 
        alignItems: "center", 
        justifyContent: "center",
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
        <Text
            numberOfLines={1}
            style={{color: "#FFFFFF", paddingHorizontal: 10, fontSize: 13}}
        >{i.tag}</Text>
        </TouchableOpacity>
        ))
    return (
      <View style={{flex: 1}}>
        <Image
          source={require("../../photos/HomeScreenBG.png")}
          imageStyle={{resizeMode: 'cover'}}
          style={{width: "100%", height: "100%", position: "absolute"}}
        />
        <Text style={{fontSize: 20, fontWeight: "700",color: "#dacb46", paddingLeft: 10, marginTop: 10}}>TỪ KHÓA NỔI BẬT ➤</Text>
        <View style={{padding: 10, marginTop: 10, marginHorizontal: 10, flexDirection:'row', flexWrap:'wrap' }}>
            {tagView}
        </View>
        <FooterView />
      </View>
    )
  }
}

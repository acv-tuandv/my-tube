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
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import AdMob from "../components/AdMob"
import Video from 'react-native-af-video-player'
import FooterView from "../components/FooterView"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

let dataPhimNgauNhien = [
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
]

class DetailVideo extends Component {

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    // Setup the header and tabBarVisible status
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      // For stack navigators, you can hide the header bar like so
      header,
      // For the tab navigators, you can hide the tab bar like so
      tabBarVisible,
    }
  }

  onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    })
  }

  onMorePress() {
    Alert.alert(
      'More action',
      'This is an action call!',
      [{ text: 'OK!' }]
    )
  }

  _keyExtractor = (item, index) => item.id;

  _renderPhimNgauNhien = ({item}) => (
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

    // const url = 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4'
    // const url = 'http://192.99.200.212/disk1/ANIME/OnePunchMan/One.Punch.Man01.mp4'
    const url = 'http://192.99.200.212/disk1/ANIME/OnePunchMan/One.Punch.Man09.mp4'
    const logo = 'https://your-url.com/logo.png'
    const placeholder = 'https://your-url.com/placeholder.png'
    const title = 'ワンパンマン (Wanpanman)'
    
    return (
      <View style={styles.container}>
        <Image
          source={require("../../photos/HomeScreenBG.png")}
          imageStyle={{resizeMode: 'cover'}}
          style={{width: "100%", height: "100%", position: "absolute"}}
        />
        <Video
          autoPlay
          url={url}
          title={title}
          // logo={logo}
          // placeholder={placeholder}
          onMorePress={() => {}}
          onFullScreen={status => this.onFullScreen(status)}
          rotateToFullScreen={true}
        />
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
          <View style={{margin: 10, flexDirection: "row"}}>
            <View style={{marginRight: 7, borderRadius: 5, borderWidth: 0, borderColor: "#FFFFFF", backgroundColor: "rgba(0, 0, 0, 0.7)", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 14, fontWeight: "400", color: "#FFFFFF", padding: 7}}>#1</Text>
            </View>
            <View style={{marginRight: 7, borderRadius: 5, borderWidth: 0, borderColor: "#FFFFFF", backgroundColor: "rgba(0, 0, 0, 0.7)", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 14, fontWeight: "400", color: "#FFFFFF", padding: 7}}>#2</Text>
            </View>
            <View style={{marginRight: 7, borderRadius: 5, borderWidth: 0, borderColor: "#FFFFFF", backgroundColor: "rgba(0, 0, 0, 0.7)", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 14, fontWeight: "400", color: "#FFFFFF", padding: 7}}>#3</Text>
            </View>
            <View style={{borderRadius: 5, borderWidth: 0, borderColor: "#FFFFFF", backgroundColor: "rgba(0, 0, 0, 0.7)", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 14, fontWeight: "400", color: "#FFFFFF", padding: 7}}>Download</Text>
            </View>
            <View style={{flex: 1}}>
              <View style={{borderRadius: 5, borderWidth: 0, borderColor: "#FFFFFF", backgroundColor: "rgba(0, 0, 0, 0.7)", alignItems: "center", justifyContent: "center", alignSelf: "flex-end"}}>
                <Text style={{fontSize: 14, fontWeight: "400", color: "#FFFFFF", padding: 7}}>Views: 111,840</Text>
              </View>
            </View>
          </View>

          <View style={{marginBottom: 10, alignItems: "center"}}>
            {/* Ads */}
            <AdMob />
          </View>

          <Text 
            style={{fontSize: 14, fontWeight: "400", color: "#FFFFFF", paddingLeft: 10, paddingRight: 10 }}>
            Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.[1] Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration.[2] In practice it would be difficult to write literature that drew on just one of the four basic modes.[3]
          </Text>
          <Text style={{fontSize: 20, fontWeight: "700",color: "#dacb46", paddingLeft: 10, marginTop: 20}}>PHIM NGẪU NHIÊN ➤</Text>
          <FlatList 
            // scrollEnabled={false}
            style={{flexGrow: 0}}
            numColumns={2}
            contentContainerStyle={{ paddingTop: 10, paddingLeft: 5 }}
            data={dataPhimNgauNhien}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderPhimNgauNhien}
          />
          <FooterView />
        </ScrollView>
      </View>
    )
  }
}

export default DetailVideo
// const AppNavigator = createStackNavigator(
//   {
//     DetailVideo: {
//       screen: DetailVideo,
//       navigationOptions: {
//         title: 'Home',
//         headerLeft: <TouchableOpacity style={{marginLeft: 10}}><Image 
//           source={require("../../photos/hamburger_menu.png")}
//           style={{ width: 38, height: 38 }}/>
//         </TouchableOpacity>,
//       },
//     },
//   },
//   {
//     initialRouteName: 'DetailVideo',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//       },
//       headerTitle: (
//           <Image
//             style={{ width: 60, height: 40, flex: 1 }}
//             resizeMode="contain"
//             source={require('../../photos/mytube.png')}
//           />
//       ),
//       title: "NEW TUBE",
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       headerRight: <TouchableOpacity style={{marginRight: 10}}><Image 
//           source={require("../../photos/search_btn.png")}
//           style={{ width: 35, height: 35 }}/>
//         </TouchableOpacity>,
//     },
//   }
// );

// export default createAppContainer(AppNavigator);
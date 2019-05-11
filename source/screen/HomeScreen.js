import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  TextInput
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import DetailVideo from "../screen/DetailVideo"
import UncenVid from "../screen/UncenVid"
import TagVid from "../screen/TagVid"
import FooterView from "../components/FooterView"
let dataTopMovie = [
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
]

let dataPhimHoiChe = [
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

class HomeScreen extends Component{

  constructor(props) {
    super(props)

    this.state = {
      stepIndex: 0,
      searchView: false
    }

    this.currentStepIndex = 0;
    
    this.nextStep = this._nextStep.bind(this);
    this.previousStep = this._previousStep.bind(this);

    console.log('State: ', this.state);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: <TouchableOpacity 
        onPress={() => params.handleThis()}
        style={{marginRight: 10}}><Image 
        source={require("../../photos/search_btn.png")}
        style={{ width: 35, height: 35 }}/>
      </TouchableOpacity>,

    };
  };

  componentDidMount() {
    // this.props.navigation.setParams({
    //   handleThis: this.changeButtonColorHandler
    // });
    var url = "https://www.xvideos.com/video46286289/russian_with_big_ass_fucked_through_green_panties",
      xmlhttp; 
    if ("XMLHttpRequest" in window) xmlhttp = new XMLHttpRequest();
    if ("ActiveXObject" in window) xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) console.log("HIHI", xmlhttp.responseText);
    };
    xmlhttp.send(null);
  }

  changeButtonColorHandler() {
    this.setState({
      searchView: state
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderItemTopMovie = ({item}) => (
    <TouchableOpacity
      style={{width: Dimensions.get('window').width - (Dimensions.get('window').width * (30/100)), height: "100%", marginRight: 10}}
      onPress={() => {
        this.props.navigation.navigate("DetailVideo")
      }}>
      <Image style={{position: "absolute", width: "100%", height: "100%"}} source={item.image}/>
      <View style={{width: "100%", height: "100%", justifyContent: "flex-end"}}>
        <View style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
          <Text 
            numberOfLines={1}
            style={{padding: 5, color: "#FF8040", fontSize: 15, fontWeight: "500"}}>
            {/* {item.title} */}
            Nguồn gốc nhân vật: Dr.Sivana, kẻ thù nguy hiểm bậc nhất của Shazam
          </Text>
        </View>
      </View>
      <View style={{alignSelf: "flex-end", backgroundColor: "#A21D0A", marginTop: 5, right: 5, borderRadius: 5, position: "absolute"}}><Text style={{color: "#FFFFFF", padding: 5}}>HD | Mới cập nhật</Text></View>
    </TouchableOpacity>
  )

  _renderItemPhimHoiChe = ({item}) => (
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

  _renderTuKhoaNoiBat = ({item}) => (
    <View style={{
      flex: 1,
      // width: 100, 
      height: 30, 
      borderRadius: 30,
      borderColor: "#000000", 
      borderWidth: 0.5, 
      alignItems: "center", 
      justifyContent: "center",
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: "#555"}}>
      <Text
        numberOfLines={1}
        style={{color: "#FFFFFF", paddingHorizontal: 10, fontSize: 13}}
      >{item.tag}</Text>
    </View>
  )

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
      <View style={{width: "100%", height: "100%"}}>
      <StatusBar barStyle="light-content" />
        <Image
          source={require("../../photos/HomeScreenBG.png")}
          imageStyle={{resizeMode: 'cover'}}
          style={{width: "100%", height: "100%", position: "absolute"}}
        />
        <ScrollView style={styles.main}>
          <View style={styles.container}>
            {this.state.searchView === true ? <View style={{height: 30, width: "100%"}}></View> : null}
            {/* TOP LIST */}
            <View style={styles.listTopMovie}>
              <FlatList 
                ref={(ref) => { this.flatListRef = ref; }}
                // scrollEnabled={false}
                contentContainerStyle={{ paddingTop: 10 }}
                horizontal={true}
                data={dataTopMovie}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItemTopMovie}
              />
              <TouchableOpacity
                onPress={this.previousStep}
                style={{width: 36, height: 60, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", position: "absolute", marginTop: 50, borderColor: "#FFFFFF", borderWidth: 0}}>
                {/* <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "900"}}>⏪</Text> */}
                <Image
                  resizeMode="contain"
                  style={{width: 22, height: 30, marginRight: 5}}
                  source={require("../../photos/backIcon.png")}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.nextStep}
                style={{width: 36, height: 60, alignSelf: "flex-end", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", position: "absolute", marginTop: 50, borderColor: "#FFFFFF", borderWidth: 0}}>
                {/* <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "900"}}>⏩</Text> */}
                <Image
                  resizeMode="contain"
                  style={{width: 22, height: 25, marginLeft: 5}}
                  source={require("../../photos/nextIcon.png")}/>
              </TouchableOpacity>
            </View>
            
            {/* MAIN PAGE */}
            <View style={styles.mainContent}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("UncenVid")
              }}><Text style={{fontSize: 20, fontWeight: "700",color: "#dacb46", paddingLeft: 10, marginTop: 10}}>PHIM HƠI CHOE ➤</Text></TouchableOpacity>
              <FlatList 
                // scrollEnabled={false}
                style={{flexGrow: 0}}
                numColumns={2}
                contentContainerStyle={{ paddingTop: 10, paddingLeft: 5 }}
                data={dataPhimHoiChe}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItemPhimHoiChe}
              />
              <Text style={{fontSize: 20, fontWeight: "700",color: "#dacb46", paddingLeft: 10, marginTop: 10}}>PHIM ÍT CHOE ➤</Text>
              <FlatList 
                // scrollEnabled={false}
                style={{flexGrow: 0}}
                numColumns={2}
                contentContainerStyle={{ paddingTop: 10, paddingLeft: 5 }}
                data={dataPhimHoiChe}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItemPhimHoiChe}
              />

              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("TagVid")
              }}>
                <Text style={{fontSize: 20, fontWeight: "700",color: "#dacb46", paddingLeft: 10, marginTop: 10}}>TỪ KHÓA NỔI BẬT ➤</Text>
              </TouchableOpacity>              
              <View style={{padding: 10, marginTop: 10, marginHorizontal: 10, flexDirection:'row', flexWrap:'wrap' }}>
                {/* <FlatList 
                  contentContainerStyle={{marginRight: 10}}
                  style={{ marginHorizontal: 10}}
                  numColumns={3}
                  data={dataTag}
                  renderItem={this._renderTuKhoaNoiBat}
                  keyExtractor={this._keyExtractor}
                /> */}
                {tagView}
              </View>
            </View>
            <FooterView />
          </View>
        </ScrollView>
      </View>
    );
  }

  _nextStep() {
    console.log('next tapped...')
    if (this.currentStepIndex < dataTopMovie.length - 1) {
      this.currentStepIndex = this.currentStepIndex + 1;
      this.flatListRef.scrollToIndex({index: this.currentStepIndex, animated: true});

      this.setState (
        {
          stepIndex: this.currentStepIndex
        }
      )

    } else {
      // this._onDismissScreen();
    }
  }

  _previousStep () {
    console.log('prev tapped...')
    if (this.currentStepIndex > 0) {
      this.currentStepIndex = this.currentStepIndex - 1;
      this.flatListRef.scrollToIndex({index: this.currentStepIndex, animated: true});
      this.setState (
        {
          stepIndex: this.currentStepIndex
        }
      )
    }
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerLeft: <TouchableOpacity style={{marginLeft: 10}}><Image 
          source={require("../../photos/hamburger_menu.png")}
          style={{ width: 38, height: 38 }}/>
        </TouchableOpacity>,
      },
    },
    DetailVideo: {
      screen: DetailVideo
    }, 
    UncenVid: {
      screen: UncenVid
    },
    TagVid: {
      screen: TagVid
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      headerTitle: (
          <Image
            style={{ width: 60, height: 40, flex: 1 }}
            resizeMode="contain"
            source={require('../../photos/mytube.png')}
          />
      ),
      title: "NEW TUBE",
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      // headerRight: <TouchableOpacity 
      //     style={{marginRight: 10}}><Image 
      //     source={require("../../photos/search_btn.png")}
      //     style={{ width: 35, height: 35 }}/>
      //   </TouchableOpacity>,
      // headerLeft: <TouchableOpacity style={{marginLeft: 10}}><Image 
      //     source={require("../../photos/hamburger_menu.png")}
      //     style={{ width: 38, height: 38 }}/>
      //   </TouchableOpacity>,
    },
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "#121212"
  },
  container: {
    flex: 1,
    paddingBottom: 20
    // backgroundColor: '#121212',
  },
  listTopMovie: {
    width: "100%",
    height: 180,
    // backgroundColor: "red"
  },
  mainContent:{
    width: "100%",
    // height: "100%",
    marginTop: 10
    // backgroundColor: "blue"
  }
});

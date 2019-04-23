import React, {
    Component
} from 'react'
import {
    View,
    Animated,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Video from "react-native-video"
import Icon from "react-native-vector-icons/FontAwesome"

export default class TestVideo extends Component {
    state = {
        buffering: true,
        animated: new Animated.Value(0)
    }
    handleLoadStart = () => {
        this.triggerBufferAnimation()
    }
    handleBuffer = (meta) => {
        meta.isBuffering && this.triggerBufferAnimation()
        if(this.loopingAnimation && !meta.isBuffering) {
            this.loopingAnimation.stopAnimation()
        }
        this.setState({
            buffering: meta.isBuffering
        })
    }
    triggerBufferAnimation = () => {
        this.loopingAnimation = Animated.loop(
            Animated.timing(this.state.animated, {
                toValue: 1,
                duration: 350
            })
        ).start()
    }
    render() {
        const url = 'http://192.99.200.212/disk1/ANIME/OnePunchMan/One.Punch.Man010.mp4'

        const {width} = Dimensions.get("window")
        const height = width * 0.5625
        const {buffering} = this.state
        const interpolatedAnimation = this.state.animated.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"],
        });

        const rotateStyle = {
            transform: [{
                rotate: interpolatedAnimation
            }],
        };

        return(
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Video 
                    repeat
                    controls
                    style={{width: "100%", height}}
                    source={{uri: url}}
                    resizeMode={"contain"}
                    onLoadStart={this.handleLoadStart}
                    onBuffer={this.handleBuffer}
                />
                {this.state.buffering ? <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: "transparent"
                }}>
                    {buffering && <Animated.View style={rotateStyle}><Icon name="circle-o-notch" size={30} color={"#FFF"}/></Animated.View>}
                </View> : null}
            </View>
        )
    }
}
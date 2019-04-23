import React, {Component} from "react"
import {View, Platform} from "react-native"
import {
    AdMobBanner,
    AdMobInterstitial
} from "react-native-admob"

class AdMob extends Component {

    // componentDidMount() {
    //     AdMobInterstitial.setAdUnitID('/6499/example/interstitial')
    //     AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId])
    //     AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd())
    // }

    // componentWillUnmount(){
    //     AdMobInterstitial.removeAllListeners();
    // }
    render() {
        return(
            <View>
                {Platform.OS === "android" ? <AdMobBanner
                    adSize="banner"
                    // adUnitID = "ca-app-pub-4710174142760302/1057124433"
                    adUnitID="/6499/example/banner"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.log("LOI", error)}
                /> : <AdMobBanner
                    adSize="banner"
                    // adUnitID="ca-app-pub-4710174142760302/6255634310"
                    adUnitID="/6499/example/banner"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.log("LOI", error)}
                />}
            </View>
        )
    }
}

export default AdMob
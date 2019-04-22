import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class FooterView extends Component {
    render(){
        return(
            <View style={styles.footer}>
              <Text 
                style={{fontSize: 15, fontWeight: "700", color: "#FFFFFF", paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
                Copyright 2019 © Chu Minh Phuong. All rights reserved.
              </Text>
              <Text 
                style={{fontSize: 14, fontWeight: "400", color: "#FFFFFF", paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
                "All rights reserved" is a copyright formality indicating that the copyright holder reserves, or holds for its own use, all the rights provided by copyright law. Originating in the Buenos Aires Convention of 1910, it is unclear[1] if it has any legal effect in any jurisdiction. However, it is still used by many copyright holders.
              </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        marginTop: 10
    }
})
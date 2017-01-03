import React, {
        AppRegistry,
        Component,
        StyleSheet,
        Text,
        View,
        WebView,
        } from'react-native';
var DEFAULT_URL = 'http://www.lcode.org';

var WebViewDemo =React.createClass({
  render: function() {
    return (
            <View style={{flex:1}}>
              <Text style={{height:40}}>简单的网页显示</Text>
              <WebView style={styles.webview_style}
                      url={DEFAULT_URL}
                      startInLoadingState={true}
                      domStorageEnabled={true}
                      javaScriptEnabled={true}
                      >
              </WebView>
            </View>
    );
  },
});
var styles =StyleSheet.create({
  webview_style:{
    backgroundColor:'#00ff00',
  }
});

AppRegistry.registerComponent('MyProject',() => WebViewDemo);

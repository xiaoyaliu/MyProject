/**
 * Created by liuxiaoya；
 *date 2017/1/3 0003.
 *description
 */
import React,{Component} from 'react';

import { View, Text, StyleSheet } from 'react-native';

import TWebView from './component/webview'
export default class read extends Component{
	  render(){
			return(
					<View style={{flex:1}}>
						  <TWebView url="https://www.baidu.com" />
					</View>
			)
	  }
}
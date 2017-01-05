/**
 * 搜索组件
 * Created by liuxiaoya；
 *date 2017/1/3 0003.
 *description
 */
import React,{Component} from 'react';

import { View, Text,TextInput, StyleSheet } from 'react-native';
import Util from './../component/util'
export default class Search extends Component{
	  render(){
			return(
					<View style={{ borderBottomWidth:Util.pixel,borderColor:'#ccc',marginBottom:10}}>
						  <TextInput  style={styles.search}
								autoCapitalize="none"
								placeholder="搜索"
								placeholderTextColor="#4f4f4f"
								onSubmitEditing={this._onSubmitEditing.bind(this)}
								underlineColorAndroid="transparent"
									  autoCorrect={false}
									  selectionColor="#ccc"
								  />
					</View>
			)
	  }
	  _onSubmitEditing() {
			this.props.navigator.push({
				  component: List,
				  barTintColor: '#fff',
				  title: '互联网资讯',
				  passProps:{
						type: 'it'
				  }
			});
	  }
}
const styles = StyleSheet.create({
	  search: {
			marginLeft: 10,
			marginRight: 10,
			marginBottom:20,
			height:35,
			borderWidth: Util.pixel,
			borderColor: '#ccc',
			borderRadius:3,
			marginTop:25,
			padding:0,
			paddingLeft:10,
			fontSize:15,
			color:"#444"
	  }
});
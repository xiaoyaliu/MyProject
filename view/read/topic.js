/**
 * Created by liuxiaoya；
 *date 2017/1/3 0003.
 *description
 */
import React,{Component} from 'react';

import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';

import Util from './../component/util';

export default class read extends Component{
	  constructor(props){
			super(props);
			this.state={
				  data:this.props.data
			}
	  }
	  render(){
			let data = this.state.data;
			let data1=data[0];
			let data2=data[1]
			return(
					<View style={styles.tj}>
						 <Text style={styles.topicText}>推荐专题</Text>
						  <View style={styles.row}>
						        <TouchableOpacity style={[styles.topicItems,styles.topicRight]}>
									  <Image style={styles.img} source={{uri:data1.img}}  resizeMode="stretch"/>
								</TouchableOpacity>
								 <TouchableOpacity style={styles.topicItems}>
									   <Image style={styles.img} source={{uri:data2.img}}  resizeMode="stretch"/>
								</TouchableOpacity>
						  </View>
						  <TouchableOpacity style={styles.tjTQ}>
								<Text style={styles.tjTQText}>查看同期专题 &gt; </Text>
						  </TouchableOpacity>
					</View>
			)
	  }
}
const styles=StyleSheet.create({
	  topicText:{
			fontSize:17,
			fontWeight: '300',
			marginBottom: 5,
			marginTop:8
	  },
	  row:{
			flexDirection: 'row',
			marginTop:10
	  },
	  topicItems:{
			flex:1,
			height:100
	  },
	  topicRight:{
			marginRight:10
	  },
	  img:{
			width:Util.size.width/2-5,
			height:100,
			borderRadius:5
	  },
	  tj:{
			marginLeft:10,
			marginRight:10
	  },
	  tjTQText:{
			fontWeight: '300',
			fontSize:13,
			color: '#999',
	  },
	  tjTQ:{
			marginTop:8
	  }
})
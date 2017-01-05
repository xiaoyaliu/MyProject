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
				  data:this.props.data,
				  title:this.props.title
			}
	  }
	  render(){
			let data = this.state.data;
			let first=[];
			let second=[];
			for(var i in data){
				  var item=(
						  <TouchableOpacity style={[styles.topicItems,styles.topicRight]} key={i}>
								<Image style={styles.img} source={{uri:data[i].img}}  resizeMode="stretch"/>
								<View>
									  <Text style={styles.title} numberOfLines={2}>
											{data[i].title}
								      </Text>
								</View>

						  </TouchableOpacity>
				  )
				  if(i<4){
						first.push(item)
				  }else if(i>=4&&i<8){
						second.push(item)
				  }
			}
			return(
					<View style={styles.tj}>
						  <Text style={styles.topicText}>{this.state.title}</Text>
						  <View style={styles.row}>
								{first}
						  </View>
						  <View style={styles.row}>
								{second}
						  </View>
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
			marginTop:10,
	  },
	  topicItems:{
			flex:1,
			marginLeft:3,
			marginRight:3
	  },
	  topicLeft:{
			marginLeft:3,
			marginRight:3
	  },
	  img:{
			width:(Util.size.width-40)/4,
			height:(Util.size.width-40)/4
	  },
	  tj:{
			marginLeft:10,
			marginRight:10
	  },
	  title:{
			fontWeight: '300',
			fontSize:12,
			color: '#7D7D81'
	  }
})
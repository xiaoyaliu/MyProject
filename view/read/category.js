/**
 * Created by liuxiaoya；
 *date 2017/1/3 0003.
 *description
 */
/**
 * Created by liuxiaoya；
 *date 2017/1/3 0003.
 *description
 */
import React,{Component} from 'react';

import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';

import Util from './../component/util';
import List from './list';

export default class category extends Component{
	  constructor(props){
			super(props);
			this.state={
				  data:this.props.data
			}
	  }
	  render(){
			let data = this.props.data;
			var first = [];
			let second = [];
			for(var i in data){
				  let Item = (
						  <TouchableOpacity style={[styles.categoryTopic]} key={i} onPress={this._showList.bind(this, data[i].text)}>
								<Text style={styles.title}>{data[i].text}</Text>
						  </TouchableOpacity>
				  );
				  if(i < 2){
						first.push(Item);
				  }else{
						second.push(Item);
				  }
			}
			return(
					<View style={styles.tj}>
						  <Text style={styles.topicText}>分类</Text>
						  <View style={styles.row}>
								{first}
						  </View>
						  <View style={styles.row}>
								{second}
						  </View>
					</View>
			)
	  }
	  _showList(keywords) {
			var type = 'it';
			switch (keywords) {
				  case '互联网':
						type = 'it';
						break;
				  case '散文':
						type = 'sanwen';
						break;
				  case '笑话':
						type = 'cookies';
						break;
				  case '管理':
						type = 'manager';
						break;
				  default :
						type = 'it';
						break;
			}

			const navigator = this.props.navigator;
				  if (navigator){
						navigator.push({
							  component: List,
							  title: "列表",
							  params: {
									type: type
							  }
						});
				  }
	  }
}
const styles=StyleSheet.create({
	  tj:{
			marginRight:10
	  },
	  topicText:{
			fontSize:17,
			fontWeight: '300',
			marginBottom: 5
	  },
	  row:{
			flexDirection: 'row',
			marginTop:10
	  },
	  categoryTopic: {
			height: 70,
			borderWidth: Util.pixel,
			borderColor: '#ccc',
			justifyContent: 'center',
			alignItems: 'center',
			flex:1,
			borderRadius: 3,
			marginLeft:10
	  },
	  title:{
			fontSize:17,
			fontWeight:'300'
	  }
})
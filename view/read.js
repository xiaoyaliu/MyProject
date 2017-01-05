/**
 * Created by liuxiaoya；
 *date 2017/1/3 0003.
 *description
 */
import React,{Component} from 'react';

import { View,ScrollView,TouchableHighlight,Text,Image,Navigator,RefreshControl,ActivityIndicator, StyleSheet } from 'react-native';
import Util from './component/util';
import Search from './read/search';
import Recommend from './read/recommend';
import Topic from './read/topic';
import Category from './read/category';
class ReadPage extends Component{
	  constructor(props){
			super(props);
			this.state = {
				  isShow: false,
				  recommendTopic: null,
				  hotTopic: null,
				  category: null,
				  other: null,
				  refreshing: false
			};
	  }
    render(){
		  return(
				  <View style={{flex:1,marginTop:45}}>
						<Search />
						{this.state.isShow?
						<ScrollView  refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)} />
              }>
							  <Topic data={this.state.recommendTopic} navigator={this.props.navigator}/>
							  <HrLine/>
							  <Recommend title="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator} type="it"/>
							  <HrLine/>
							  <Category title="分类" data={this.state.category} navigator={this.props.navigator} type="category"/>
							  <HrLine/>
							  <Recommend title="清新一刻" data={this.state.other} navigator={this.props.navigator} type="sanwen"/>
						</ScrollView>:
							  (<ActivityIndicator
							  animating={true}
							  style={[{height: 80}]}
							  size="large"
							  />)
						}
				  	  </View>
		  )
	}
	  componentDidMount(){
			this._fetchData();
	  }

	  _fetchData(callback){
			var self = this;
			Util.get('http://123.57.39.116:3000/data/read?type=config', function(data){
				  if(data.status){
						let obj = data.data;

						self.setState({
							  isShow: true,
							  recommendTopic: obj.recommendTopic,
							  hotTopic: obj.hotTopic,
							  category: obj.category,
							  other: obj.other,
							  refreshing: false
						});
				  }else{
						alert('服务异常,正在紧急修复,请耐心等待');
				  }
			}, function(err){
				  alert(err);
				  alert('服务异常,正在紧急修复,请耐心等待2');
			});
	  }
	  _onRefresh(){
			var self = this;
			this.setState({refreshing: true});
			this._fetchData();
	  }

}
export default class Read extends Component{
	  render(){
			return(
					<Navigator initialRoute={{name: '阅读', component: ReadPage}}
					              renderScene={(route, navigator) =>{
					                 let Component = route.component;
                                   return <Component {...route.params} navigator={navigator} />
                                   }
						       	}
							       configureScene={(route) => {
                                       return Navigator.SceneConfigs.VerticalDownSwipeJump;
                                    }}
							       navigationBar={
										 <Navigator.NavigationBar
										   routeMapper={{
											 LeftButton: (route, navigator, index, navState) =>
											  { if (route.index === 0) {
													  return null;
													} else {
													  return (
														<TouchableHighlight style={styles.titleLeft} onPress={() => navigator.pop()}>
														  <Image source={{uri:"http://m.youde.com/image/back.png"}} style={{width:12,height:20,tintColor:"#1661df"}} resizeMode="cover"/>
														</TouchableHighlight>
													  );
													}; },
											 RightButton: (route, navigator, index, navState) =>
											   { return null },
											 Title: (route, navigator, index, navState) =>
											   {  return (
														  <View style={styles.title1}>
															<Text style={styles.buttonText}>{route.title ? route.title : 'Splash'}</Text>
														  </View>
														); },
										   }}
										   style={{backgroundColor: '#f9f9f9', alignItems: 'center'}}
										 />
									  }
							/>
			)
	  }

}
class HrLine extends Component{
	  render(){
			return (
					<View style={styles.hr}></View>

			);
	  }
}
const styles=StyleSheet.create({
	  container: {
			flex: 1
	  },
	  hr:{
          width:Util.size.width,
			height:Util.pixel,
			backgroundColor:'#ccc',
			marginTop:20,
			marginBottom:10

	  },
	  titleLeft:{
			flex:1,
			alignItems: 'flex-start',
			justifyContent: 'center',
			width:20,
			height:44
	  },
	  title1: {
			flex:1,
			justifyContent: 'center',
			alignItems: 'center'
		},
	  button: {
			width:40,
			height:44,
			justifyContent: 'center',
			alignItems: 'center'
	  },
	  done:{
			fontSize: 14, color: '#444'
	  },
	  buttonText: {
			fontSize: 14, color: '#444', fontWeight: '400'
	  }
})
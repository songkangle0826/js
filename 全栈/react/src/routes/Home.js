import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			首页
		</div>
	}
}

export default connect()(Home)

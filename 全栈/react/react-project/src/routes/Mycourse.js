import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Mycourse extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			我的课程
		</div>
	}
}

export default connect()(Mycourse)

import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// class TodoItem extends React.Component<any> {

// 	shouldComponentUpdate(prevProps: any) {
// 		console.log(this.props.todo, prevProps.todo)
// 		if (_.isEqual(this.props, prevProps);) {
// 			return true;
// 		}
// 		return false;
// 	}

// 	render() {
// 		return (
// 			<Container>
// 				<StyledLink to={"/detail/" + this.props.todo.id}>{(this.props.number + 1) + ". " + this.props.todo.title}</StyledLink>
// 				<>{this.props.todo?.completed ? <>&#10004;</> : ""}</>
// 			</Container>
// 		);
// 	}
// }

// export default TodoItem;


function TodoItem(props) {
	return (
		<Container>
			<StyledLink to={"/detail/" + props.todo.id}>{(props.number + 1) + ". " + props.todo.title}</StyledLink>
			<>{props.todo.completed ? <>&#10004;</> : ""}</>
		</Container>
	);
}

export default TodoItem;



const StyledLink = styled(Link)`
	text-decoration: none;
	color: #404040;
	width: 90%;
  overflow:hidden; 
  white-space:nowrap; 
  text-overflow: ellipsis;
	display: block;
`;

const Container = styled.div`
	font-size: 1.33em;
	line-height: 2.5em;
	cursor: pointer;
	color: #7a7d85;
	display: flex;
	justify-content: space-between;
`;




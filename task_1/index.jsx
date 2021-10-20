import { Component, memo } from "react";

// functional component
const FirstComponent = ({ name }) => <div>my name is {name}</div>;

export default memo(FirstComponent);

// class component
class SecondComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.name !== this.props.name ? true : false;
    }
    render() {
        return <div>my name is {this.props.name}</div>;
    }
}

import React from "react";

export default class Blog extends React.Component {
    render() {
        return (
            <div>
                <h1>Category: {this.props.params.category}</h1>
                <h1>Title: {this.props.params.title}</h1>
            </div>
        );
    }
}

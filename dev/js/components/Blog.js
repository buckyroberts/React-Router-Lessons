import React from "react";
import {browserHistory} from 'react-router'

export default class Blog extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const category = e.target.elements[0].value;
        const title = e.target.elements[1].value;
        const url = `/blog/${category}/${title}`;
        console.log(url);
        browserHistory.push(url);
    }

    render() {
        return (
            <div>
                <h1>Category: {this.props.params.category}</h1>
                <h1>Title: {this.props.params.title}</h1>

                <div className="panel">
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <label>Category:</label>
                                <input type="text" placeholder="Enter category..."/>
                            </div>
                            <div className="form-row">
                                <label>Title:</label>
                                <input type="text" placeholder="Enter title..."/>
                            </div>
                            <div className="form-row">
                                <label/>
                                <input className="form-item button-secondary" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }

}

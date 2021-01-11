import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>The list of employees are shown at the bottom. You can use the search bar to look up different employees</p>
            </div>
        )
    }
}

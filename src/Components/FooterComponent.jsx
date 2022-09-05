import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved 2022 <a href="https://paraspatel.ca" className="navbar-brand">@ParasPatel</a> </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
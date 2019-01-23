import React from 'react'

const Layout = ({children}) => (
    <div className="container">
        <div className="row">
            <div className="col-md-9">{children}</div>
            <div className="col-md-3">Test Message</div>
        </div>
    </div>
);

export default Layout

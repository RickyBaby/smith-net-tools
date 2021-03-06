import React from "react"
import PropTypes from "prop-types"

const Layout = (props) => (
    <React.Fragment>
        <header>
            <div className="site-title">tools.smith-net.org.uk | <b>{props.title}</b></div>
        </header>
        <main>{props.children}</main>
        <footer>
        	made by <a href="https://www.smith-net.org.uk">www.smith-net.org.uk</a>
        </footer>
    </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderSelect = () => {
    if(this.state.currentPage === "Home"){
      return <Home/>;
    }
    else if (this.state.currentPage === "About"){
      return <About/>;
    }
    else if (this.state.currentPage === "Blog"){
      return <Blog/>;
    }
    else if (this.state.currentPage === "Contact"){
      return <Contact/>;
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {/* Based on `this.state.currentPage`, render the appropriate component
        here. */}
        <div className="container">
          {this.renderSelect()}
        </div>
        
        
      </div>
    );
  }
}

export default PortfolioContainer;

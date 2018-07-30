import React from 'react';
import Link from 'gatsby-link';
import '../scss/header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/" className="Logo">Home</Link>
          <Link to="/guidelines">Guidelines</Link>
          <Link to="/components">Components</Link>
          <Link to="/tokens">Tokens</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}

export default Header

import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import {ReactComponent as Logo} from './assets/logo.svg';

class App extends React.Component {
  state = {
    header: {
      brand: {
        logo: <Logo />,
        link: window.location.origin.toString()
      },
      menuList: [
        {
          link: '#',
          text: 'WEB HOSTING'
        },
        {
          link: '#',
          text: 'CLOUD HOSTING',
          highlight: 'ON SALE'
        },
        {
          link: '#',
          text: 'VPS HOSTING'
        },
        {
          link: '#',
          text: 'DOMAIN CHECKER'
        },
        {
          link: '#',
          text: 'WEBSITE BUILDER'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Navbar header={this.state.header} />
        <MainContent />
      </div>
    );
  }
}

export default App;

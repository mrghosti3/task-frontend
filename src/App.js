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
          text: 'Web Hosting'
        },
        {
          link: '#',
          text: 'Cloud Hosting',
          highlight: 'on sale'
        },
        {
          link: '#',
          text: 'VPS Hosting'
        },
        {
          link: '#',
          text: 'Domain checker'
        },
        {
          link: '#',
          text: 'Website Builder'
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

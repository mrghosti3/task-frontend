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
    },
    priceTag: {
      discount: '82%',
      currency: '$',
      price: 1.45,
      occurance: '/mo'
    },
    services: [
      'Garanteed 99.9% Uptime',
      'Superior Speed Performance',
      '24/7 Support Chat',
      '30-Day Money-Back Guarantee'
    ]
  }

  render() {
    return (
      <div>
        <Navbar header={this.state.header} />
        <MainContent tag={this.state.priceTag} services={this.state.services} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import {ReactComponent as Logo} from './logo.svg';

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
        <p>Hello world</p>
        <Timer time="00:00:00:05"/>
      </div>
    );
  }
}

export default App;

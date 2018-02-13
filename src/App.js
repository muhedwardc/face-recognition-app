import React, { Component } from 'react';
import './App.css';

import Clarifai from 'clarifai';  
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: 'e6a4f59d975f43dcb0381b88333b806e'
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 1
      }
    },
    number: {
      value: 104,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      enable: true,
      direction: "none",
      out_mode: "out",
      speed: 10
    }
  }
}

class App extends Component {
  state = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignin: false
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    // http://www.molto.co.id/Images/3504/3504-1178193-Article-Hero-Tipe%20Hijab.jpg
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)      
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignin: false})
      this.setState({route: 'signin'});
    } else if (route === 'home') {
      this.setState({isSignin: true});
      this.setState({route: route});
    }
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignin={this.state.isSignin}/>
        { this.state.route === 'home'
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div> 
        : this.state.route === 'signin'
        ? <Signin onRouteChange={this.onRouteChange}/> 
        : this.state.route === 'register'
        ? <Register onRouteChange={this.onRouteChange}/>
        : null
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export default class Instafeed extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      instafeedLoaded: false
    };
  }

  componentDidMount() {
    this.setState({
      instafeedLoaded: true
    });
  }

  renderInstafeed() {
    if (!this.state.instafeedLoaded) {
      // 📓️ NOTE: Do not use className (React), HTML standards apply
      // Below provided is the default as an example
      // Anything you put here will be take precedence
      const instafeedTemplate =
         `<a href="{{link}}" target="_blank" class="instafeed__item">
              <img class="instafeed__item__background" src="{{image}}" />
          </a>`;
      const instafeed = <Instafeed
        userId={`${INSTAGRAM_USER_ID}`}
        clientId={`${INSTAGRAM_CLIENT_ID}`}
        accessToken={`${INSTAGRAM_ACCESS_TOKEN}`}
        target='instafeed'
        resolution='standard_resolution'
        limit='1'
        sortBy='most-recent'
        ref='instafeed'
        template={instafeedTemplate}
        customClass={this.state.instafeedLoaded ? 'loaded' : ''}
        />;
      return instafeed;
    }

  }

  render() {
    return (
      <div className="insta-container">
         <div className="head_title_box">
           <div className="title_name"><p>Gallery</p></div>
         </div>

         <div id='instafeed'>{this.renderInstafeed()}</div>
       </div>
    )
  };
}

import React from 'react';

export default class Gallery extends Component {
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
         `<div class="insta-container">
            <div class="head_title_box">
              <div class="title_name">
                <p>Gallery</p>
              </div>

              <a class="client_link" target="_blank"><p>All Images</p></a>
            </div>

            <a href="{{link}}" target="_blank" class="instafeed__item">
              <img class="instafeed__item__background" src="{{image}}" />
            </a>
          </div>`;
      const instafeed = <Instafeed
        userId='[GOES-HERE]'
        clientId='[GOES-HERE]'
        accessToken='[GOES-HERE]'
        target='instafeed'
        resolution='standard_resolution'
        limit='8'
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
      {
        this.
        renderInstafeed()
      }
    )
  };
}

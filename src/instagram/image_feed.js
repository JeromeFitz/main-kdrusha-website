import React from 'react';
import Instafeed from 'react-instafeed';

class InstafeedComponent extends React.Component {

  render() {
    const instafeedTarget = 'instafeed';
    const instafeedTemplate = `<a href="{{link}}" target="_blank" class="instafeed__item">
            <img class="instafeed__item__background" src="{{image}}" />
        </a>`;
    return (
      <div className="insta-container">
         <div className="head_title_box">
           <div className="title_name"><p>Gallery</p></div>
         </div>
         <div id={instafeedTarget}>
          <Instafeed
            limit='5'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={instafeedTarget}
            template={instafeedTemplate}
            userId={process.env.REACT_APP_INSTAGRAM_USER_ID}
            clientId={process.env.REACT_APP_INSTAGRAM_CLIENT_ID}
            accessToken={process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}
            />
        </div>
       </div>
    )
  };
}

export default InstafeedComponent;

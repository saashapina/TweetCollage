import React from 'react';

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__branding">
        <img className="header__logo" src="./public/assets/img/logo.png" alt="TweetCollage logo" />
        <img
          className="header__wordmark"
          src="./public/assets/img/logo-wordmark-white.png"
          alt="TweetCollage"
        />
      </div>
      <div className="header__intro">
        A picture is worth a thousand characters.<br />Turn your tweets into sharable art by
        entering a Twitter handle below.
      </div>
      <form id="headerForm">
        <div className="header-form__input-container">
          <input
            id="inputTwitterHandle"
            name="inputTwitterHandle"
            className="header-form__input"
            placeholder="e.g., @LambdaSchool"
            value={props.searchInput}
            onChange={props.handleChange}
            onKeyUp={event => {if (event.target.value==="enter") props.handleSubmit()}} />
          <button className="header-form__button">
            <img className="header-form__button-img" src="public/assets/img/logo.png" onClick={props.handleSubmit}/>
          </button>
        </div>
      </form>
    </header>
  );
}

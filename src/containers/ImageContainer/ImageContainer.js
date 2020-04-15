import React, { Component, Fragment } from 'react';

import styles from './ImageContainer.module.css';
import Spinner from '../../components/Spinner/Spinner';
import likeImage from '../../assets/images/like.png';

class Image extends Component {
  state = {
    isLoading: true
  }

  // Here, onLoad property is used rather than componentDidMount
  // because rendering is different that loading
  imageLoadedHandler = () => {
    this.setState({
      isLoading: false
    });
  }

  buttonClickedHandler = () => {
    console.log('[ImageContainer.js] button clicked');
  }

  render() {
    // Only 10 words should be shown firstly
    const shortText = this.props.desc.split(' ').splice(0, 20).join(' ');
    return (
      <Fragment>
        <div className={styles.preImage} style={{ display: this.state.isLoading ? 'flex' : 'none' }}>
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        </div>
        <div className={styles.imageContainer} style={{ display: this.state.isLoading ? 'none' : 'block' }}>
          <img
            src={this.props.src}
            alt={this.props.alt}
            className={styles.image}
            onLoad={this.imageLoadedHandler}
          />
          <p className={styles.imageDetails}>
            {shortText + ' '}
            <span className={styles.more} onClick={() => this.props.more(this.props)}>more</span>
          </p>
          <button onClick={this.buttonClickedHandler} className={styles.likeBtn}>
            <img src={likeImage} alt="like" />
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Image;

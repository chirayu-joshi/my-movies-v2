import React, { Component } from 'react';

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
    return (
      <React.Fragment>
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
          <p className={styles.imageDetails}>{this.props.desc}</p>
          <button onClick={this.buttonClickedHandler} className={styles.likeBtn}>
            <img src={likeImage} alt="like" />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Image;

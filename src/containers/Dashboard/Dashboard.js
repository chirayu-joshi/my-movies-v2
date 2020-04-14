import React, { Component } from 'react';
import axios from '../../axios';

import styles from './Dashboard.module.css';
import Image from '../ImageContainer/ImageContainer';

class Dashboard extends Component {
  state = {
    isLoading: true,
    moviesData: {}
  }

  componentDidMount() {
    axios.get('/3/discover/movie', {
      params: {
        page: 2
      }
    }).then(res => {
      this.setState({
        isLoading: false,
        moviesData: res.data
      });
      // console.log(this.state.moviesData);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <h1>Loading...</h1>
      );
    }

    const imagesDetails = this.state.moviesData.results.map(result => (
      {
        id: result.id,
        url: result.poster_path,
        description: result.overview
      }
    ));

    const images = imagesDetails.map(imageDetail => (
      <Image
        src={'https://image.tmdb.org/t/p/w500' + imageDetail.url}
        alt="img"
        desc={imageDetail.description}
        key={imageDetail.id} />
    ));

    return (
      <div className={styles.imagesContainer}>
        {images}
      </div>
    );
  }
}

export default Dashboard;

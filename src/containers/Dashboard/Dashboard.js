import React, { Component, Fragment } from 'react';
import axios from '../../axios';

import styles from './Dashboard.module.css';
import PageNavigation from '../../components/PageNavigation/PageNavigation';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import Image from '../../containers/ImageContainer/ImageContainer';

class Dashboard extends Component {
  state = {
    isLoading: true,
    moviesData: {},
    pageNumber: 1
  }

  // React state doesn't update immediately if it is synchronous
  // It happens when state has lot of data to store
  // Use below method to prevent it. 
  pageChangeHandler = page => {
    this.setState({
      isLoading: true,
      pageNumber: page
    }, () => {
      axios.get('/3/discover/movie', {
        params: {
          page: this.state.pageNumber
        }
      }).then(res => {
        this.setState({
          isLoading: false,
          moviesData: res.data
        });
        console.log(this.state.moviesData);
      }).catch(err => {
        console.log(err);
      });
    })
  }

  componentDidMount() {
    axios.get('/3/discover/movie', {
      params: {
        page: this.state.pageNumber
      }
    }).then(res => {
      this.setState({
        isLoading: false,
        moviesData: res.data
      });
      console.log(this.state.moviesData);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadingAnimation />
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
      <Fragment>
        <div className={styles.imagesContainer}>
          {images}
        </div>
        <PageNavigation data={this.state.moviesData} page={this.pageChangeHandler} />
      </Fragment>
    );
  }
}

export default Dashboard;

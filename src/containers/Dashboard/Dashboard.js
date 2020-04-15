import React, { Component, Fragment } from 'react';
import axios from '../../axios';

import styles from './Dashboard.module.css';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import Image from '../../containers/ImageContainer/ImageContainer';
import topImage from '../../assets/images/top.png';
import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';

class Dashboard extends Component {
  state = {
    isLoading: true,
    moviesData: {},
    pageNumber: 1,
    imagesData: [],
    isModalOpen: false,
    modalDescription: {}
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      // At bottom
      if (this.state.pageNumber < this.state.moviesData.total_pages) {
        // More pages are available
        axios.get('/3/discover/movie', {
          params: {
            page: this.state.pageNumber + 1
          }
        }).then(res => {
          this.setState((prevState, props) => ({
            isLoading: false,
            moviesData: res.data,
            imagesData: prevState.imagesData.concat(res.data.results),
            pageNumber: prevState.pageNumber + 1
          }));
          // console.log(this.state.moviesData);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }

  moreClickHandler = (imageDetails) => {
    this.setState({
      isModalOpen: true,
      modalDescription: imageDetails
    });
  }

  backdropClickHandler = () => {
    this.setState({ isModalOpen: false });
  }

  componentDidMount() {
    axios.get('/3/discover/movie', {
      params: {
        page: this.state.pageNumber
      }
    }).then(res => {
      this.setState((prevState, props) => ({
        isLoading: false,
        moviesData: res.data,
        imagesData: prevState.imagesData.concat(res.data.results)
      }));
      // console.log(this.state.moviesData);
    }).catch(err => {
      console.log(err);
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadingAnimation />
      );
    }
    
    const imagesDetails = this.state.imagesData.map(result => ({
      id: result.id,
      url: result.poster_path,
      title: result.title,
      description: result.overview
    }));
    const images = imagesDetails.map(imageDetail => (
      <Image
        src={'https://image.tmdb.org/t/p/w500' + imageDetail.url}
        alt="img"
        title={imageDetail.title}
        desc={imageDetail.description}
        key={imageDetail.id}
        more={this.moreClickHandler} />
    ));

    return (
      <Fragment>
        {this.state.isModalOpen ? <Backdrop click={this.backdropClickHandler} /> : null}
        {this.state.isModalOpen ? 
          <Modal description={this.state.modalDescription} close={this.backdropClickHandler} /> : 
          null}
        <div className={styles.imagesContainer}>
          {images}
        </div>
        <button 
          onClick={() => window.scrollTo(0, 0)}
          className={styles.topBtn}>
          <img src={topImage} alt="to top" />
        </button>
      </Fragment>
    );
  }
}

export default Dashboard;

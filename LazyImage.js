import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Observer from '../../utils/ImagesIntersectionObserver';
// assets
import './style.scss';

const propTypes = {
  dataSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrcSet: PropTypes.string,
  className: PropTypes.string,
  aspectRatio: PropTypes.string,
};

const defaultProps = {
  dataSrcSet: '',
  className: '',
  aspectRatio: 'square',
};

class LazyImage extends Component {
  imageRef = React.createRef();

  componentDidMount() {
    Observer().observe(this.imageRef.current);
  }

  render() {
    const {
      dataSrc,
      dataSrcSet,
      alt,
      className,
      aspectRatio,
    } = this.props;

    return (
      <div
        className={classnames({
          'lazy-container': true,
          [`lazy-container__${aspectRatio}`]: true,
        })}
      >
        <img
          ref={this.imageRef}
          data-src={dataSrc}
          data-srcset={dataSrcSet}
          alt={alt}
          className={classnames({
            [`lazy-container__image ${className}`]: true,
          })}
        />
      </div>
    );
  }
}

LazyImage.propTypes = propTypes;
LazyImage.defaultProps = defaultProps;

export default LazyImage;

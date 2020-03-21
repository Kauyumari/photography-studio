import Glide from '@glidejs/glide';
import '@glidejs/glide/src/assets/sass/glide.core.scss';
import '@glidejs/glide/src/assets/sass/glide.theme.scss';
import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';


const Glider = (props) => {
  const {
    type, perView, focusAt, breakpoints,
  } = props;
  const glideRef = useRef();
  const [glide, setGlide] = useState(null);

  useEffect(() => {
    setGlide(new Glide(glideRef.current, {
      type,
      perView,
      focusAt,
      breakpoints,
    }));
  }, []);

  if (glide) glide.mount();

  return (
    <div>
      <h2>Glider here</h2>
      <div ref={glideRef} className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">0</li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Glider.propTypes = {
//   type: PropTypes.string,
//   perView: PropTypes.number,
//   focusAt: PropTypes.string,
// };

Glider.defaultProps = {
  type: 'carousel',
  perView: 4,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
};

export default Glider;

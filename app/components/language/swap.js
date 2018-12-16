import React from 'react';

const SvgComponent = props => (
  <svg width="2em" height="2em" viewBox="0 0 18 14" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-3-5h24v24H-3z" />
      <path
        d="M3.99 6L0 10l3.99 4v-3H11V9H3.99V6zM18 4l-3.99-4v3H7v2h7.01v3L18 4z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgComponent;

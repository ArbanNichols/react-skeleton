import React from 'react';

export default function Data(props) {
  const { data } = props;

  return (
    <React.Fragment>
      <div>{data.name}</div>
    </React.Fragment>
  );
}

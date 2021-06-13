import React from 'react';

export default function Option(props) {
  const { value, text } = props;
  return <option value={value}>{text}</option>;
}

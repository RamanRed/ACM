import React from 'react';
import Card from './Card';
import i1 from '../assets/pikachu.jpg'
const Note = () => {
  return (
    <div>
      <Card
        image={i1}
        title="Hello"
        summary="dfkjdfnjfddfsj"
        details="dfsjdfsjlefdfd"
        pull_count="fsiudf"
      />
    </div>
  );
}

export default Note;

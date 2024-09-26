import { useEffect, useState } from 'react';
import './styles.css';

export default function CustomButton ({ text, link, id, animationStyle }) {
  const [animation, setAnimation] = useState('');

  // testing
  useEffect(() => {
    switch (animationStyle) {
      case 1:
        setAnimation('leftright');
        break;
      case 2:
        setAnimation('rightleft');
        break;
      default:
        setAnimation('');
        break;
    }
  }, []);

  return (
    <a
      href={link}
      id={id}
      type='button'
      className={`cbutton cbutton--${animation}`}
      style={{ width: `${text.length}ch` }}
    >
      {text}
    </a>
  );
}
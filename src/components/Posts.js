import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { tutorial } from '../utils/content';

function Posts() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <ul className="posts">
      {tutorial[locale].map((title) => (
        <li key={title}>
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
}

export default Posts;

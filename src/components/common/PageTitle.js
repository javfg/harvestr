import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PageTitle = ({ icon, title, extraTitle, description, size }) => (
  <>
    <div className={`row ${!description ? 'mb-4' : ''}`}>
      <div className="col">
        {(() => {
          const SizeTag = size;

          return (
            <SizeTag>
              <FontAwesomeIcon icon={icon} /> {title}&nbsp;
              <span>{extraTitle}</span>
            </SizeTag>
          );
        })()}
      </div>
    </div>
    {description && (
      <div className={`row ${description ? 'mb-4' : ''}`}>
        <div className="col">
          <p>{description}</p>
        </div>
      </div>
    )}
  </>
);


export default PageTitle;
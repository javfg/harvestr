import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PageTitle = ({ icon, title, extraTitle, description, size, marginBottom }) => {
  const mb = marginBottom ? marginBottom : 'mb-4';

  return (
    <>
      <div className={`row ${!description ? mb : ''}`}>
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
        <div className={`row ${description ? mb : ''}`}>
          <div className="col">
            <p className="text-muted">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};


export default PageTitle;
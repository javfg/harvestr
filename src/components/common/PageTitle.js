import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PageTitle = ({ icon, title, extraTitle, description, size, descriptionSize, margins }) => {
  const mb = margins ? margins : 'mb-2';

  return (
    <>
      <div className={`row ${!description ? mb : ''}`}>
        <div className="col">
          {(() => {
            const SizeTag = size;

            return (
              <SizeTag className="mb-0">
                <FontAwesomeIcon icon={icon} className="mw-2" /> {title}&nbsp;
                <span>{extraTitle}</span>
              </SizeTag>
            );
          })()}
        </div>
      </div>
      {description && (
        <div className={`row ${description ? mb : ''}`}>
          <div className="col">
            {(() => {
              const SizeTag = descriptionSize || 'p';

              return (
                <SizeTag className="text-muted">{description}</SizeTag>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
};


export default PageTitle;
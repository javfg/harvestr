import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


class Paginator extends React.Component {
  constructor (props) {
    super(props);
  }


  handleNavigate = (currentPage) => {
    this.props.pageChangeHandler(currentPage);
  }


  render() {
    const {
      handleNavigate,
      props: { currentPage, pageWindow, totalPages }
    } = this;

    // First and last indexes of paginator.
    let firstIndex = Math.max(0, (currentPage - pageWindow));
    let lastIndex = Math.min(currentPage + pageWindow + 1, Math.max(totalPages, (currentPage + pageWindow)));

    // If current page < pageWindow, add difference to last index.
    if (currentPage < pageWindow + 1) {
      lastIndex += pageWindow - currentPage;
    }

    // If current page + pageWindow > totalPages, subtract difference to first index.
    if (currentPage + pageWindow > totalPages - 1) {
      firstIndex -= pageWindow + currentPage + 1;
    }

    const linkArray = [...Array(totalPages).keys()].slice(firstIndex, lastIndex);

    return (
      <div className="row justify-content-between">
        <div className="col col-xs-12 col-sm-6 paginator">
          <ul className="pagination pagination-sm m-0">
            <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
              <a
                className="page-link paginator-link border-radius"
                href="#!"
                onClick={() => {handleNavigate(0)}}
              >
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </a>
            </li>
            <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
              <a
                className="page-link paginator-link border-radius"
                href="#!"
                onClick={() => {handleNavigate(Math.max(currentPage - 1, 0))}}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </a>
            </li>

            {
              linkArray.map(pageLink =>
                <li
                  key={`li-${pageLink}`}
                  className={`page-item paginator-link ${pageLink === currentPage ? 'active' : ''}`}
                >
                  <a
                    className={`page-link paginator-link border-radius ${pageLink === currentPage ? 'active' : ''}`}
                    href="#!"
                    onClick={() => {handleNavigate(pageLink)}}
                    key={`${pageLink}-navigate`}
                  >
                    {pageLink + 1}
                  </a>
                </li>
              )
            }

            <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
              <a
                className="page-link paginator-link border-radius" href="#!"
                onClick={() => {handleNavigate(Math.min(currentPage + 1, (totalPages - 1)))}}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
              <a
                className="page-link paginator-link border-radius" href="#!"
                onClick={() => {handleNavigate(totalPages - 1)}}
              >
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Paginator;

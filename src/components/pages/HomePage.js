import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faQuestionCircle, faBox, faLifeRing, faBug, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setHarvestPageField } from '../../actions/HarvestPage';
import { setItemList } from '../../actions/itemList';
import { setRankingDefinition } from '../../actions/RankingDefinition';
import { setSearchProfile } from '../../actions/searchProfile';

// Components.
import Badge from '../common/Badge';
import PageTitle from '../common/PageTitle';
import Tab from '../common/Tab';
import Tabs from '../common/Tabs';

// Demo data.
import { demoDetails } from '../../config/demoDetails';
import { demoItemList } from '../../config/demoItemList';
import { demoRankingDefinition } from '../../config/demoRankingDefinition';
import { demoSearchProfile } from '../../config/demoSearchProfile';

// Parsers.
import { parsers } from '../../engine/parsers/parsers';
import { setDetailsField } from '../../actions/Details';

// Utils.
import { successToast } from '../../utils/dialogs';


class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCitationTab: 1
    };
  }


  handleClickLoadDemoData = () => {
    const { setDetailsField, setHarvestPageField, setItemList, setRankingDefinition, setSearchProfile } = this.props;

    setDetailsField(demoDetails);
    setItemList(demoItemList);
    setRankingDefinition(demoRankingDefinition);
    setSearchProfile(demoSearchProfile);
    setHarvestPageField({loadItemListOk: true, loadSearchProfileOk: true});

    this.props.history.push('/harvest');
    successToast('Demo data loaded, explore!');
  };

  handleSelectTab = (currentCitationTab) => this.setState({currentCitationTab});


  render() {
    const {
      handleClickLoadDemoData,
      handleSelectTab,
      state: { currentCitationTab }
    } = this;

    const citationTitle='HARVESTR: Massive query service for life sciences';

    return (
      <div className="container-fluid my-4">
        <PageTitle
          icon={faInfoCircle}
          title="What is this?"
          margins="mb-2"
        />

        <div className="row mb-4">
          <div className="col">
            <span>
              Welcome to <strong>HARVESTR</strong>, a mass information mining service with for Life Sciences resources.
              This web application is a Final Project for the <a
                href="https://www.um.es/web/biologia/contenido/estudios/masteres/bioinformatica"
                rel="noopener noreferrer"
                target="_blank"
              >
                Master&apos;s Degree in Bioinformatics
              </a> in <a
                href="https://www.um.es"
                rel="noopener noreferrer"
                target="_blank"
              >
                Universidad de Murcia
              </a>.
            </span>
          </div>
        </div>

        <PageTitle
          icon={faQuestionCircle}
          title="What can I do?"
          margins="mb-2"
        />

        <div className="row mb-4">
          <div className="col">
            You can use Harvestr to quickly get information on a big list of items from different databases and online
            resources in one go. It has been tested with a list of proteins, but it works with anything.
          </div>
        </div>

        <PageTitle
          icon={faBox}
          title="What do I need?"
          margins="mb-2"
        />

        <div className="row mb-4">
          <div className="col">
            <span className="align-middle">
              You need a list of <Badge name="items" type="item" noTooltip margin="mx-1" /> of which you want data.
              Harvestr supports reading <strong>CSV</strong> with or without headers, or you can just paste a list
              of items, one per line.

              <div className="my-2" />

              You also need to know the sources of the data you want. Harvestr will let you create a <strong>Search
              profile</strong> that specifies <Badge name="queries" type="query" noTooltip margin="mx-1" /> to
              different resources, and inside each; you can define different
              <Badge name="fields" type="field" noTooltip margin="mx-1" /> to select only the parts of the resource
              you need. Inside those; you can even specify <Badge name="entries" type="entry" noTooltip margin="mx-1" />,
              in case you must extract more than one <Badge name="value" type="value" noTooltip margin="mx-1" /> in
              a single field.

              <div className="my-2" />

              Once you have defined the search profile, you can also specify a <strong>Ranking Definition</strong>,
              if you are interested in sorting the results according to a list of
              <Badge name="rules" type="rule" noTooltip margin="mx-1" /> using a <a
                href="https://en.wikipedia.org/wiki/Fuzzy_logic"
                rel="noopener noreferrer"
                target="_blank"
              >
                Fuzzy Logic
              </a> ranking algorithm.

              <div className="my-2" />

              Currently, the service supports extraction from the following formats:

              {parsers.map(parser =>
                <Badge
                  key={`format-${parser.name}`}
                  name={parser.name}
                  details={parser.details}
                  type="parser"
                />
              )}
            </span>
          </div>
        </div>


        <PageTitle
          icon={faLifeRing}
          title="How do I do it?"
          margins="mb-2"
        />
        <div className="row mb-4">
          <div className="col">
            <a
              href="#!"
              onClick={handleClickLoadDemoData}
            >
              Load demo data
            </a> and play around with it. The interface should be self-explanatory.

            <div className="my-1" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon={faBug} className="mr-2 text-primary" />You can direct any doubts, bugs or
            feature requests to the project&apos;s <a
              href="https://github.com/javfg/harvestr/issues"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>.

            <div className="my-1" />

            <FontAwesomeIcon icon={faQuoteRight} className="mr-2 text-primary" />If you use this service in your
            research, please consider <span className="text-primary">citing me</span>:

            <div className="card w-75 mx-5 mt-3">
              <div className="card-header">
                <Tabs handleClick={handleSelectTab} currentTab={currentCitationTab}>
                  <Tab caption="Plain" tabNumber={0} />
                  <Tab caption="BibTeX" tabNumber={1} />
                  {/* <Tab caption="EndNote" tabNumber={2} />
                  <Tab caption="RefMan" tabNumber={3} />
                  <Tab caption="RefWorks" tabNumber={4} /> */}
                </Tabs>
              </div>
              <div className="card-body">
                {(() => {
                  switch (currentCitationTab) {
                    case 0:
                      return (
                        <table>
                          <tbody>
                            <tr>
                              <td className="w-25 align-top">
                                <small className="text-muted">MLA</small>
                              </td>
                              <td>
                                <small className="mb-2">
                                  Ferrer, Javier, et al.
                                  &nbsp;&quot;{citationTitle}&quot;
                                  &nbsp;<a href="http://harvestr.meneillos.com/">http://harvestr.meneillos.com/</a>
                                  &nbsp;(2019)
                                </small>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25 align-top">
                                <small className="text-muted">APA</small>
                              </td>
                              <td>
                                <small className="mb-2">
                                  Ferrer, J., Luengo-Gil, Ginés (2019)
                                  &nbsp;{citationTitle}.
                                  &nbsp;<a href="http://harvestr.meneillos.com/">http://harvestr.meneillos.com/</a>
                                </small>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25 align-top">
                                <small className="text-muted">Chicago</small>
                              </td>
                              <td>
                                <small className="mb-2">
                                  Ferrer, Javier and Ginés Luengo-Gil.
                                  &quot;{citationTitle}.&quot;
                                  &nbsp;<a href="http://harvestr.meneillos.com/">http://harvestr.meneillos.com/</a>
                                </small>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25 align-top">
                                <small className="text-muted">Harvard</small>
                              </td>
                              <td>
                                <small className="mb-2">
                                  Ferrer, J., Luengo-Gil, G., 2019.
                                  &nbsp;{citationTitle}.
                                  &nbsp;<a href="http://harvestr.meneillos.com/">http://harvestr.meneillos.com/</a>
                                </small>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25 align-top">
                                <small className="text-muted">Vancouver</small>
                              </td>
                              <td>
                                <small className="mb-2">
                                  Ferrer J, Luengo-Gil G.
                                  &nbsp;{citationTitle}.
                                  &nbsp;<a href="http://harvestr.meneillos.com/">http://harvestr.meneillos.com/</a>
                                  &nbsp;2019 Jul 8.
                                </small>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    case 1:
                      return (
                        <p className="text-monospace">
                          &#64;Manual&#123;jferrer2019,<br/>
                          &nbsp;&nbsp;title = &#123;{citationTitle}&#125;,<br/>
                          &nbsp;&nbsp;author = &#123;Javier Ferrer, Ginés Luengo-Gil&#125;,<br/>
                          &nbsp;&nbsp;address = &#123;Cambridge, UK&#125;,<br/>
                          &nbsp;&nbsp;year = &#123;2019&#125;,<br/>
                          &nbsp;&nbsp;url = &#123;http://harvestr.meneillos.com/&#125;<br/>
                          &#125;
                        </p>
                      );
                    case 2:
                      return <p>TAB 2</p>
                    case 3:
                      return <p>TAB 3</p>
                    case 4:
                      return <p>TAB 4</p>
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


//
// Redux mapping functions.
//
const mapDispatchToProps = (dispatch) => ({
  setDetailsField: (newState) => dispatch(setDetailsField(newState)),
  setHarvestPageField: (newState) => dispatch(setHarvestPageField(newState)),
  setItemList: (itemList) => dispatch(setItemList(itemList)),
  setRankingDefinition: (rankingDefinition) => dispatch(setRankingDefinition(rankingDefinition)),
  setSearchProfile: (searchProfile) => dispatch(setSearchProfile(searchProfile))
});


export default connect(undefined, mapDispatchToProps)(HomePage);


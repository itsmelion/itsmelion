import { experiences } from 'data/experiences';
import { PureComponent } from 'react';
import Modal from 'react-modal';
import './Timeline.scss';

import {Experience} from '../Experience/Experience';
import Company from './Company/Company';

Modal.setAppElement('#root');

const modalStyling = {
  overlay: {
    backgroundColor: 'rgba(51, 51, 102, .75)',
  },

  content: {
    top: 'unset',
    bottom: 0,
    left: '5%',
    right: '5%',
    color: 'black',
  },
};

class Timeline extends PureComponent {
  years = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  state = {
    openDialog: false,
    companyIndex: 0,
  };

  toggleDetails = (index) => {
    this.setState({
      openDialog: true,
      companyIndex: index,
    });
  };

  handleOpenModal = () => {
    this.setState({ openDialog: true });
  };

  handleCloseModal = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const height = `${(experiences.length + 1) * 2 + 6}rem`;
    const { companyIndex, openDialog } = this.state;
    const yearWidth = 125;
    return (
      <>
        <section className="resume-section" id="Timeline" style={{ height }}>
          {this.years.map((y, i) => (
            <span key={y} className="marker" style={{ left: `${i * yearWidth}px` }}>
              20
              {y}
            </span>
          ))}
          {experiences.map((company, top) => (
            <Company
              key={company.name}
              company={company}
              toggle={this.toggleDetails}
              top={top}
              yearWidth={yearWidth}
            />
          ))}
        </section>

        <Modal
          bodyOpenClassName="modal-open"
          htmlOpenClassName="modal-open"
          isOpen={openDialog}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          shouldFocusAfterRender
          shouldReturnFocusAfterClose
          style={modalStyling}>
          <Experience exp={experiences[companyIndex]} />
        </Modal>
      </>
    );
  }
}

export default Timeline;

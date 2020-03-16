import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import experiences from 'data/experiences';
import './Timeline.scss';
import Company from './Company/Company';
import Experience from '../Experience/Experience';

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
        <section id="Timeline" style={{ height }} className="resume-section">
          {this.years.map((y, i) => (
            <span style={{ left: `${i * yearWidth}px` }} className="marker" key={y}>
              20{y}
            </span>
          ))}
          {experiences.map((company, top) => (
            <Company
              top={top}
              company={company}
              key={company.name}
              yearWidth={yearWidth}
              toggle={this.toggleDetails}
            />
          ))}
        </section>

        <Modal
          shouldCloseOnEsc
          shouldFocusAfterRender
          shouldCloseOnOverlayClick
          shouldReturnFocusAfterClose
          onRequestClose={this.handleCloseModal}
          isOpen={openDialog}
          style={modalStyling}
          bodyOpenClassName="modal-open"
          htmlOpenClassName="modal-open"
        >
          <Experience exp={experiences[companyIndex]} />
        </Modal>
      </>
    );
  }
}

export default Timeline;

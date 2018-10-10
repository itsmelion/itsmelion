import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import './Timeline.scss';
import Company from './Company/Company';
import Experience from '../Experience/Experience';
import experiences from '../../../data/experiences';

const yearsFromNow = (y = 2016, m = 0) => {
  let year = parseInt(y, 10);
  const month = parseInt(m, 10);
  if (month >= 6) { year += 1; }

  return Math.ceil((new Date() - new Date(year, month, 0)) / 1000 / 60 / 60 / 24 / 365);
};

Modal.setAppElement('#root');
const modalStyling = {
  overlay: {
    backgroundColor: 'rgba(51, 51, 102, .75)',
  },

  content: {
    top: 'unset',
    bottom: 0,
    color: 'black',
  },
};

class Timeline extends PureComponent {
  constructor(props) {
    super(props);
    this.years = [2, 3, 4, 5, 6, 7, 8]; // 201'2' till 201'8'
    this.state = {
      openDialog: false,
      companyIndex: 0,
    };
  }

  toggleDetails = (index) => {
    this.setState({
      openDialog: true,
      companyIndex: index,
    });
  }

  handleOpenModal = () => {
    this.setState({ openDialog: true });
  }

  handleCloseModal = () => {
    this.setState({ openDialog: false });
  }

  render() {
    const height = `${(experiences.length + 1) * 1.5 + 3.25}rem`;
    const { companyIndex, openDialog } = this.state;

    return (
      <>
        <section id="Timeline" style={{ height }} className="resume-section">
          {this.years.map((y, i) => (
            <span style={{ left: `${i * 150}px` }} className="marker" key={y}>201{y}</span>
          ))}
          {experiences.map((company, top) => (
            <Company
              top={top}
              company={company}
              key={company.name}
              toggle={this.toggleDetails}
            />
          ))}
        </section>

        <Modal
          shouldCloseOnOverlayClick
          onRequestClose={this.handleCloseModal}
          isOpen={openDialog}
          style={modalStyling}
        >
          <Experience experience={experiences[companyIndex]} />
        </Modal>
      </>
    );
  }
}

export default Timeline;

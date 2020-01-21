import React, { PureComponent } from 'react';
import './Certifications.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCertificate, faChevronDown, faEye } from '@fortawesome/pro-duotone-svg-icons';
import Button from '../Button/Button';

class Certifications extends PureComponent {
  state = {
    open: false,
  };

  toggle = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { open } = this.state;
    const { data: certification } = this.props;

    return (
      <article className="column item" flex="nogrow" key={certification.ref}>
        <div align="between center" row="nowrap">
          <div flex="" className="cert" row="nowrap" align="center center">
            <FontAwesomeIcon icon={faFileCertificate} />
            <h6 flex="">
              {certification.name}
              <sub>provided by Udemy</sub>
            </h6>
          </div>

          <Button
            flex="none"
            title="View Certificate"
            theme="outline view"
            link={certification.ref}
            style={{ 'background-color': 'transparent' }}
          >
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </div>
        <span flex="" />
        <button
          type="button"
          className={`see-more ${open}`}
          onClick={this.toggle}
        >
          <FontAwesomeIcon icon={faChevronDown} />
          what was learned?
        </button>

        <ul flex="none" className={`materias ${open}`}>
          {certification.disciplines.map((content) => (
            <li key={content}>{content}</li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Certifications;

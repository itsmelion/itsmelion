import React, { PureComponent } from 'react';
import './Certifications.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEye, faAward } from '@fortawesome/free-solid-svg-icons';
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
      <article key={certification.ref} className="column item" flex="nogrow">
        <div align="between center" row="nowrap">
          <div align="center center" className="cert" flex="" row="nowrap">
            <FontAwesomeIcon icon={faAward} />
            <h6 flex="">
              {certification.name}
              <sub>provided by Udemy</sub>
            </h6>
          </div>

          <Button
            flex="none"
            link={certification.ref}
            style={{ 'background-color': 'transparent' }}
            theme="outline view"
            title="View Certificate">
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </div>
        <span flex="" />
        <button
          className={`see-more ${open}`}
          onClick={this.toggle}
          type="button">
          <FontAwesomeIcon icon={faChevronDown} />
          what was learned?
        </button>

        <ul className={`materias ${open}`} flex="none">
          {certification.disciplines.map((content) => (
            <li key={content}>{content}</li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Certifications;

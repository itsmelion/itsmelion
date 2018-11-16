import React, { PureComponent } from 'react';
import './Certifications.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faChevronDown,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const certifications = [
  {
    ref: '',
    name: 'Advanced concepts of JavaScript',
    provider: 'Udemy',
    disciplines: [
      'Understanding Closures',
      'Execution contexts',
      'Function Prototyping',
    ],
  },
];

class Certifications extends PureComponent {
  state = {
    open: false,
  };

  toggle = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { open } = this.state;

    return (
      <section id="Certifications">
        <h4>Certifications</h4>

        <div row="" align="start">
          {certifications.map(certification => (
            <article className="item" flex="initial" key={certification.ref}>
              <div row="nowrap">
                <div className="cert" row="nowrap" align="center center">
                  <FontAwesomeIcon icon={faCertificate} />
                  <h6>
                    {certification.name}
                    <sub>provided by Udemy</sub>
                  </h6>
                </div>

                <Button
                  title="View Certificate"
                  theme="outline"
                  link={certification.ref}
                >
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </div>

              <button
                type="button"
                className={`see-more ${open}`}
                onClick={this.toggle}
              >
                <FontAwesomeIcon icon={faChevronDown} />
                what was learned?
              </button>

              <ul className={`materias ${open}`}>
                {certification.disciplines.map(content => (
                  <li key={content}>{content}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Certifications;

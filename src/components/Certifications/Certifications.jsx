import React, { PureComponent } from 'react';
import './Certifications.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const certifications = [
  {
    ref: 'https://www.udemy.com/certificate/UC-FJV8DRT2/',
    // eslint-disable-next-line no-script-url
    name: 'Javascript: Understanding the Weird Parts',
    provider: 'Udemy',
    extension: '11.5 hours',
    disciplines: [
      'Syntax Parsers, Execution Contexts, and Lexical Environments',
      'Creation and Hoisting',
      'The Scope Chain',
      'Asynchronous Callbacks',
      'Operator Precedence and Associativity',
      'Coercion',
      'By Value vs By Reference',
      'Object Functions And This',
      'Function Overloading',
      'Immediately Invoked Functions Expressions (IIFEs)',
      'Understanding Closures',
      'Function Factories, Closures and Callbacks',
      'call(), apply(), and bind()',
      'Functional Programming',
      'Classical vs Prototypal Inheritance',
      'Reflection and Extend',
    ],
  },

  {
    ref: 'https://www.udemy.com/certificate/UC-AOUWOOM1/',
    name: 'Angular 2 From The Ground Up',
    provider: 'Udemy',
    extension: '11.5 hours',
    disciplines: [
      'Concepts of Components, Templates, Services, and Dependency Injection',
      'Working with Templates, data binding and event handling',
      'Validating forms using the Angular Forms module',
      'Making HTTP requests and integrating with a backend using a REST API',
      'Setting up a production-ready build workflow using NPM and Webpack',
      'Handling navigation in a single-page application with the Angular Router',
      'Writing unit tests with Jasmine and running them with Karma',
    ],
  },

  {
    ref: 'https://www.udemy.com/certificate/UC-5EANJJIY/',
    name: 'NodeJS & MongoDB',
    provider: 'Udemy',
    extension: '15.5 hours',
    disciplines: [
      'Integrate MySQL and MongoDB',
      'Design Pattern MVC',
      'Express Framework, and EJS as view engine',
      'RESTful APIs',
      'Body-parser: and requests parameters',
      'Express-validator: validating your data',
      'Session and autenthication',
      'Cryptography MD5 with Crypto',
      'Connect-Multiparty: uploading files',
      'Websockets',
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
            <article className="item" flex="nogrow" key={certification.ref}>
              <div align="between center" row="nowrap">
                <div
                  flex=""
                  className="cert"
                  row="nowrap"
                  align="center center"
                >
                  <FontAwesomeIcon icon={faCertificate} />
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

              <ul flex="" className={`materias ${open}`}>
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

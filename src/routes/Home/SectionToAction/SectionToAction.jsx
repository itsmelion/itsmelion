import React from 'react';
import Button from 'components/Button/Button';
import { contact } from 'data/hero';
import { lang } from 'utils';
import './SectionToAction.scss';

const texts = {
  book: {
    en: 'Book a Call',
    pt: 'Agendar uma conversa',
    he: 'Book a Call',
  },
};

const SectionToAction = () => (
  <section align="around center" id="SectionToAction" row="">
    <Button link={contact.agenda}>
      {lang(texts.book)}
    </Button>
  </section>
);

export default SectionToAction;

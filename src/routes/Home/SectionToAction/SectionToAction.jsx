import React from 'react';
import Button from '../../../components/Button/Button';
import './SectionToAction.scss';
import { contact } from '../../../data/hero';

const texts = {
  book: {
    en: 'Book a Call',
    pt: 'Agendar uma conversa',
    he: 'Book a Call',
  },
};

const SectionToAction = () => (
  <section id="SectionToAction" row="" align="around center">
    <Button link={contact.agenda}>
      {texts.book[window.lang]}
    </Button>
  </section>
);

export default SectionToAction;

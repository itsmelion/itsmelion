import styled, { css } from 'styled-components';

const stripe = css`
  border-left: 2pt solid var(--text, rgba(0, 0, 0, .1));
  padding-left: .5em;
`;

export const List = styled.ul`
  ${({ strip }) => strip && stripe}
`;

export const Item = styled.li``;

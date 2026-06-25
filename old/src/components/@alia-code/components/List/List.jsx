import React, { memo } from 'react';
import * as S from './List.styled';

const List = ({ options, children, ...other }) => (
  <S.List {...options} {...other}>
    {children}
  </S.List>
);

export default memo(List);

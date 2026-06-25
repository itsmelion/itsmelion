import React, { memo } from 'react';
import * as S from './List.styled';

const Item = ({ options, children, ...other }) => (
  <S.Item {...options} {...other}>{children}</S.Item>
);

export default memo(Item);

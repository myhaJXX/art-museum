import { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CSSSearchCard = styled.article`
  padding: 10px;
  border-bottom: 2px solid #e4e4e4;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.01);
  }
`;

interface IProps {
  id: number;
  title: string | null;
}

const StyledSearchCard: FC<IProps> = ({ id, title }) => {
  const nav: NavigateFunction = useNavigate();
  return <CSSSearchCard onClick={() => nav(`/${id}`)}>{title}</CSSSearchCard>;
};

export default StyledSearchCard;

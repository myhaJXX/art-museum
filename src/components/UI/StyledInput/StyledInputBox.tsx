import { FC, useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { getFilteredArts } from '@utils/api/getFilteredArts';
import { useStore } from '@utils/useStore';
import { TZodFiltered } from '@models/types/zodFilterd';
import styled from 'styled-components';
import StyledInputData from './StyledInputData';

interface CSSInputProps {
  $color: string;
  $active: boolean;
}

const InputCss = styled.input`
  padding-left: 10px;
  height: 50px;
  width: 400px;
  border: 0px;
  border-right: 2px solid #ccc;
  border-left: 2px solid #ccc;
  outline: none;
  cursor: text;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

const InputCssBox = styled.div<CSSInputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > div {
    top: 50px;
    position: absolute;
    max-height: 500px;
    width: 400px;
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    background-color: #fff;
    z-index: 55;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ $color }) => $color};
    }
  }
`;

const StyledInputBox: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    query: string;
  }>();

  const Context = useStore();

  const [searchData, setSearchData] = useState<TZodFiltered[]>([]);

  const [search, setSearch] = useState<string>('');
  const timeOutRef = useRef<null | NodeJS.Timeout>();
  const changeSearch = (str: string): void => {
    if (timeOutRef.current) clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      if (str) setSearch(str);
      else setActive(false);
    }, 1000);
  };

  useEffect(() => {
    changeArts();
  }, [search]);

  const [active, setActive] = useState<boolean>(false);

  const changeArts = async () => {
    await getFilteredArts(Context.PageState.active, search).then(data =>
      setSearchData(search ? [...data.data] : [])
    );
  };

  const unBlur = (): void => {
    setTimeout(() => setActive(false), 250);
  };

  useEffect(()=>{
    setActive(errors.query ? false : true)
  }, [errors.query])

  return (
    <InputCssBox $color={Context.colorAdd} $active={active}>
      <form>
        <InputCss
          placeholder="Enter a article"
          onFocus={() => setActive(errors.query ? false : true)}
          {...register('query', {
            required: 'Please enter a search query',
            pattern: {
              value: /^[A-Za-z0-9\s]+$/,
              message: 'Use English letters please',
            },
            minLength: {
              value: 3,
              message: 'Minimal length of query - 3 symbols',
            },
            onChange: handleSubmit(data => changeSearch(data.query)),
            onBlur: () => unBlur(),
          })}
        />
        {errors.query && <p>{errors.query.message}</p>}
      </form>
      <StyledInputData data={searchData}/>
    </InputCssBox>
  );
};

export default StyledInputBox;

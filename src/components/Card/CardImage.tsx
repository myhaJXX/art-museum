import { Dispatch, FC, SetStateAction } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface IProps {
  id: number;
  image_id: string | null;
  onLoad?: Dispatch<SetStateAction<boolean>>;
}

const CardImage: FC<IProps> = ({ id, image_id, onLoad }) => {
  const nav: NavigateFunction = useNavigate();
  return (
    <img
      loading="lazy"
      src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
      alt=""
      onClick={() => nav(`/${id}`)}
      onLoad={() => {
        if (onLoad) onLoad(false);
      }}
    />
  );
};

export default CardImage;

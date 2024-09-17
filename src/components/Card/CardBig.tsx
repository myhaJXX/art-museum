import { FC, useEffect, useState } from 'react';
import StyledCardBig from '@UI/StyledCardBig';
import StyledLoader from '@UI/StyledLoader';
import { useStore } from '@utils/useStore';
import { TZod } from '@models/types/zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as RegularHeart } from '@fortawesome/free-regular-svg-icons';
import CardImage from './CardImage';

const checkLocalId = require('@utils/checkLocalId');

const Card: FC<TZod & { featured: number[] }> = data => {
  const Context = useStore();
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const bool: boolean = checkLocalId(data.id, data.featured);
    if (bool) setLiked(true);
  }, []);

  return (
    <StyledCardBig>
      {loading && <StyledLoader />}
      <CardImage id={data.id} image_id={data.image_id} onLoad={setLoading} />
      <div>
        <div>
          <h4 style={{ color: Context.colorAdd }}>{data.title}</h4>
          <h4 style={{ fontSize: '1em' }}>{data.artist_title}</h4>
        </div>
        <FontAwesomeIcon
          icon={liked ? SolidHeart : RegularHeart}
          onClick={() => {
            Context.FeaturedDispatch(
              liked
                ? { type: 'REMOVE_FEATURED', payload: data.id }
                : { type: 'ADD_FEATURED', payload: { ...data } }
            );
            setLiked(!liked);
          }}
          color={liked ? '#FF0000' : '#000'}
        />
      </div>
      {liked && (
        <FontAwesomeIcon
          icon={SolidHeart}
          color="#FF0000"
          onClick={() => {
            setLiked(false);
            Context.FeaturedDispatch({
              type: 'REMOVE_FEATURED',
              payload: data.id,
            });
          }}
        />
      )}
    </StyledCardBig>
  );
};

export default Card;

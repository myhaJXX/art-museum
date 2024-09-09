import React, { FC, useContext, useState } from 'react';
import { TZod } from '../../models/zod';
import StyledCardBig from '../UI/StyledCardBig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as RegularHeart } from '@fortawesome/free-regular-svg-icons';
import Store from '../../store/store';

const Card: FC<TZod> = data => {
  const Context = useContext(Store);

  const [liked, setLiked] = useState<boolean>(false);
  return (
    <StyledCardBig>
      <img
        loading="lazy"
        src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
        alt=""
      />
      <div>
        <div>
          <h4 style={{ color: Context?.colorAdd }}>{data.title}</h4>
          <h4 style={{ fontSize: '1em' }}>{data.artist_title}</h4>
        </div>
        <FontAwesomeIcon
          icon={liked ? SolidHeart : RegularHeart}
          onClick={() => {
            Context?.FeaturedDispatch(
              liked
                ? { type: 'REMOVE_FEATURED', payload: data.id }
                : { type: 'ADD_FEATURED', payload: { ...data } }
            );
            setLiked(!liked);
          }}
          color={liked ? '#FF0000' : '#000'}
        />
      </div>
      {liked ? (
        <FontAwesomeIcon
          icon={SolidHeart}
          color="#FF0000"
          onClick={() => {
            setLiked(false);
            Context?.FeaturedDispatch({
              type: 'REMOVE_FEATURED',
              payload: data.id,
            });
          }}
        />
      ) : (
        <></>
      )}
    </StyledCardBig>
  );
};

export default Card;

import React, { FC, useEffect, useState } from 'react';
import { TZod } from '@models/zod';
import StyledCardBig from '@UI/StyledCardBig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as RegularHeart } from '@fortawesome/free-regular-svg-icons';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import StyledLoader from '@UI/StyledLoader';
import { useStore } from '@utils/useStore';

const checkLocalId = require('@utils/checkLocalId');

const Card: FC<TZod & { featured: number[] }> = data => {
  const Context = useStore();
  const nav: NavigateFunction = useNavigate();
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const bool: boolean = checkLocalId(data.id, data.featured);
    if (bool) setLiked(true);
  }, []);

  return (
    <StyledCardBig>
      {loading && <StyledLoader />}
      <img
        onClick={() => nav(`/${data.id}`)}
        loading="lazy"
        src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
        alt=""
        onLoad={() => setLoading(false)}
      />
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

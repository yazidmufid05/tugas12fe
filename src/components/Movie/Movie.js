    import React from 'react';
    import styled from 'styled-components';

    const Movie = (props) => {
        const { title, date, image } = props
        const url_image = `https://image.tmdb.org/t/p/w300/${image}`
        return (
        <MovieStyle>
            <img 
                className="movie__image"
                src={url_image}
                alt=""
            />
                <h3 className="movie__title">{title}</h3>
                <p className="movie__date">{date}</p>
                
        </MovieStyle>
        );
    }

    const MovieStyle = styled.div`
        margin-bottom: 1rem;

        .movie__image {
            border-radius: 25px
            max-width: 100px;
            height: auto;
            margin-bottom; 1rem;
        }

        .movie__title {
            color: #473144
            font-size: 1.95rem;
            margin-bottom: 0.5rem;
        }

        .movie__date {
            color: #64748b;
        }

        @media (min-width: 768px) {
            flex-basis: 50%
        }

        @media (min-width: 992px) {
            felx-basis: 25px;
            padding: 1rem;
        }
    `

    export default Movie;
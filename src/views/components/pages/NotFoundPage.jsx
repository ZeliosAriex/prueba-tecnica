import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import notFoundSVG from '../../../resources/images/404.svg'
import { mediaQueries } from '../../../styles/mediaQueries'
import Title from '../common/Title'
import Button from '../common/Button'
import MainContainer from '../common/MainContainer'

const Styled404 = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    max-width: 28.125rem;
    margin-bottom: 2rem;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .btn-not-found {
    background: ${(p) => p.theme.notFoundBtnColor};
    color: #fff;
    margin-top: 2rem;
    font-size: 1rem;
    width: 100%;

    &:hover {
      background: ${(p) => p.theme.notFoundBtnColorHover};
    }
  }

  @media ${mediaQueries.sm} {
    .btn-not-found {
      width: auto;
    }
  }

  @media ${mediaQueries.md} {
    img {
      max-width: 37.5rem;
    }
    .title {
      font-size: 1.9rem;
    }

    .btn-not-found {
      font-size: 1.2rem;
    }
  }

  @media ${mediaQueries.xl} {
    img {
      max-width: 53.125rem;
      margin-bottom: 3rem;
    }
    .title {
      font-size: 2.3rem;
    }

    .btn-not-found {
      margin-top: 2.3rem;
      font-size: 1.4rem;
    }
  }
`

const NotFoundPage = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const handleReturnSafeRoute = () => history.push('/')

  return (
    <Styled404>
      <Helmet title={t('documentHeadTitles.notFound')} />
      <img src={notFoundSVG} alt={t('documentHeadTitles.notFound')} />
      <Title className='title'>{t('pages.notFound.title')}</Title>

      <Button
        onClick={handleReturnSafeRoute}
        label={t('pages.notFound.goBackBtn')}
        className='btn-not-found'
      />
    </Styled404>
  )
}

export default NotFoundPage

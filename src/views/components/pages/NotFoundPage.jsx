import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import notFoundSVG from '../../../resources/images/404.svg'
import { mediaQueries } from '../../../styles/mediaQueries'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Styled404>
      <Helmet title={t('documentHeadTitles.notFound')} />
      <img src={notFoundSVG} alt={t('documentHeadTitles.notFound')} />
      <h1 className='title'>{t('pages.notFound.title')}</h1>
    </Styled404>
  )
}

const Styled404 = styled.div`
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

  @media ${mediaQueries.md} {
    img {
      max-width: 37.5rem;
    }
    .title {
      font-size: 1.9rem;
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
  }
`

export default NotFoundPage

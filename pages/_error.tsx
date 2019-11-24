import { useEffect, useState } from 'react';
import { NextPageContext, NextPage } from 'next';
import API from '../utils/API';
import Link from 'next/link';
import Layout from '../components/Layout';
import TextWrapper from '../components/TextWrapper';

const LinkToWord: React.FunctionComponent<{ word: string }> = ({ word }) => (
  <li>
    <Link href="/ord/[word]" as={`/ord/${word}`}>
      <a>{word}</a>
    </Link>
  </li>
);

export const WordErrorPage: NextPage<{ statusCode: number, word: string }> = ({ statusCode, word }) => {
  const [similiarWords, setSimiliarWords] = useState([]);

  useEffect(() => {
    API.getData(`/similiar/${word}`)
      .then(res => setSimiliarWords(res.data))
      .catch(err => console.log(err))
  }, []);

  return <Layout title={`Kunde inte hitta "${word}"!`} description="Hittade inte ett sökresultat" shouldBeIndexed={false}>
    <TextWrapper>
      <h1>Vi hittade inte "{word}" :(</h1>
      <p>Det går att söka igen genom att gå tillbaka till <Link href={"/ord"}><a>{"sök"}</a></Link>.</p>

      {similiarWords.length > 0 && <>
        <p>Eller... menade du kanske något av följande?</p>
        <ul>{similiarWords.map(w => <LinkToWord key={w} word={w} />)}</ul>
      </>}
    </TextWrapper>
  </Layout>
}

const ErrorPage = ({ statusCode }: { statusCode: number }) => {

  if (statusCode) {
    return <Layout title={`${statusCode} error`} description={`${statusCode} error page`} shouldBeIndexed={false}>
      <TextWrapper>
        <h1> Error {statusCode} | Sidan hittades ej </h1>
        <p>Gå tillbaka till <Link href={"/"}><a>{"huvudsidan"}</a></Link></p>
      </TextWrapper>
    </Layout>
  }

  return <Layout title={`Internt fel`} description={`Internt fel`} shouldBeIndexed={false}>
    <TextWrapper>
      <h1>Internt fel</h1>
      <p>Gå tillbaka till <Link href={"/"}><a>{"huvudsidan"}</a></Link></p>
    </TextWrapper>
  </Layout>
}

ErrorPage.getInitialProps = ({ res, err, req }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (req && res && req.url) {
    let urlParts = req.url.split('?')
    if (urlParts[0].endsWith('/')) {
      urlParts[0] = urlParts[0].substring(0, urlParts[0].length - 1)
      res.writeHead(301, { Location: urlParts.join('?') })
      res.end()
    }
  }


  return { statusCode }
}

export default ErrorPage
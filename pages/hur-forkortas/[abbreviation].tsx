import { NextPage } from 'next';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';

type Props = {
  error: boolean,
  data: {
    word: string,
    abbreviation: string,
    example: string
  }
}

const Abbreviation: NextPage<Props> = ({ error, data }) => {

  if (error) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout title={`Hur förkortas ${data.word}?`} 
            description={`Vad är förkortningen till ${data.word}? Här får du svaret till hur du förkortar ${data.word} korrekt.`}>

            <h1>Vad är förkortningen för "{data.word}"?</h1>
            <p> Den korrekta förkortningen för "<b>{data.word}</b>" är <b>{data.abbreviation}</b></p>

            <h2>Vad betyder <b>{data.abbreviation}</b>?</h2>
            <p><b>{data.abbreviation}</b> betyder <b>{data.word}</b> eftersom det är ordets förkortning.</p>

            <h2>Exempelmening för <b>{data.abbreviation}</b></h2>
            <p>{data.example}</p>
    </Layout>
  )

};

Abbreviation.getInitialProps = async function({ res, query }) {
  const fetchRes = await fetch(`http://localhost:3001/abbreviations/${query.abbreviation}`);
  const data = await fetchRes.json();

  // This ensure we return a 404 status code and not 200 if error occurs
  if (fetchRes.status === 404 && res) {
    res.statusCode = 404;
  }

  return { 
    error: fetchRes.status === 404,
    data
  };
};

export default Abbreviation;

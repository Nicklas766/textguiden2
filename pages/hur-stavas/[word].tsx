import { NextPage } from 'next';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';

const capFirstChar = (str: string) => str ? str[0].toUpperCase() + str.slice(1) : '';

type Props = {
  error: boolean,
  data: {
    correct: string,
    tag: string,
    wrong: string,
    information: string
  }
}

const SpellingError: NextPage<Props> = ({ error, data }) => {

  if (error) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout title={`Hur stavas ${data.wrong}?`} 
            description={`${capFirstChar(data.wrong)} är en felstavning. Här får du svaret till hur du stavar ${data.wrong} rätt.`}>

        <h1>Är {data.wrong} rättstavat?</h1>
        <p>Nej <b>{data.wrong}</b> är inte rättstavat. Det är däremot en vanlig felstavning.</p>

        <h2>{data.wrong} eller {data.correct}?</h2>
        <p><b>{data.correct}</b> är den rätta stavningen medan <b>{data.wrong}</b> är en felstavning.</p>

        <h2>Hur används ordet {data.correct}?</h2>
        <p>{data.information}</p>

    </Layout>
  )

};

SpellingError.getInitialProps = async function({ res, query }) {
  const fetchRes = await fetch(`http://localhost:3001/spelling-error/${query.word}`);
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

export default SpellingError;

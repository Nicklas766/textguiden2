import { NextPage } from 'next';
import Layout from '../../components/Layout';
import ErrorPage from '../_error';
import TextWrapper from '../../components/TextWrapper';
import dynamic from 'next/dynamic';
const SearchBar = dynamic(() => import('../../components/SearchBar'));
import API from '../../utils/API';

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
      <TextWrapper>
        <h1>Är {data.wrong} rättstavat?</h1>
        <p>Nej <b>{data.wrong}</b> är inte rättstavat. Det är däremot en vanlig felstavning.</p>

        <h2>{data.wrong} eller {data.correct}?</h2>
        <p><b>{data.correct}</b> är den rätta stavningen medan <b>{data.wrong}</b> är en felstavning.</p>

        <h2>Hur används ordet {data.correct}?</h2>
        <p>{data.information}</p>

        <SearchBar />
      </TextWrapper>
    </Layout>
  )

};

SpellingError.getInitialProps = async ({ res, query }) => await API.getDataErrorFirst(res, `/spelling-error/${query.word}`);

export default SpellingError;
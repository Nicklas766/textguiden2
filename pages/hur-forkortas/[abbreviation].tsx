import { NextPage } from 'next';
import Layout from '../../components/Layout';
import ErrorPage from '../_error';
import TextWrapper from '../../components/TextWrapper';
import API from '../../utils/API';

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

      <TextWrapper>
        <h1>Vad är förkortningen för "{data.word}"?</h1>
        <p> Den korrekta förkortningen för "<b>{data.word}</b>" är <b>{data.abbreviation}</b></p>

        <h2>Vad betyder <b>{data.abbreviation}</b>?</h2>
        <p><b>{data.abbreviation}</b> betyder <b>{data.word}</b> eftersom det är ordets förkortning.</p>

        <h2>Exempelmening för <b>{data.abbreviation}</b></h2>
        <p>{data.example}</p>
      </TextWrapper>
    </Layout>
  )

};

Abbreviation.getInitialProps = async ({ res, query }) => await API.getDataErrorFirst(res, `/abbreviations/${query.abbreviation}`);

export default Abbreviation;
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import TextWrapper from '../../components/TextWrapper';
import { WordErrorPage } from '../_error';
import Link from 'next/link';
import API from '../../utils/API';

type Props = {
  error: boolean,
  data: {
    word: string,
    text: string,
    details: [],
    forms: [],
    synonyms: [],
    _optional_: string,
  }
}

const ConditionalShowDiv: React.FunctionComponent<{ visible: boolean }> = ({ visible, children }) => visible ? <div>{children}</div> : null;

const WordInfo: NextPage<Props> = ({ error, data }) => {

  if (error) {
    return <WordErrorPage statusCode={404} word={data._optional_} />
  }

  return (
    <Layout title={`Hur används ordet "${data.word}"?`} description={`${data.word} är ett ord. Men hur används det? Här får du information angående hur du använder ${data.word}.`}>
      <TextWrapper>

        <h1>{data.word}</h1>
        <p>{data.text}</p>

        <ConditionalShowDiv visible={data.details.length > 0}>
          <h2>Mer om ordet <i>{data.word}</i></h2>
          <ul>
            {data.details.map((info, index) => <li key={index}>{info}</li>)}
          </ul>
        </ConditionalShowDiv>

        <ConditionalShowDiv visible={data.forms.length > 0}>
          <h2>Hur böjs <i>{data.word}</i>?</h2>
          <ul>
            {data.forms.map(form =>
              <li key={form}>
                <Link href="/ord/[word]" as={`/ord/${form}`}>
                  <a>{form}</a>
                </Link>
              </li>)}
          </ul>
        </ConditionalShowDiv>

        <ConditionalShowDiv visible={data.synonyms.length > 0}>
          <h2>Synonymer till <i>{data.word}</i></h2>
          <ul>
            {data.synonyms.map(syn =>
              <li key={syn}>
                <Link href="/ord/[word]" as={`/ord/${syn}`}>
                  <a>{syn}</a>
                </Link>
              </li>)}
          </ul>
        </ConditionalShowDiv>

        <style jsx>{`
          h1 { border-bottom: solid 1.5px silver; }
          h2 { border-bottom: solid 1px silver; }
        `}</style>
      </TextWrapper>
    </Layout>
  )
};

WordInfo.getInitialProps = async ({ res, query }) => await API.getDataErrorFirst(res, `/word/${query.word}`, query.word);

export default WordInfo;
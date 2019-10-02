import { NextPage } from 'next';
import Layout from '../../components/Layout';
import TextWrapper from '../../components/TextWrapper';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';
import Link from 'next/link';

type Props = {
  error: boolean,
  data: {
    word: string,
    text: string,
    details: [],
    forms: [],
  }
}

const ConditionalShowDiv: React.FunctionComponent<{visible: boolean}> = ({ visible, children }) => visible ? <div>{children}</div> : null;

const WordInfo: NextPage<Props> = ({ error, data }) => {

  if (error) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout title={`${data.word} - hur används ${data.word}?`} description={`${data.word} är ...`}>
      <TextWrapper>
        
        <h1>{data.word}</h1>
        <p>{data.text}</p>

        <ConditionalShowDiv visible={data.details.length > 0}>
          <h2>Mer om ordet <i>{data.word}</i></h2>
          <ul>
            {data.details.map((info, index) => <li key={index}>{info}</li>)}
          </ul>
        </ConditionalShowDiv>
        
        <ConditionalShowDiv visible={data.forms.length > 1}>
          <h2>Hur böjs <i>{data.word}</i>?</h2>
          <ul>
            {data.forms.map(form => 
            <li>
              <Link href="/ord/[word]" as={`/ord/${form}`}>
                <a>{form}</a>
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

WordInfo.getInitialProps = async function({ res, query }) {
  const fetchRes = await fetch(`http://localhost:3001/word/${query.word}`);
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

export default WordInfo;

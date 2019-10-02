import { NextPage } from 'next';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';
import Link from 'next/link';

const capFirstChar = (str: string) => str ? str[0].toUpperCase() + str.slice(1) : '';

type Props = {
  error: boolean,
  data: {
    word: string,
    forms: [],
    pos: [],
    posDetails: [],
    specificDetails: []
  }
}

const ConditionalShowDiv: React.FunctionComponent<{visible: boolean}> = ({ visible, children }) => visible ? <div>{children}</div> : null;


const UnorderedList: React.FunctionComponent<{list: []}> = ({ list }) => (
  <div>
    {list.map((info, index) => <li key={index}>{info}</li>)}
  </div>
)

const WordInfo: NextPage<Props> = ({ error, data }) => {

  if (error) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout title={``} 
            description={``}>
    <div>
      <h1>{data.word}</h1>
      <p>Ordet <i>{data.word}</i> har ordklassen: {data.pos.toString()}.</p>
      <p>{data.posDetails.join(' ')}</p>

      <ConditionalShowDiv visible={data.specificDetails.length > 0}>
          <h2>Mer om ordet <i>{data.word}</i>:</h2>
          <UnorderedList list={data.specificDetails}/>
      </ConditionalShowDiv>
      
      
      <ConditionalShowDiv visible={data.forms.length > 1}>
          <h2>Hur böjs <i>{data.word}</i>?</h2>
          <ul>
            {data.forms.map(form => <li>
              <Link href="/ord/[word]" as={`/ord/${form}`}>
                <a>{form}</a>
                </Link>
            
            </li>)}
          </ul>
      </ConditionalShowDiv>



            <style jsx>{`

                h1 {
                  border-bottom: solid 1.5px silver;
                }

                h2 {
                  border-bottom: solid 1px silver;
                }
                div {

                  width: 90%;
                  margin: auto;

    
 
                }

        `}</style>
    </div>


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

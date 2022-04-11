import axios from 'axios';
const URL = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql';

function getBook() {
  const data = JSON.stringify({
    query: `{
    book{
        pages {
            content
            tokens {
                position
                value
            }
        }
    }
}`,
    variables: {},
  });

  const config = {
    method: 'post',
    url: URL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios(config);
}

export default getBook;

import fetch from 'isomorphic-unfetch';
import { ServerResponse } from 'http'

interface ParsedUrlQuery { [key: string]: string | string[]; }

const URL = 'http://localhost:3001';

const API = {

  async getData(route: string) {
    const res = await fetch(`${URL + route}`);
    const data = await res.json();

    return { data };
  },

  async getDataErrorFirst(res: ServerResponse | undefined, route: string) {
    const fetchRes = await fetch(`${URL + route}`);
    const data = await fetchRes.json();

    // This ensure we return a 404 status code and not 200 if error occurs
    if (fetchRes.status === 404 && res) {
      res.statusCode = 404;
    }

    return {
      error: fetchRes.status === 404,
      data
    };
  }
}

export default API;
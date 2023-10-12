import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.AMO_URL;
    config.headers.Authorization =
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwOWNiYmQwMDc0ZjU5ZWVmYzhiYzAyMzBkYzRmYzhlY2Q4MGZhZjc3NWQ3Zjk1MzZkNDlkMzcwMDRmOWY1ZmI5ZWU1NTIyYzA4MGJjYzM2In0.eyJhdWQiOiIxNGQzYmNmZS04MDVkLTRmMzYtYWI1My0xNTE0ZWE0YjhjNGEiLCJqdGkiOiIyMDljYmJkMDA3NGY1OWVlZmM4YmMwMjMwZGM0ZmM4ZWNkODBmYWY3NzVkN2Y5NTM2ZDQ5ZDM3MDA0ZjlmNWZiOWVlNTUyMmMwODBiY2MzNiIsImlhdCI6MTY5NzA0MjA1OSwibmJmIjoxNjk3MDQyMDU5LCJleHAiOjE2OTcxMjg0NTksInN1YiI6IjczODA4ODMiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzEzMzQ0NjYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6InYyIiwic2NvcGVzIjpbImNybSJdfQ.H4bfHnKfK7N73DE9El1SB7hCUI1y0EnPmkDh8laJqn5oG9qaSMAGUWJlM9Sx1WTnk0JJITY9gfT4yHwKFML82o_jV53TkRzzlvxSQeXSagNA6SQLQQ7IzCNbjrfaPZv5vZQ0k68BtSrCgHxQvTSaGO2n_9h5fRUKwS1nsaVutd1MgW7EczRFp_Yw8jpw_NPObHzqv_nAca_C0o28joZMtXNEpkSe9gNJ-bk7A-t3vF9Y1Fkyu_w1xU8LJ4JpVNxchNlTWXtz6liX83ubi2d_k9QiGTh5MmSssEupWblx0yJWQ6zTmkACcvQWOVBOWdFxbasWK3h9T18R4KGL6U-2FA';
    config.headers['Content-Type'] = 'aplication/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  },
);

import axios from 'axios';

const URL = '05jaeecklb.execute-api.ap-northeast-2.amazonaws.com/dev';

export default function CheckAuth(username, password) {
  const requestOptions = {
    method: 'get',
    data: JSON.stringify({
      username: { username },
      password: { password },
    }),
  };

  return new Promise((resolve, reject) => {
    axios(`${URL}/partner/session`, requestOptions)
      .then(res => {
        switch (res.status) {
          case 200:
            return res.json().then(user => {
              console.log(user); // TODO : Dispatch to Redux Store
              resolve();
            });
          case 400:
            return reject('이메일 또는 비밀번호가 없거나 잘못됨');
          case 403:
            return reject('일치하는 회원이 없음');
          default:
            return reject('이유를 알 수 없음');
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
}

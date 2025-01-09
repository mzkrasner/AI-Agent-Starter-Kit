/// <reference path="../global.d.ts" />

const getKey = async () => {
  Lit.Actions.setResponse({
    response: JSON.stringify({ publicKey }),
  });
};
getKey();

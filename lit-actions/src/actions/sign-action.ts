/// <reference path="../global.d.ts" />

const goSign = async () => {
  const sigShare = await Lit.Actions.signEcdsa({ toSign, publicKey, sigName });

  Lit.Actions.setResponse({
    response: JSON.stringify({ sigShare }),
  });
};
goSign();

// Add this to the top of the file, so that it can reference the global.d.ts file
/// <reference path="../global.d.ts" />

const go = async () => {
  // Prints out the Lit Auth context

  console.log("publickey", publicKey);

  const encodedDID = await encodeDIDWithLit(publicKey);
  // Sets the response to the Lit Actions context
  Lit.Actions.setResponse({
    response: JSON.stringify({
      encodedDID,
    }),
  });
  // Returns the signature
  return encodedDID;
};

go();

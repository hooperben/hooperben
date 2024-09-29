import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import Layout from "../../components/Layout";
import Markdown from "react-markdown";

const TITLE = "TLS Notary TLDR";
const IMAGE = "/tls-notary/mono.png";
const URL = "/ramblings/tls-notary";

const markdown = `
# TLS Notary

## Introduction 

TLS Notary/DECO/Web Proofs/zkTLS/whatever crypto twitter wants to call it refers to the process of basically making all existing data on the internet (anywhere that starts with a \`https://\`, anyway) verifiably provable. This is a very interesting proposition, especially to the nerds trying to build public, permissionless, distributed computer systems that require data that is readily available on the old, centralised internet.

## Helpful Context/Pre Reading

You're probably familiar with what a client/server relationship is in web software architecture. But, just to rehash, in the context of software:

- **the client**: is what normally looks pretty. Most commonly a website or an app, and is fundamentally quite dumb. It normally just takes data in, and sends that data off to server(s) to process, record and store.
- **the server**: is what you don't normally see. It's where all data for a website or app is normally kept, and is only really truly accessible to whoever has the keys to the server.

An interesting problem that client/server implementations have had to solve is 'how does a server know which client is which?' The short answer? Cryptography, the long answer, well...

Over the years and computational revolutions, the client and server have taken different shapes and forms of doing this, but almost all have an authentication pattern in the form:

1. The user goes to the client (website or app). They fill out a login form with some details, commonly a username and password. They then send this username and password to a server using a HTTPS request.
2. The server receives this HTTPS request. Upon getting a request to login, the server takes the username and password given to it, and sees if it has any records for that given combination.
3. If there's a match, the server basically generates a unique ID for this client that says _'You are this user. Any time you want to access your records, include this ID. Don't share it with anyone else'_. The server sends this unique ID back to the user in response to the users original HTTPS request to log in.
4. Anytime the user wants to do anything in any client that's specific to them, e.g. change a profile picture, send a bank transfer, impulse buy one of those instagram ice baths - they include this unique ID in their request, so the server knows it's them.

The server knows it is a real authenticated user as it can check the signature on the ID and knows for (almost mathematical) certainty that it's not a fakie (_Australian English referring to 'Fake Identification'_).

The protocol that powers this authentication process, HTTPS, is short for Hypertext Transfer Protocol (Secure). Secure, meaning that the client and the server can send their information between each other securely, i.e encrypted. How does most of this encryption and decryption stuff work nowadays?

## TLS

TLS is short for Transport Layer Security, and it's use is probably as ubiqitous as oxygens.

TLS is groundbreaking as it allows for 2 parties to securely exchange messages between each other, while relaying the messages publicly. Meaning that you could see Alice and Bob communicating using a TLS protocol and intercept one or all of their messages - but, assuming they're using modern algorithms, it is a mathematical certainty that you'll never be able to decrypt any message without getting more information from Alice or Bob (or consulting the NSA or a quantum computer).

One feature of TLS is it's efficiency. Once the initial shared secret generation process is complete (the TLS handshake), Alice and Bob have the same key to encrypt and decrypt their messages, and this is all thats done moving forward in the TLS protocol. There is no further proving that Alice is Alice or Bob is Bob, that is to say, there is no more digital signatures using Alice or Bobs private key, **the shared secret is only used for encryption and decryption**. This is called symmetric encryption, and technically is the oldest form of cryptography we have.

I don't want to ever besmirch Phil Merkles good name and his design of this incredible protocol, but I think that this is one short fall of the TLS protocol. But, as the saying goes - one mans short fall is another mans SaaS, and this is where TLS Notary comes in handy.

## TLS Notary

![image](/tls-notary/mono.png)

All that TLS Notary does is add an attestation (notarises) that data exchanged between Alice and Bob either came from Alice, or came from Bob. Or more specifically using our client/server explanation above - it attests that a server has information about a given client.

The complexity that arises in Notarising TLS data is making this notary blind to the data they are notarising. I can give anyone my youtube login details and they can login and see for themselves that I've been subscribed to Veratasium since before he had 100k subscribers - but I don't really want to really do that, as that's a horrible idea that does not scale well. But, I am somewhat proud of this and want to flex. How else can I verifiably prove that this is true?

What if I could give my youtube authentication token to a near-blind, forgetful robot that's been programmed to hit a certain server, retrieve some data, hash it and sign it and then recreate a proof that that data contained a subscription origin date that predated the public record of when veratasiums youtube channel hit 100k subscribers?

This convoluted example is a long winded way of saying, the notary needs to accept and recreate requests that the client would make to a given server, but do so with **absolute trust minimisation and information leakage**.

Thankfully, having blind notaries is becoming increasingly more feasible, and here's my design for how I'd build one.

## System Architecture

I think to ship an industry leading TLS Notary Implementation with 2024 technology, it's going to require the following deliverables:

1. TEE (Trusted Execution Environment)/MPC (Multi-Party Compute) equivalent that essentially accepts requests and instructions to recreate and attest to. This application would be written in rust - and ideally can only accept tasks to evaluate, and share the public key of the private key it has in it's memory.
2. A [noir](https://noir-lang.org/) circuit to verify request data contents, and TEE message signature.
3. Another TEE/MPC for noir verification key and proof generations - this is an optional addition, but abstracting compute load away from users and billing for it is probably the only way proofs are going to reach computational feasibility anytime soon. This would also be a good way to actually generate revenue too.
4. A more intuitive/dumbed down front end or addition to the existing TLSNotary web extension to utilise the deployed TEEs + converting to noir provers.

I believe that points 2, 3 and 4 here are considerably easier than part 1. I don't think I'm really re-hashing much of whats not already described incredibly well at [TLSNotary](https://docs.tlsnotary.org/intro.html), except my idea for selective disclosure, which is currently not available per TLS Notary docs:

![no-options-available](/tls-notary/selective-disclosure.png)

### Selective Disclosure Design

If we can get our TEE/MPC in deliverable 1 to convert data fields returned from the server request to a merkle tree representation (which is ideally configurable too) and sign this merkle root, we can pretty trivially write a noir circuit that proves:

- As few or as many leaf node values in the merkle tree fit some criteria
- The signature was done by a list of approved signers (this could be private or public).

The following description is how I'm thinking that would work.

## Minimum Viable Product Description

The following is a description of what a working example of the above might look like in action.

Say I have an account on qantas.com, and everytime I login, I use the following details:

\`\`\`
email: 'ben@email.com'
password: 'go_the_broncos_97'
\`\`\`

When I hit the login button, I can see in the console that it sends this \`email\` and \`password\` field to \`https://api.account.com/login\` in a HTTPS POST request. Because this is the correct password, I get a \`200\` response back from this request meaning that all went well, as well as a \`Bearer eyJh.super.realtoken\` which is saved as a cookie in my browser at location \`qantas_com_auth_token\`.

I then go to \`https://qantas.com/profile\` page, where I can see all of the details of my profile. When the page loaded, the browser fired another HTTPS GET request to \`https://api.qantas.com/profile\` with my \`Bearer eyJh.super.realtoken\` as a \`ACCOUNT_AUTH_HEADER\` in the request. The response of this request was:

\`\`\`
{
  "id": 12243324,
  "email": "ben@email.com",
  "name": "ben",
  "loves": "hanging out with friends",
  "loyalty_points": 1201411,
  "date_joined": "2020-04-20 16:20:00",
  "passport_number": "PB1234567"
}
\`\`\`

I enjoy looking at my Qantas profile - it's a lovely airline. However, a competing airline, Satnaq has recently launched a new promotion where they'll match your qantas loyalty points in their system as a way to onboard more frequent flyers. Qantas has no interest in making this easier for Satnaq to do, so they're never going to make a server where Satnaq can get this information. This data is completely in qantas' control, even though they are meant to be my points.

However, Satnaq utilises pretty bleeding edge technology and says that if you can get a TLS Notary to attest to your \`loyalty_points\` in the response at \`https://api.qantas.com/profile\` request, they'll honour your points 1 to 1 in their system. They don't want any of your other information as they already get it through their systems, and that's probably a bad legal liability, yada yada, bereaucrats, etc.

I decide that I can let the execution environment running at \`https://tls-notary.com\` borrow my token and TLS shared key to recreate the request to \`https://api.qantas.com/profile\`. So, I send a HTTPS POST request to \`https://tls-notary.com/blind-robot\`, with the following details:

\`\`\`
{
  "path": "https://api.qantas.com/profile",
  "preserve_paths": [[2, 10], [88, 112]],
  "auth_config": {
    "headers": {
      "ACCOUNT_AUTH_HEADER": "Bearer eyJh.super.realtoken"
    },
  }
}
\`\`\`

- \`path\` - the server the blind robot is to go to
- \`preserve_paths\` - a path that tells the TLS notary which indexes of the servers response to put into an entire leaf node in the merkle tree by themselves. In our case, when our response is \`JSON.stringify\`'d - we want \`"id": 12243324\` (starts at index 2 and ends at index 10) and \`"loyalty_points": 1201411\` (starts at 88, ends at 112) as a pre-hash value for leaves in our merkle tree. We don't really care about what the rest of the tree looks like.
- \`auth_config\` - where to put the tokens I'm giving the notary on my behalf

Eventually, after a decent amount of time and computing done at \`https://tls-notary.com/blind-robot\`, I get the following response:

\`\`\`
{
  "tree": [
    "0x12..412",
    "0x41..124",
    "0x12..488",
    "0x00..001",
    "0x96..435",
    "0x93..256",
    "0x83..257",
    "0x92..352",
    "0x02..385",
    "0x12..412",
    "0x12..712",
    "0x72..352",
    "0x12..414",
    "0x64..345",
    "0x12..412",
    "0x13..523",
  ],
  "treeHashAlg": "poseidon2",
  "signature": "0x9821814712..1482128128412",
  "signerPubKey": "0xblindrobot",
  "pathHashIndex": 0,
  "perservedLeafIndexes": [3, 4],
}
\`\`\`

where:

- \`tree\` - is the leaf nodes of the merkle tree that the TLS notary has created
- \`treeHashAlg\` is the hashing algorithm used to create the tree
- \`signature\` is the signed root of the merkle root that is created when the \`tree\` array is arranged into a binary merkle tree in that order
- \`signerPubKey\` is the public key of the notary signer
- \`pathHashIndex\` is the index of the hash of the leaf that contains the path to the server where the data is coming from
- \`perservedLeafIndexes\` is an array of the leaf indexes that were requested to be preserved as a whole value as part of the \`preserve_paths\` request.

In our example, this means:

- \`tree[0] == poseidon2('https://api.qantas.com/profile') == 0x12..412\`
- \`tree[3] == poseidon2('"id": 12243324') === 0x00..001\`
- \`tree[4] == poseidon2('"loyalty_points": 1201411') == 0x96..435\`

## ZKP/SNARKing Time

- ZKP: Zero Knowledge Proof
- SNARK: Succinct Non-interactive Argument of Knowledge

Now that we have our data that has been formatted into a merkle tree representation and attested to by the TLS Notary - I need to generate a ZKP/SNARK to send to Satnaq to prove that we have:

- a public leaf that contains a points value representation of \`'"loyalty_points": 1201411'\`
- a public leaf that contains the retrieval path of \`https://api.qantas.com/profile\`
- a private leaf that proves that our \`'"id": 12243324'\` leaf has not being used before (our nullifier)
- when the tree is reconstructed, we can evaluate that the root of the tree when signed by the private key that corresponds to the public key \`signerPubKey\` and returned \`signature\` variable.

In noir - this circuit would look something like:

\`\`\`rust
fn main(
  tree: [Field; 16], // our tree array

  loyalty_points: pub Field, // '"loyalty_points": 1201411' (public variable)
  points_index: Field, // the leaf index of the hashed loyalty points value

  server_path: pub Field, // 'https://api.qantas.com/profile' (public variable)
  server_path_index: Field, // the leaf index of the hashed server path value

  id: Field, // '"id": 12243324'
  nullifier: pub Field // hashed id field, our nullifier (public variable)
  nullifier_index: Field, // leaf index of the hashed id field

  notary_public_key: pub Field, // the public key of the notary signer (public variable)
  signature: Field // the signed merkle root
) {
  // check our points index hash matches the expected leaf index
  assert(
    tree[points_index] == std::hash::poseidon2::bn254::hash_1([loyalty_points]),
    "invalid points hash"
  );

  // do the same with server path and nullifier
  assert(
    tree[server_path_index] == std::hash::poseidon2::bn254::hash_1([server_path]),
    "invalid server"
  );

  // next we reconstruct and check that our nullifier is valid (matches and is in the tree)
  let reconstructed_nullifier = std::hash::poseidon2::bn254::hash_1([id]);
  assert(
    reconstructed_nullifier == nullifier,
    "invalid public nullifier"
  );
  assert(
    tree[nullifier_index] == reconstructed_nullifier,
    "invalid nullifier"
  );

  // next, check that our merkle tree root when reconstructed, matches the message signed
  // by the notary_public_key
  let merkle_root = compute_merkle_root_from_leaves(tree);
  let isValidSignature = verify_signature(
    notary_public_key,
    signature,
    merkle_root
  );

  // if it's a valid signature, we are done. If it's not, the proof is not valid and will throw an error.
  assert(isValidSignature, "invalid sig!");
}

\`\`\`

I can then get this noir circuit, compile it, and generate a proof using the inputs I have returned from the TLS Notary response. A circuit like this and its proof generation is probably okay to be ran on a good computer - but if not, it could be generated in a dedicated, more powerful, TEE/MPC env (Deliverable 3 above).

Either way, once I've generated my proof, I can now enter the following details on Satnaq's \`https://satnaq.com/points-match\` front end:

| Input          | Value                          |
| -------------- | ------------------------------ |
| proof          | 95bf82a289b8...9780257722bc064 |
| loyalty_points | '"loyalty_points": 1201411'    |
| tls_pub_key    | 0xblindrobot                   |
| nullifier      | 0x12412                        |

We don't need to send them the path (\`https://api.qantas.com/profile\`), as they know that already. They have all the inputs they need to re-run and reconstruct the proof.

If this proof passes on their end, the nullifier is marked as used, and I get 1201411 Satnaq Points.

_their end_ is where ever they want. This could be a smart contract or standard server that can run this ZKP/SNARK verification process. The most exciting part of TLS Notary is how portable it makes verifiable data, **it can be used anywhere.**

## Assumptions/Areas/Next Steps to Development

- TEEs/MPC - this whole model has a large trust assumption build around the Notary being blind and trustable. This needs to be rock solid, and will require extensive investigation of what the current state of the art is, or perhaps comissioning/forking of an existing protocol soley to guarantee this is the case. I spoke with [David](https://x.com/davidlsneider) from [Lit Protocol](https://www.litprotocol.com/) the other day and he mentioned that a TEE Docker image equivalent is within reach, so am investigating that sort of program now.
- We mightn't need to merkle-ise the data attested to by the TLS Notary, but I think this might be a little more privacy enchancing?
- The actual need to utilise TLS shared encryption/decryption key in the browser (if at all), versus just using auth headers saved as cookies in the browser.  This whole protocol was/is called TLS Notary, but the name is potentially a bit of a miss gnomer, if you will.
- The nullifier logic here in the above example is probably incorrect and hackable (unless merkle tree creation/indexes is deterministic based on server response, but that's a bit of a cop out)

If you made it this far thank you, this was quite a ramble 🫡  

`;

const IndividualRamble = () => {
  return (
    <Layout
      title={`${TITLE} | hooper.link`}
      shareable={{
        title: TITLE,
        description:
          "what all the tlsn/zkTLS/webproofs/DECO fuss is about (and how I want to build one)",
        image: `https://hooper.link/tls-notary/mono-cropped.png`,
        url: `https://hooper.link${URL}`,
      }}
    >
      <div className="max-w-[600px] w-full prose-p:text-[14px] prose-li:text-[14px] prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream dark:prose-li:text-darkCream dark:prose-li:marker:text-blue-300 mb-[100px]">
        <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {markdown}
        </Markdown>
      </div>
    </Layout>
  );
};

export default IndividualRamble;

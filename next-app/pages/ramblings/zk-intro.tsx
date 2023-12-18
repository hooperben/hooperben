import Markdown from "react-markdown";
import Layout from "../../components/Layout";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Head from "next/head";

const markdown = [
  `
  ## Intro to Zero Knowledge Cryptography (and the maths behind it)

this post is based on a talk I gave at work ~2 months ago, and is an introduction to Zero Knowledge proofs, and how we can actually represent some of the interesting examples of zero knowledge proofs as an executable series of computer logic. So, lets get started.

**disclaimer:** as you'll soon see, this can get pretty abstract and mathsy. I am someone interested in mathematics and software - but I am by no means a mathematician (I bench way too much). If you see something egregiously incorrect, please let me know.

From the top: A zero knowledge proof is a system in which can you can prove information is true, without revealing the information itself. This is a pretty abstract concept, so lets look at some examples.

I think that the best example to demonstrate what a zero knowledge proof is 'The Cave'.

Say you have a donut shaped cave like so:

<TODO_CAVE_IMAGE>

The entrance and exit are the same.

On the opposite side to the entrance of the cave is a magic door - that requires a password to open and pass through.

Say you want to prove to someone that you know what the password is, but you do not want to reveal to them what the password is.

So, instead you decide to show and not tell.

If you can go down one side of the cave, and come out of the other - to anyone observing, this is pretty conclusive evidence that you know the magic password.

If you go down one side, and come back out of that same side, it's pretty conclusive evidence that you do not know the magic password.

In this system, an observer can verify that you know the magic password, without you having to reveal the magic password itself. They learn nothing, which is where the name zero knowledge proof comes from, that is, the verifier gains zero knowledge from the proof.

This is a pretty cool little thought experiment, but how is this useful you ask? Well, the ability to prove information without revealing it has quite a lot of applications in the real world.

While the above example might seem oddly specific and arbitrary - you can actually extract this model to something a bit more generic, that is, you can use this prover/verifier in non-cave specific applications.

- Want to prove to Optus that you're an Australian citizen, without revealing your drivers license number?
- Want to prove to a Real Estate agent that you have enough money to buy a house, without revealing your account balance?
- Want to prove to your work that you have a doctors certificate, without revealing what the certificate is for?

zero knowledge proofs are exciting as they represent a way to get the benefits of modern technology, without having to give up some of the privacy we currently sacrifice in every day life.

It's all well and good to describe how cool new technologies could work - but how do we actually implement zero knowledge proofs? Well, to do that, we need to get a bit mathsy.

### The Current State of Zero Knowledge Proofs

In this article, we are going to be using a model called PLONK (Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge - quite a mouthful), to generate build a zero knowledge proof system.

PLONK is was first proposed in a paper by Ariel Gabizon, Zachary J. Williamson, and Oana Ciobotaru. That paper is what I'll be trying to unmathesize a bit with the following explanation.

So, let's replace our cave example above with the following function:

$$ f(x) = 21x - x = 420 $$

I know a solution for $$ x $$ where this statement evaluates to true, meaning I know a number that can be multiplied by 21, subtract that number from this multiplicand and it adds to 420.

Or in the context of our cave example:

- $$ f(x) $$ = the tunnel
- $$ x $$ = magic password
- verifier = anyone who can evaluate the statement (you?)
- prover = me, the person who knows a solution

but the question is now - how can we structure this program so that when the verifier evaluates this statement, they do so having no idea what $$ x $$ is? to find out, well, lets go a bit deeper

the above statement, $$ f(x) = 21x - x = 420 $$, can actually be expressed as a circuit diagram using only additive and multiplicative gates, that is, gates like so:

these kind of logic gates are everywhere in computer science/electrical engineering, and you using billions (if not trillions) of them every single day when you use modern computers - pretty cool.

these diagrams are very useful for humans - but we can't really evaluate them in a computer program, so we need to express them in a way that we can actually execute. the above circuit can be expressed as the following statements:

if all of these conditions are true, then the circuit passes.

in PLONK, we express constraints like this:

$$ Q_La + Q_Rb + Q_OC + Q_Mab + Q_C = 0 $$

This looks daunting, but let me explain.

- $$ Q_L $$ = the left input wire
- $$ Q_R $$ = the right input wire
- $$ Q_O $$ = the output wire
- $$ Q_M $$ = the multiplication gate
- $$ Q_C $$ = the constant

now that we have our logic gate/verified that this program can actually be compiled to an additive/multiplicative program we can execute, we can actually simplify this even further, and express this as the following statements. You can view this as, if all of these statements are met, the above circuit runs.

do you notice anything about the form of the above statements? they are all vector points that we can express in 2 dimensions, like so:

`,
];

const IndividualRamble = () => {
  return (
    <Layout title={`ZK Intro | hooper.link`}>
      <Head>
        <title>Zero Knowledge Proofs</title>

        <meta
          property="og:url"
          content="https://hooper.link/ramblings/zk-intro"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Zero Knowledge Proofs Intro" />
        <meta property="og:description" content="my attempt at explaining ZK" />
        <meta property="og:image" content="https://hooper.link/zk-proof.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:domain"
          content="https://hooper.link/ramblings/zk-intro"
        />
        <meta
          name="twitter:url"
          content="https://hooper.link/ramblings/zk-intro"
        />
        <meta name="twitter:title" content="The 96er" />
        <meta
          name="twitter:description"
          content="my attempt at explaining ZK"
        />
        <meta name="twitter:image" content="https://hooper.link/zk-proof.png" />
      </Head>
      <div className="flex flex-col">
        <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[0]}
          </Markdown>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualRamble;

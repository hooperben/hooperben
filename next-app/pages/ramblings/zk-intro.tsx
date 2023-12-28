import Layout from "../../components/Layout";
import { FullCircuit, PLONKAndGate } from "../../components/animations/gates";
import TheCave from "../../components/animations/the-cave";
import MarkdownWithMaths from "../../components/markdown/markdown-with-maths";

const title = "An Introduction to Zero Knowledge Proofs";

const markdown = [
  `
  ## ${title}

this post is based on a talk I gave at work ~2 months ago, and is an introduction to Zero Knowledge proofs, and how we can actually represent some of the interesting examples of zero knowledge proofs as an executable series of computer logic. So, lets get started.

**disclaimer:** as you'll soon see, this can get pretty abstract and mathsy. I am someone interested in mathematics and software - but I am by no means a mathematician (I bench way too much). If you see something egregiously incorrect, please let me know.

From the top: A zero knowledge proof is a system in which can you can prove information is true, without revealing the information itself. This is a pretty abstract concept, so lets look at some examples.

I think that the best example to demonstrate what a zero knowledge proof is 'The Cave'.

Say you have a donut shaped cave like so:

`,
  `
Notice that the entrance and exit are the same, and on the opposite side to the entrance of the cave is a magic door (that brown line) - that requires a password to open and pass through.

Say you want to prove to someone that you know what the password to this magic door is, but you do not want to reveal to them what the password is.

If you can go down one side of the cave, and come out of the other - to anyone observing who knows the layout of the cave, this is pretty conclusive evidence that you know the magic password.
`,
  `
If you go down one side, and come back out of that same side, it's pretty conclusive evidence that you do not know the magic password (or like maybe you don't wanna prove you know it - you do you).
`,
  `
In this model, an observer can verify that you know something, without knowing what it is that you know. 

This is a pretty cool little thought experiment, but how is this useful? Well, the ability to prove information without revealing it has quite a lot of theoretical applications in the real world.

While the above example might seem oddly specific and arbitrary - if you can extract this model to something a bit more generic, you could theoretically use this prover/verifier implementation in a lot of non-cave specific applications. 

- Want to prove to Optus that you're an Australian citizen, without revealing your drivers license number?
- Want to prove to a Real Estate agent that you have enough money to buy a house, without revealing your account balance?
- Want to prove to your work that you have a doctors certificate, without revealing what the certificate is for?

and these are just a quick list of topical, potential cool use cases - the world computer is our oyster. Zero knowledge proofs are exciting as they represent a new way to get the benefits of modern technology, without having to give up some of the privacy we currently sacrifice in every day life for the convenience of modern technologies.

It's all well and good to describe how cool new technologies could work - but how do we actually implement zero knowledge proofs that computers can work with? Well, to do that, we need to get a bit mathsy.

### Polynomial Commitments

Polynomials are an area of mathematics that is pretty enormous, but I'm not too much of a connoisseur. You might remember them from high school maths, the equations that looked like these ones:

$$ f(x) = 5x^2 + 2y - 7 $$

In this article, we are going to be using a model called PLONK (Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge - quite a mouthful), to generate/build a zero knowledge 
proof system using properties of polynomials that have been found over the years.

PLONK was first proposed in a paper by Ariel Gabizon, Zachary J. Williamson, and Oana Ciobotaru.
That paper is what I'll be trying to unmathesize a bit with the following explanation.

So, let's start by replacing our cave example with the following function:

$$ f(x) = x * (x - 1) = 420 $$

And instead of a magic password for a door, I know a solution for $$ x $$ where this statement evaluates to true, meaning that
I know a number where you can subtract 1 from it, multiply it by itself, and it will equal 420. Anybody who can evaluate this same arithmetic, 
has the capability of verifying this to be true.

Or in the context of our cave example:

- $$ f(x) $$ = the tunnel
- $$ x $$ = magic password
- verifier = anyone who can evaluate the statement (you?)
- prover = me, the person who knows a solution

but, how can we structure this program so that when the verifier evaluates this statement, they do so having no idea what $$ x $$ is? to find out, well, lets go a bit deeper.

the above statement, $$ f(x) = x * (x - 1) = 420 $$, can actually be expressed as a circuit diagram using only additive and multiplicative gates, that is, gates like so:
`,
  `
These kind of logic gates are everywhere in computer science/electrical engineering,
and you are currently using billions (if not trillions) of them right now.


But, our circuit isn't too complex, and only has 2 gates and 2 constraints (hover/click to view):

- $$ a^0 + -1 = c^0 $$ 
- $$ a^1 * b^1 = c^1 $$
- $$ c^1 = 420 $$
- $$ b^0 = - 1 $$

if all of these conditions are true, then our circuit passes.

in PLONK, we express conditions constraints in the form:

$$ Q_La + Q_Rb + Q_OC + Q_Mab + Q_C = 0 $$

where:

- $$ Q_L $$ = the left input wire
- $$ Q_R $$ = the right input wire
- $$ Q_O $$ = the output wire
- $$ Q_M $$ = the multiplication gate
- $$ Q_C $$ = the constant

All $$ Q $$s are constant, and the entire gate can be configured by changing the Q value.


`,
];

const IndividualRamble = () => {
  return (
    <Layout
      title={`${title} | hooper.link`}
      shareable={{
        title,
        description: "my attempt at explaining ZK",
        image: "https://hooper.link/zk-proof.png",
        url: "https://hooper.link/ramblings/zk-intro",
      }}
    >
      <div className="flex flex-col">
        <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
          <MarkdownWithMaths>{markdown[0]}</MarkdownWithMaths>
          <TheCave />
          {/* <TheCave incorrect /> */}

          <MarkdownWithMaths>{markdown[1]}</MarkdownWithMaths>
          <TheCave isValid />
          <MarkdownWithMaths>{markdown[2]}</MarkdownWithMaths>
          <TheCave incorrect />
          <MarkdownWithMaths>{markdown[3]}</MarkdownWithMaths>

          <FullCircuit />
          <MarkdownWithMaths>{markdown[4]}</MarkdownWithMaths>
          <PLONKAndGate />
        </div>
      </div>
    </Layout>
  );
};

export default IndividualRamble;

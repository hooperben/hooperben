import Image from "next/image";
import Layout from "../../components/Layout";
import {
  FullCircuit,
  PLONKAndGate,
  PLONKOrGate,
} from "../../components/animations/gates";
import { Graph } from "../../components/animations/graphs";
import TheCave from "../../components/animations/the-cave";
import MarkdownWithMaths from "../../components/markdown/markdown-with-maths";

const title = "An Introduction to Zero Knowledge Proofs";

const markdown = [
  `
Man on the precipice of utilising even more polynomials than ever before, circa 2024

  ## ${title}

this rambling is an introduction to Zero Knowledge proofs,
and how we can actually represent some of the interesting examples of zero knowledge proofs as an executable series of computer logic. So, lets get started.

**disclaimer:** as you'll soon see, this can get pretty abstract and mathsy. I am someone interested in mathematics and software -
but I am by no means a mathematician (I bench way too much). If you see something egregiously incorrect, please let me know.

From the top: A zero knowledge proof is a system in which can you can prove information is true, without revealing the information itself.
This is a pretty abstract concept, so lets look at an example.

I think that the best example to demonstrate what a zero knowledge proof is 'The Cave'.

Say you have a donut shaped cave like so (top-down view):

`,
  `

**Figure 1:** A donut shaped cave, where the entrance and exit are the same


Notice that the entrance and exit are the same, and on the opposite side to the entrance of the cave is a magic door
(that brown/red line) - that requires a password to open and pass through.

Say you want to prove to someone that you know what the password to this magic door is, but you do not want to reveal to them what the password is.

If you can go down one side of the cave, and come out of the other - to anyone observing who knows the layout of the cave,
this is pretty conclusive evidence that you know the magic password that opens the door.
`,
  `
**Figure 2:** A successful path (green) of an entrant who knows the magic password to open the door

If you go down one side, and come back out of that same side, it's pretty conclusive evidence that you do not know the magic password
(or like maybe you don't wanna prove you know it - you do you).
`,
  `
**Figure 3:** An unsuccessful path (red) of an entrant who does not know the magic password to open the door


In this model, an observer can verify that you know something, without knowing what it is that you know. 

This is a pretty cool little thought experiment, but how is this useful? Well, the ability to prove information without revealing it has quite a lot of theoretical applications in the real world.

While the above example might seem oddly specific and arbitrary - if you can extract this model to something a bit more generic, you could theoretically use this prover/verifier implementation in a lot of non-cave specific applications. 

- Want to prove to Optus that you have a valid Australian Drivers License - but don't want them to store your drivers license number?
- Want to submit a complaint to your HR person anonymously?
- Want to submit a vote in an election without revealing who you voted for?

and that's still thinking small - the world computer is our oyster.

Zero knowledge proofs are exciting as they represent a new way to get the benefits of modern technology,
without having to give up some of the privacy we currently sacrifice in every day life for the convenience of modern technologies.

It's all well and good to describe how cool new technologies could work - but how do we actually implement zero knowledge proofs that computers can work with? Well, to do that, we need to get a bit mathsy.

### General Purpose Zero Knowledge Proofs
Lets replace our cave example with the following function:

$$ f(x) = x^2 + 10x + 4 = 420 $$

And instead of a magic password for a door, I know a solution for $$ x $$ where this statement evaluates to true, meaning that
I know a number that you can square, then take this same number and multiply it by $$ 10 $$, sum those 2 numbers, add $$ 4 $$, and the result will be $$ 420 $$.

Or in the context of our cave example:

- $$ f(x) $$ = the tunnel
- $$ x $$ = magic password
- verifier = anyone who can evaluate the statement (you?)
- prover = me, the person who knows a solution

how can we structure this program so that when the verifier evaluates this statement, they do so having no idea what $$ x $$ is? to find out, well, lets go a bit deeper.

the above statement, $$ f(x) = x^2 + 10x + 4 = 420 $$, can actually be expressed as a circuit diagram using only additive and multiplicative gates, that is, gates like so:
`,
  `
**Figure 4:** A simple circuit diagram with 4 gates, with 2 multiplicative gates and 2 additive gates.

Our above circuit can be also be expressed in constraint form (and simplifying to our constant values
where possible):

- $$ a_0 * b_0 = c_0 $$
- $$ a_1 * b_1 = a_1 * 10 = c_1 $$
- $$ a_2 + b_2 = c_2 $$
- $$ a_3 + b_3 = 4 + b_3 = c_3 = 420 \\to b_3 = 416 $$

if all of these conditions are met - then our circuit evaluates successfully, meaning that our calculated value $$ c_3 $$ matches our expected output $$ 420 $$.

now we've got our constraints, we can convert them to PLONK constraints. What's a PLONK you ask? well

### PLONK

PLONK is short for _**P**ermutations over **L**agrange-bases for **O**ecumenical **N**oninteractive arguments of **K**nowledge_ - quite a mouthful, but PLONK
is a model that takes advantages of a few properties of polynomials to allow us to both represent our constraints as executable arithmetic,
and keep certain values we want secret from a verifier.

PLONK was first [proposed in a paper](https://eprint.iacr.org/2019/953.pdf) by Ariel Gabizon, Zachary J. Williamson, and Oana Ciobotaru.
This paper is what I'm trying to demystify a bit.

so in PLONK, constraints are represented in the form:

$$ Q_La + Q_Rb + Q_Oc + Q_Mab + Q_C = 0 $$

where:

- $$ Q_L $$ = the left input wire
- $$ Q_R $$ = the right input wire
- $$ Q_O $$ = the output wire
- $$ Q_M $$ = a multiplication flag
- $$ Q_C $$ = a constant - allows for constant values in our circuit (when needed)

and $$ a, b, c $$ are the values of the wires in our circuit.

All $$ Q $$ values are constant, and the entire gate can be configured by changing a $$ Q $$ value.

For an addition gate - we have the following Q values:
`,
  `
For a multiplication gate - we have the following Q values:
`,
  `
So, if we were to re-write our circuit in PLONK, we would have the following constraints:

$$ \\qquad \\qquad \\qquad \\; \\mathbf{Q_L} \\quad \\; \\mathbf{Q_R} \\quad \\; \\; \\mathbf{Q_O} \\qquad \\mathbf{Q_M} \\quad \\; \\; \\; \\mathbf{Q_C}$$

$$ a_0 * b_0 = c_0 \\to \\: \\mathbf{0}a_0 + \\mathbf{0}b_0 + \\mathbf{(-1)}c_0 + \\mathbf{1}a_0b_0 + \\mathbf{0}_C = 0 $$

$$ a_1 * b_1 = c_1 \\to \\: \\mathbf{0}a_1 + \\mathbf{0}b_1 + \\mathbf{(-1)}c_1 + \\mathbf{1}a_1b_1 + \\mathbf{0}_C = 0 $$

$$ a_2 + b_2 = c_2 \\to \\mathbf{1}a_2 + 1b_2 + \\mathbf{(-1)}c_2 + \\mathbf{0}a_2b_2 + \\mathbf{0}_C = 0 $$

$$ a_3 + b_3 = c_3 \\to \\mathbf{1}a_3 + 1b_3 + \\mathbf{(-1)}c_3 + \\mathbf{0}a_3b_3 + \\mathbf{(-4)} = 0 $$

Because all our our $$ Q $$ values are constant, we can express this circuit in vector form like:

$$ Q_L = (0, 0, 1, 1) \\quad Q_R = (0, 0, 1, 1) \\quad Q_O = (-1, -1, -1, -1) $$

$$ Q_M = (1, 1, 0, 0) \\quad Q_C = (0, 0, 0, -4) $$

These values are called the 'selectors' and they outline the structure of our circuit

Similarly, we can express our inputs as:

$$ a = (a_0, a_1, a_2, a_3) \\quad b = (b_0, b_1, b_2, b_3) \\quad c = (c_0, c_1, c_2, c_3) $$

And these vectors are called our witnesses, and this is where we would input our secret values - to then
be evaluated by the circuit described by our selectors.

If you're still here take a breather - thanks for getting this far. We're kinda almost there, and it's
about that time.

### Polynomial Time

Next we need to transform our selectors and witnesses into polynomials. How do we do that? Glad you asked.

First, we convert our Q selectors to points, where the $$ x $$ coordinate is the index of the of current value, and the 
$$ y $$ coordinate is the value of the selector at that index. Example, for our $$ Q_L $$ selector:

$$ Q_L = (0, 0, 1, 1) \\to (0, 0), (1, 0), (2, 1), (3, 1) $$

If we plot these points, we get the following graph:
`,
  `
This blue line is our polynomial for our $$ Q_L $$ values, and using reasonably simple polynomial discovery with the above
points, we can find the following polynomial:

$$  Q_L(x) = -\\frac{1}3x^3 + \\frac{3}2x^2 - \\frac{7}6x $$

If we repeat this for all our our selectors, we get the following polynomials:

`,
];

const IndividualRamble = () => {
  return (
    <Layout
      title={`${title} | hooper.link`}
      shareable={{
        title,
        description: "my attempt at explaining ZK",
        image: "https://hooper.link/zk-proof-the-cave.png",
        url: "https://hooper.link/ramblings/zk-intro",
      }}
    >
      <div className="flex flex-col">
        <Image
          className="p w-full xs:w-3/4 md:w-3/4 max-w-lg"
          src="/zk-proof-the-cave.png"
          alt="The 96er"
          width={400}
          height={400}
          layout="responsive"
        />

        <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
          <MarkdownWithMaths>{markdown[0]}</MarkdownWithMaths>
          <TheCave />
          <MarkdownWithMaths>{markdown[1]}</MarkdownWithMaths>
          <TheCave isValid />
          <MarkdownWithMaths>{markdown[2]}</MarkdownWithMaths>
          <TheCave incorrect />
          <MarkdownWithMaths>{markdown[3]}</MarkdownWithMaths>
          <FullCircuit />
          <MarkdownWithMaths>{markdown[4]}</MarkdownWithMaths>
          <PLONKOrGate />
          <MarkdownWithMaths>{markdown[5]}</MarkdownWithMaths>
          <PLONKAndGate />
          <MarkdownWithMaths>{markdown[6]}</MarkdownWithMaths>
          <Graph
            points={[
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 1 },
              { x: 3, y: 1 },
            ]}
          />
          <MarkdownWithMaths>{markdown[7]}</MarkdownWithMaths>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualRamble;

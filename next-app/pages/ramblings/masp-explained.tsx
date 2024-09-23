import "katex/dist/katex.min.css";
import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Layout from "../../components/Layout";
import UTXO from "../../components/animations/utxo";
import { Notes, SpentNotes } from "../../components/animations/notes";

const TITLE = "Roman Kyoto - Multi Asset Shield Pools Explained";
const IMAGE = "/roman-kyoto/thumbnail.svg";
const URL = "/ramblings/masp-explained";

const markdown = [
  `
  # ${TITLE}

  In May this year, I competed in my first ETHGlobal Hackathon in Sydney where we created Roman Kyoto, a Multi Asset Shield Pool. The goal of this article is to explain what a Multi Asset Shield Pool is, how it works, and how you could be using one sooner than you'd think? perhaps

  ## Some Context on Blockchains and Cryptocurrency

  At the moment, chances are that 99.9% of everything that you have seen to do with crypto or blockchains have occurred on public computer networks. Every dog based shitcoin, every monkey profile picture, every time you've ordered illicit substances that you thought were anonymous - chances are that all details of these transactions are public for all to see.

  Is this a feature? or is this a bug? Well, something being public being good or bad does depend on the application, but for example, if blockchains are meant to replace the existing internet as many crypto bros would have you believe, if everyone could see each others bank account balances and spending habits like this, I think this would be a much worse system than what we currently have. 
  `,
  `
  The above transaction is from when I purchased a ticket to ETHPragma on ETH mainnet. **This transaction is public, and there forever.** Blockchains and cryptocurrencies need privacy enhancement tools, otherwise their real world applications are inherently limited, especially versus what is now mainstream internet computing.

  Even with this public visibility feature/bug, at the time of writing, the stablecoin market (tokens that represent and are _backed_ by real world currency) currently sits at **~\\$170.01 Billion USD** [per DefiLlama](https://defillama.com/). 'Backed' here is arguably subjective in aggregate, as it may include volatile, over-valued or over-leveraged protocols, but even factoring this in and rounding down to $150B, it is still a sizeable asset class, all deployed on public computer networks.

  This volume of value has given birth to a new era of decentralised finance (defi). Where in the current banking system you have to pay the banker/middleman for their services (where they often jip you), defi aims to level the playing field, where finance can return to more of a peer to peer model, versus being controlled by monolith firms that are too big to fail, until they aren't.

  Defi has and will continue to steal volume from the traditional banking system as it evolves, but a lot of the current use cases of decentralised finance don't really appeal to the masses, and even if they did, most would be quick to highlight the lack of privacy on current blockchains, and return their money to banks where their information is a bit more hidden - which is very understandable.

  But, from my own observations in Australia I have seen an increase of people returning to using cash instead of NFC payments for everyday discretionary spending, as banks have gotten greedier and continue to increase their fees to process (admittedly more convenient) digital payments.

  But, what if we could have our cake and eat it too? What if we could still have private money as conveniently as we have card or NFC payments? That is to formally propose, a peer to peer exchange of money done electronically, completely privately.

  ## Private, Unstoppable Money

  As blockchains and distributed systems have evolved, the programs that we can safely run on them have increased in both complexity and bandwidth, and new approaches to application development have allowed for more private applications to be built on top of these public networks.

  The first private application built on top of Ethereum (the worlds biggest public computer) I remember hearing about was Tornado Cash.

  Tornado Cash allows for users to deposit pre-determined amounts, e.g. units of 10, 100, 1000 etc into one big pot. Then, whenever the original depositor wants to, they can withdraw their deposited funds to a new address, without revealing any details about their original deposit. The protocol utilises Zero Knowledge proofs to keep details private - an incredibly exciting, emerging area of applied mathematics and cryptography.

  In an ideal world, everyone would use an application like this for a bit of privacy enhancement and a bit more digital discretionary spending (just as they would cash), but unfortunately with any great power comes good and bad, and these same permissionless systems that increase privacy do exactly that for bad actors. It's estimated that 30% of all tornado cash deposits are tied to bad actors, [per chainalysis](https://www.chainalysis.com/blog/tornado-cash-sanctions-challenges/).

  Despite the world having pieces of shit who abuse systems to or in the process of hurting others, as a somewhat staunch libertarian/fence sitter, the perks of privacy enhancing technologies such as tornado cash, and more broadly the Zero Knowledge proofs that power them, represent what I believe to be the start of a privacy revolution in computing. As soon as I learnt about Zero Knowledge proofs, I wanted to figure out how to program them, and so further down the rabbit hole I went.

  ## Roman Kyoto Team Formation

  After I went to my first in person hackathon in Paris in 2023 for ZKLambdaWeek (an awesome event run by [LambdaClass](https://x.com/class_lambda)), I quickly realised that hackathons were probably the best place to meet giga brains who better understood the moon-maths at play in ZK systems, so when ETHGlobal announced they were hosting an ETHGlobal hackathon in Sydney I was very keen.

  After posting that I was looking to work on a ZK application I met my team mates Rudi, Ayad and Jack in the ETHGlobal discord and we started discussing what to build.

  Rudi was very keen to build a MASP, a Multi Asset Shield Pool. From a high level, a MASP allows users to have a single application where they can:

  - Deposit any asset into a single application - in our case ERC20 tokens (USDC, wETH, wBTC, USDT, etc).
  - **Privately** transfer whatever amount of whatever asset up to the balance that they have deposited, to whoever they want.
  - Users can withdraw up to their balance of any given token from the application whenever they want

  He sent through some resources to better explain how a system like this would work, but truthfully these articles may as well have been hieroglyphs, and I didn't think we'd actually be able to build it. Thankfully Rudi dumbed down a lot of the content and answered all my questions, so thanks to him the project was looking a lot more feasible by the time ETHGlobal kicked off.

  ## Quick Legal and Mathematical Disclaimer

  Probably unnecessary - but before I explain how any of this works I'd like to preface by saying - **I will not, nor will I ever deploy a program like Roman Kyoto without a team of high calibre, remarkably overpaid lawyers giving me a big thumbs up to do so.** This is merely a research exercise. It sucks to have to say this, but Tornado Cash and other privacy enhancing application developers have been arrested and imprisoned for creating open source code bases that anyone can read and deploy anyway. You can't restrict information, and prohibition does not work. These harsh sentences don't do anything except disrupt lives and further restrict each and every individuals right to digital privacy, rather than educate those on an emerging, promising technological development.
  
  I'm confident there exists a non-dystopian future where we can have a legally compliant, peer to peer completely private money transferral protocol, but until then, a lot of the pioneers of the field are forced to serve heavy sentences that are unjust.

  A less political disclaimer, some of the maths here might also be incorrect - so if you see anything here or in the code base that is incorrect, please reach out.

  ## The Roman Kyoto Protocol

  The first thing to consider in the protocol is it's use of UTXO (Unspent Transaction Output) notes. The best way to explain this is to think of the following model:

  Say I have 3 unique notes:

  - 1 x $150 note
  - 1 x $121 note
  - 1 x $210 note

  And I need to send my mate Greg \\$231. In a UTXO model, I would use my \\$210 note and my \\$121 note to get to at least \\$231, then request change from who I am sending my money to.

  `,
  `

  So to summarise, the inputs of this transaction are:

  - 1 x \\$210 note (owned by me)
  - 1 x \\$121 note (owned by me)

  and the outputs are:

  - 1 x \\$231 note (owned by Greg)
  - 1 x \\$100 note (owned by me)

  The most important property to take note (haha) of in this example is that **the sum of the value of the inputs is always equal to the sum of the value of the outputs.**

  $$ Inputs = Outputs $$

  $$ 210 + 121 = 231 + 100 $$

  $$ 321 = 321 $$ 
  
  Now, lets scale up our example. Say that it's not just Greg and I who have notes in this currency, but a few others too. So long as the creation and deletion of new value into the system is specified and agreed upon, this amount never changes.

  We could represent all of the notes in our system like so:
  `,
  `
  And lets call this representation an 'inventory version'. The inventory, and thus the inventory version changes every single there is a transaction. So at inventory version 10 I might have 3 notes that sum to \\$141, and at inventory version 200, 201 and 202 I might have 8 notes that sum to \\$91.
  `,

  `
  New notes come into the system, and old notes are marked as spent, but the sum of all values always stays the same.
    
  One of the cool property of this note system is that if I don't do any new transactions for a while - it doesn't really matter. I can use the latest inventory version just the same, as the place where my inventory is has not changed, as inventory is sorted by date of creation ascending. If someone sends me a note, I would use the inventory version where they create that new note, or any after.
  
  ## Making Note Transactions Private

  Our note system above is cool, but all of it's variables are still public. If we did make these notes values private - how could we ever build a system where we can maintain our unbreakable rule of $$ inputs = outputs $$? i.e. how can we do calculations and evaluations on things that we cannot see? 
  
  One way of being able to do this using Homomorphic encryption. Homomorphic Encryption is a form of encryption that allows for computations to be performed on encrypted data, without having first to decrypt it. It's an incredibly cool, complicated, computationally expensive area of mathematics that uses elliptic curve addition (adding points together on a curve), but we can skip most of the lingo - just understand that it kind of works like a gibberish calculator. If you hit the same buttons in the same order, you'll get the same output.

  If we change our value conservation formula to use homomorphic commitments rather than standard numbers - we can mask values of individual transactions, while still enforcing our invariant without knowing what value each transaction is.

  The other secret sauce that we'll need to make transactions private is Zero Knowledge proofs. A zero knowledge proof is a way of proving something that is true, without revealing how you know it is true. Repeating myself a little here, but Zero Knowledge proofs are an incredibly cool, complicated, computationally expensive area of mathematics that uses different properties of polynomials to verify data inputs fit a specified criteria, without revealing the data itself.

  The trick in making our note system private is to get these two technologies to work together, that is:

  _If we can prove that our homomorphic commitment value note is within an inventory version without revealing any details about the note itself, we can privately spend our notes._

  In order to do this, we have to make our model a little bit more complex.

  `,
];

// ## TO SORT

// Rudi also has [an awesome write up about MASPS too](https://theblockhacker.substack.com/p/roman-kyoto-protocol-in-depth), go give that a read.

const IndividualRamble = () => {
  return (
    <Layout
      title={`${TITLE} | hooper.link`}
      shareable={{
        title: TITLE,
        description: "my attempt at explaining a multi asset shield pool",
        image: `https://hooper.link${IMAGE}`,
        url: `https://hooper.link${URL}`,
      }}
    >
      <div className="flex flex-col w-full">
        <div className="align-left ml-[-30px]">
          <Image src={IMAGE} alt="Roman Kyoto" width={700} height={500} />
        </div>
        <div className="text-xs mb-[15px] italic text-black dark:text-darkCream">
          Integers that some consider liberating, and that others consider
          dangerous, circa 2024.
        </div>

        <div className="max-w-[600px] w-full prose-p:text-[14px] prose-li:text-[14px] prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream dark:prose-li:text-darkCream">
          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[0]}
          </Markdown>

          <Image
            src="/roman-kyoto/purchase.png"
            alt="public purchase"
            width={700}
            height={200}
          />

          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[1]}
          </Markdown>

          <div className="m-w-[300px]">
            <UTXO />
          </div>

          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[2]}
          </Markdown>

          <div className="m-w-[300px]">
            <Notes />
          </div>

          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[3]}
          </Markdown>

          <SpentNotes />

          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[4]}
          </Markdown>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualRamble;

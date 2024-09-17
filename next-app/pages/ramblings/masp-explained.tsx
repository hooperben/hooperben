import "katex/dist/katex.min.css";
import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Layout from "../../components/Layout";

const TITLE = "Private Unstoppable Money";
const IMAGE = "/roman-kyoto/thumbnail.svg";
const URL = "/ramblings/masp-explained";

const markdown = [
  `
  # ${TITLE}

  In May this year, I competed in my first ETHGlobal Hackathon in Sydney where we created Roman Kyoto, a Multi Asset Shield Pool. The goal of this article is to explain what a Multi Asset Shield Pool is, how it works, and how you could be using one sooner than you'd think.

  At the moment, chances are that 99.9% of everything that you have seen to do with crypto or blockchains have occurred on public computer networks. Every dog shitcoin, every monkey profile picture, every time you've ordered illicit substances that you thought were anonymous - chances are that all details of these transactions are public for all to see.

  Is this a feature? or is this a bug? Well, it does depend on the application, but for example, if everyone could see each others bank account balances and spending habits like this, I think this would be a much worse system than what we currently have. Blockchains and cryptocurrency need privacy enhancement tools, otherwise their real world applications are kind of inherently limited, especially versus what is now mainstream internet computing.

  At the time of writing, the stablecoin market (tokens that represent and are backed* by real world currency) currently sits at **~$170.01 Billion USD** [per DefiLlama](https://defillama.com/). 

  *backed here is arguably subjective in aggregate, as it may include volatile, over-valued or over-leveraged protocols, but even factoring this in and rounding down to $150B, it is still a sizeable asset class, all deployed on public computer networks.

  This volume of value has given birth to a new era of decentralised finance (defi for short). Where in the current banking system you have to pay the banker/middleman for their services (and they often jip you), defi aims to level the playing field, where finance can return to more of a peer to peer model, versus being controlled by monolith firms that are too big to fail, until they aren't.

  Defi has and will continue to steal volume from the traditional banking system as it evolves, but a lot of the current use cases of decentralised finance don't really appeal to the masses, and even if they did, the privacy conscious amongst us would be quick to highlight the lack of privacy on current blockchain networks, and return their money to banks where their information is a bit more hidden - which is very understandable.

  But, what if we could have private balances of real assets, on a public computer network?
  
  `,
];

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
        <Image
          src={IMAGE}
          alt="Roman Kyoto"
          width={200}
          height={300}
          className="ml-[-100px] w-[700px]"
        />
        <div className="text-xs mt-[-20px] mb-[15px] italic">
          Integers that some consider liberating, and that others consider
          dangerous, circa 2024.
        </div>

        <div className="max-w-[600px] w-full prose-p:text-[14px] prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown[0]}
          </Markdown>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualRamble;

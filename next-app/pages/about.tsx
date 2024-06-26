import Layout from "../components/Layout";
import Markdown from "react-markdown";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

import { FaReact, FaRust } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSolidity, SiTypescript } from "react-icons/si";

const sections = [
  `
  ## My Flex Catalogue

  I am currently a Full Stack Engineer $$ (hacker_man) $$, who is most interested in blockchain and distributed computer systems. There's
  a few areas of blockchain, and lately I am most interested in zero knowledge proofs and their applications.

  Below is a compiled list of flexes I can do, and some of my experiences flexing said flex.

  ### Front End / Interfaces (The thing you use that doesn't look like a command line)

  I am most comfortable with react but lately that has taken form in the shape of next. 
  I have also used vue and angular in the past, but I am not as comfortable with them.
  I can make a front end look decent enough (this site is built with react/next with the
  tailwindcss library, with markdown text for big blocks of text like you're currently reading),
  but front end isn't quite my forte (for-tay).

  I am interested in getting better at wasm, and have been playing around with rust and web assembly.
`,
  `
  <br>

  ### Back End / Databases / Data Structures (the tendons and the grizzly shit)
 
  I am most familiar with moving data around using typescript, and have a pretty extensive knowledge of solidity
  and the EVM as a whole.

  My rust is pretty good, but my use of it is pretty case specific to cryptography. I am trying to get
  better at it, but trying to find exercises of cryptographic rust implementations is easier said than done lol.

`,
  `
  <br>

  ### Infrastructure / Computers / Making sure your .com is where it should be

  I am pretty decent at computer infrastructure, I can get all kinds of computers set up on AWS, GCP or some things in Azure, but it's not really
  a passion of mine.
  
  Vercel has made web deployment so incredibly easy that a lot of the time I choose to deploy with it (this app is deployed with Vercel).
  
  My current thinking at the moment for infrastructure down the line is blockchain. I think that a big computer no one controls has
  it's place in wherever we are headed as a species, so that's where I'm currently spending the most time talking shop.
`,
  `
  <br>

  ### Experience

  <img src="/labrys.webp" alt="drawing" width="100"/>

  #### Labrys

  **October 2021 - Ongoing**

  I am currently a Senior Blockchain Engineer at Labrys. Labrys is a blockchain consultancy that does a little bit of everything.
  I primarily work with web technologies - mostly MERN stack for web 2 integrations, and Solidity/EVM based solutions for web 3 integrations.

  <img src="https://www.mtpconnect.org.au/m/Image?Action=View&Image_id=880" alt="drawing" width="100"/>

  #### Auxita

  **March 2021 - October 2021**

  I worked at Auxita as a Full Stack Engineer. Auxita is a medical software company making health care more efficient
  by making health care softwares that talk to each other (much better than what's currently there).

  using the MERN stack and hosting most things on AWS.

  <img src="https://www.data3.com/wp-content/themes/data3/assets/images/logo.svg" alt="drawing" width="100"/>

  #### Data#3

  **September 2019 - December 2020**
  
  I worked at Data#3 as an Integration Developer. Data#3 is a big company and uses a lot of softwares, and in order for that data
  to move around smoothly, you need an integration platform managing it for you.
  `,
];

const size = 40;

const fancy = [
  <div className="flex flex-row align-baseline mb-7 ">
    <FaReact size={size} />
    <TbBrandNextjs size={size} />
    <div>
      <p>(WASM doesn&apos;t have a react-icons/fa)</p>
    </div>
  </div>,
  <div className="flex mb-7">
    <SiTypescript size={size} />
    <SiSolidity size={size} />
    <FaRust size={size} />
  </div>,
  <div className="flex mt-6"></div>,
];

// TODO make this markdown generic
const AboutPage = () => (
  <Layout title="about | hooper.link">
    <div className="prose text-black dark:text-darkCream">
      {sections.map((section, i) => (
        <div className="prose dark:prose-invert text-black dark:text-darkCream dark:prose-strong:text-darkCream dark:prose-h1:text-darkCream dark:prose-h2:text-darkCream dark:prose-h3:text-darkCream dark:prose-h4:text-darkCream dark:prose-h5:text-darkCream dark:prose-h6:text-darkCream">
          <Markdown
            children={section}
            key={i}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
          />
          {fancy[i]}
        </div>
      ))}
    </div>
  </Layout>
);

export default AboutPage;

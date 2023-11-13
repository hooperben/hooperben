import Layout from "../components/Layout";
import Link from "next/link";

const Ramblings = () => (
  <Layout title="ramblings | hooper.link">
    <div className="flex flex-col text-black dark:text-darkCream">
      ramblings
    </div>

    <Link href="/ramblings/tester">
      <div className="flex bg-lightCream dark:bg-lightBlack">Rambling 1</div>
    </Link>
  </Layout>
);

export default Ramblings;

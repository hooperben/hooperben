import Layout from "../../components/Layout";

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Return the 'id' as a prop
  return {
    props: {
      id,
      // If you fetched data: data
    },
  };
}
const IndividualRamble = ({ id }) => {
  return (
    <Layout title={`${id} | hooper.link`}>
      <div>
        <h1>Rambling Page: {id}</h1>
      </div>
    </Layout>
  );
};

export default IndividualRamble;

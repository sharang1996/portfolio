import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

//use the below services as a parameter if you use getstaticprops or getserversideprops
//const index = ({ services }) => {

const index = ({}) => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently working as a software developer at The Hut Group in
        Manchester. I have completed my Master&apos;s degree in Computer Science
        from University of Southampton, and have a cumulative work experience of
        roughly 3 years, ranging from small startups to Fortune 500 companies. I
        also take up freelance projects occasionally.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

//run at every page refresh!
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   //console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

//Run only once at build time, but in development mode its run everytime!
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   //console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

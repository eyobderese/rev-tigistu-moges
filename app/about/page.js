import BiographyCard from "../_components/Bio/BiographyCard";
import Bio from "../_components/Home Content/bio";
import Line from "../_components/Line/line";

export default function BioPage() {
  return (
    <main className="mx-[5%] lg:mx-0">
      <Bio className="sm:flex-row-reverse md:justify-around" ishideden={true} />
      <div className="mx-[20%] my-5 ">
        <p className="text-2xl font-bold mx-1">Biography</p>
        <Line className="md:w-1/5 mx-1" />
      </div>
      <BiographyCard direction="left" />
      <BiographyCard direction="right" />
      <BiographyCard direction="left" />
      <BiographyCard direction="right" />
      <BiographyCard direction="left" />
    </main>
  );
}

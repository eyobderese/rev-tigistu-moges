import getStoryblokClient from "@/service/storyBlokService";
import BiographyCard from "../_components/Bio/BiographyCard";
import Bio from "../_components/Home Content/bio";
import Line from "../_components/Line/line";

export default async function BioPage() {
  const components = await getStoryblokClient("about");
  const BioCards = components.BioContainer.BioCards;

  return (
    <main className="mx-[5%] lg:mx-0">
      <Bio
        className="sm:flex-row-reverse md:justify-around"
        ishideden={true}
        content={components.Bio}
      />
      <div className="mx-[20%] my-5 ">
        <p className="text-2xl font-bold mx-1">Biography</p>
        <Line className="md:w-1/5 mx-1" />
      </div>
      {BioCards.map((card, index) => {
        const direction = index % 2 === 0 ? "left" : "right";
        return <BiographyCard key={card.id} direction={direction} {...card} />;
      })}
    </main>
  );
}

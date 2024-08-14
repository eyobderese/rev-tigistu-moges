import TeachingCard from "../_components/Card/teachingCard";
import Teaching from "../_components/Home Content/teaching";

export default function TeachingPage() {
  return (
    <main className="lg:mx-[160px]">
      <Teaching buttonHidden={true}>
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
        <TeachingCard />
      </Teaching>
    </main>
  );
}

import FaqAccordion from "./accordion/FaqAccordion";

function Faq() {
  return (
    <div className="max-w-[1000px] mx-auto py-24">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-xl pb-2">FREQUENTLY ASKED QUESTIONS</h3>
        <h2 className="text-4xl font-medium text-black">Local Genius FAQs</h2>
      </div>
      <FaqAccordion/>
    </div>
  );
}

export default Faq;

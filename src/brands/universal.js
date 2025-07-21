// src/data/symptomMap.js

const symptomMap = {
  bloating: {
    supplements: [
      {
        name: "L-glutamine",
        reason:
          "supports intestinal lining and reduces inflammation often associated with bloating."
      },
      {
        name: "Digestive Enzymes",
        reason:
          "help break down food properly to reduce fermentation and bloating."
      },
      {
        name: "Ginger extract",
        reason:
          "soothes the gut and promotes gastric emptying."
      }
    ],
    followUp: "Do you notice more bloating after specific foods or meals?"
  },
  constipation: {
    supplements: [
      {
        name: "Magnesium citrate",
        reason:
          "helps draw water into the bowel and promote regular bowel movements."
      },
      {
        name: "Fiber supplement (like psyllium husk)",
        reason:
          "adds bulk to stool and supports bowel regularity."
      },
      {
        name: "Aloe vera",
        reason:
          "has natural laxative properties and soothes the digestive tract."
      }
    ],
    followUp: "How many days do you usually go between bowel movements?"
  },
  diarrhea: {
    supplements: [
      {
        name: "Saccharomyces boulardii",
        reason:
          "a probiotic yeast that helps normalize bowel movements and combat pathogens."
      },
      {
        name: "Activated charcoal",
        reason:
          "can bind toxins and reduce urgency."
      },
      {
        name: "Electrolyte formula",
        reason:
          "helps rehydrate and replace lost minerals."
      }
    ],
    followUp: "How often do you experience loose stools each week?"
  },
  brainFog: {
    supplements: [
      {
        name: "Lion’s Mane mushroom",
        reason:
          "supports cognitive function and nerve regeneration."
      },
      {
        name: "Omega-3 fatty acids",
        reason:
          "reduce inflammation and support brain health."
      },
      {
        name: "Acetyl-L-carnitine",
        reason:
          "boosts mitochondrial energy in brain cells."
      }
    ],
    followUp: "Do you notice your brain fog gets worse after eating certain foods?"
  },
  fatigue: {
    supplements: [
      {
        name: "Adaptogenic herbs (like Rhodiola or Ashwagandha)",
        reason:
          "help regulate stress and energy levels."
      },
      {
        name: "B-complex vitamins",
        reason:
          "support energy production and reduce fatigue."
      },
      {
        name: "CoQ10",
        reason:
          "supports mitochondrial energy."
      }
    ],
    followUp: "Is your fatigue constant, or does it fluctuate during the day?"
  },
  acne: {
    supplements: [
      {
        name: "Zinc picolinate",
        reason:
          "helps reduce skin inflammation and supports immune function."
      },
      {
        name: "DIM (Diindolylmethane)",
        reason:
          "supports estrogen metabolism, often related to acne."
      },
      {
        name: "Probiotic blend",
        reason:
          "helps rebalance gut flora which can affect skin health."
      }
    ],
    followUp: "Do you notice breakouts worsen around your menstrual cycle or certain foods?"
  }
};

export default symptomMap;

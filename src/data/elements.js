export const elements = {
  1: { name: "Hydrogen", symbol: "H", atomicNumber: 1, mass: 1.008, cpk: "#FFFFFF", desc: "The lightest element.", uses: "Fuel, Water", hazards: "Flammable" },
  2: { name: "Helium", symbol: "He", atomicNumber: 2, mass: 4.0026, cpk: "#D9FFFF", desc: "Inert gas.", uses: "Balloons, Cooling", hazards: "Asphyxiant" },
  3: { name: "Lithium", symbol: "Li", atomicNumber: 3, mass: 6.94, cpk: "#CC80FF", desc: "Soft, silvery-white alkali metal.", uses: "Batteries, Ceramics", hazards: "Reactive" },
  4: { name: "Beryllium", symbol: "Be", atomicNumber: 4, mass: 9.0122, cpk: "#C2FF00", desc: "Strong, lightweight alkaline earth metal.", uses: "Aerospace, X-ray windows", hazards: "Toxic" },
  5: { name: "Boron", symbol: "B", atomicNumber: 5, mass: 10.81, cpk: "#FFB5B5", desc: "Metalloid.", uses: "Glass, Detergents", hazards: "Low toxicity" },
  6: { name: "Carbon", symbol: "C", atomicNumber: 6, mass: 12.011, cpk: "#909090", desc: "Basis of life.", uses: "Steel, Filters", hazards: "None usually" },
  7: { name: "Nitrogen", symbol: "N", atomicNumber: 7, mass: 14.007, cpk: "#3050F8", desc: "Colorless gas.", uses: "Fertilizers, Cooling", hazards: "Asphyxiant" },
  8: { name: "Oxygen", symbol: "O", atomicNumber: 8, mass: 15.999, cpk: "#FF0D0D", desc: "Essential for respiration.", uses: "Steel, Medical", hazards: "Oxidizer" },
  9: { name: "Fluorine", symbol: "F", atomicNumber: 9, mass: 18.998, cpk: "#90E050", desc: "Pale yellow gas.", uses: "Toothpaste, Teflon", hazards: "Toxic, Corrosive" },
  10: { name: "Neon", symbol: "Ne", atomicNumber: 10, mass: 20.180, cpk: "#B3E3F5", desc: "Inert gas.", uses: "Signs, Lasers", hazards: "Asphyxiant" },
  // ... simplified for brevity, can expand if needed. 
  // Adding a helper to get element by proton count
};

export const getElement = (protonCount) => {
  if (elements[protonCount]) {
    return elements[protonCount];
  }
  return { name: "Unknown / Unstable", symbol: "?", atomicNumber: protonCount, mass: "?", cpk: "#555555", desc: "Not a stable or known element in this simplified DB.", uses: "N/A", hazards: "Radioactive?" };
};

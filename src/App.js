import TeamComp from "./components/TeamComp";
import HoneycombBoard from "./components/HoneycombBoard";
import Voice from "./voice_detection/Voice";
import Items from "./components/items";
import Champions_splash from "./components/Champions_splash";
import RecommendedChampions from "./components/RecommendedChampions";
import OptimalFormationBoard from "./components/OptimalFormationBoard";
function App() {
  return (
    <div className="bg-[#151515] p-10  ">
      <div className="border border-zinc-800  bg-dots-pattern">
        <header className="text-white py-4  mb-10 px-[10%]">
          <div className="flex justify-between font-semibold text-sm">
            <h1>ESTRATEGO</h1>
            <ul className="flex gap-6 indicator-list">
              <li>CAMPEONES</li>
              <li>CUADRILATERO</li>
              <li></li>
            </ul>
          </div>
        </header>
        <div className="max-w-4xl mx-auto space-y-10">
          <TeamComp></TeamComp>
          <RecommendedChampions />
          <HoneycombBoard />
          <OptimalFormationBoard />
          <Voice></Voice>
          <Items> </Items>

        </div>
      </div>
    </div>
  );
}

export default App;

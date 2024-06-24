<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import TeamComp from "./components/TeamComp";
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
import HoneycombBoard from "./components/HoneycombBoard";
import Voice from "./voice_detection/Voice";
import Items from "./components/items";
import Champions_splash from "./components/Champions_splash";
<<<<<<< HEAD
import Shop from "./components/Shop";
import RecommendedCompositions from "./components/RecommendedCompositions.jsx";
import LoadingScreen from './components/LoadingScreen';
import Logo from "./images/Logo.png";
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import { fetchCombinations } from './redux/actions';

function App() {

  const [leagueDetected, setLeagueDetected] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCombinations());
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/isopen');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setLeagueDetected(result);
      } catch (error) {
        // Handle error if necessary
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);



  return (
    <Provider store={store} >
      <div className="bg-[#151515] h-screen">
        {
        !leagueDetected.League_state ?
          <LoadingScreen />
          :
        <div className="bg-[#151515] p-10  ">
          <div className="border border-zinc-800 bg-dots-pattern ">
            <header className="text-white py-4  mb-10 px-[10%] flex gap-3 items-center">
              <img src={Logo} alt="logo" className="w-14" />
              <div>
                <h1 className="font-semibold">ESTRATEGO</h1>
                <span className="text-xs">Team Fight Tactics Set 11</span>
              </div>

            </header>
            <div className="max-w-4xl mx-auto space-y-10">
              <RecommendedCompositions></RecommendedCompositions>
              <HoneycombBoard />
              <Shop></Shop>
              {/* <Voice></Voice> */}
              <Items> </Items>
            </div>
          </div>
        </div>
        } 
      </div>
    </Provider>
  );
}

export default App;
=======
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
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58

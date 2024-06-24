import { useEffect, useState } from "react";
import HoneycombBoard from "./components/HoneycombBoard";
import Voice from "./voice_detection/Voice";
import Items from "./components/items";
import Champions_splash from "./components/Champions_splash";
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
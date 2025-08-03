import "./App.css";
import { createMarket, CreateMarketWithWSOL } from "./components/CreateMarket";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-b-2 border-gray-300 h-screen flex flex-col items-center justify-center">
              <div className="border border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center gap-4">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    Solana CP Liquidity Market Creator
                  </h1>
                  <p className="text-gray-400">
                    Create a CP liquidity pool on Solana using the OpenBook program.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                  <CreateMarketWithWSOL />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

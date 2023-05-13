import { useState } from 'react';
import './App.css';


function App() {

  const [cardNumber, setCardNumber] = useState(0);
  const [cardName, setCardName] = useState("JANE APPLESEED");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvc, setCvc] = useState(0);
  const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  return (
    <>
      <main className="grid self-center h-screen gap-2 py-8 px-8 lg:px-24">
        <div className="App content-center grid lg:grid-cols-2">
          <div id='cards' className='text-white lg:max-w-2xl'>
            <img id='cardBack' src={require("./images/bg-card-back.png")} alt="Card Back" className='' />
            <img id='cardFront' src={require("./images/bg-card-front.png")} alt="Card Back" className='' />
            <div id="cardLogo">

            </div>
            <p id='cardName' className='text-xs sm:text-xl opacity-75 lg:text-base xl:text-lg'>{cardName}</p>
            <p id='cardNumber' className='tracking-widest text-base sm:text-2xl lg:text-xl xl:text-2xl'>{String(cardNumber).padEnd(16, '0').toString().replace(/\d{4}(?=.)/g, '$& ')}</p>
            <p id='cardDate' className='text-xs sm:text-xl lg:text-base pacity-75 xl:text-lg'>{String(month).padStart(2, '0')}/{String(year).padStart(2, '0')}</p>
            <p id='backNumber' className='text-xs text-white tracking-widest sm:text-xl lg:text-base xl:text-xl'>{String(cvc).padStart(3, '0')}</p>
          </div>
          <div className="content-center grid">
            <form id='form' className='px-6 grid gap-2 justify-self-center lg:w-4/6 self-center' action="">
              <label className='text-xs tracking-wider' htmlFor="cardName">CARDHOLDER NAME</label>
              <input className='border rounded-md py-2 px-3 mb-4' placeholder='e.g. Jane Appleseed' type="text" name="cardName" maxLength={20}
                onChange={(event) => setCardName(event.target.value.toUpperCase())} />
              <label className='text-xs tracking-wider' htmlFor="cardNumber">CARD NUMBER</label>
              <input className='border rounded-md py-2 px-3 mb-4' type="number" placeholder='0000 0000 0000 0000' name="cardNumber"
                onInput={(event) => {
                  if (event.target.value.length > 16) {
                    event.target.value = event.target.value.slice(0, 16)
                  }
                }}
                onChange={(event) => {
                  if (event.target.value.length < 17) {
                    setCardNumber(event.target.value)
                  }
                }} />
              <div className='grid grid-cols-2 gap-2'>
                <div className='grid'>
                  <label className='text-xs tracking-wider' htmlFor="date">EXP. DATE (MM/YY)</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <input className='border rounded-md py-2 px-3 mb-4' placeholder='12' type="number" name="month" max={12} onInput={(event) => {
                      if (event.target.value.length > 2) {
                        event.target.value = event.target.value.slice(0, 2)
                      }
                    }}
                      onChange={(event) => {
                        if (event.target.value.length < 3) {
                          setMonth(event.target.value)
                        }
                      }} />
                    <input className='border rounded-md py-2 px-3 mb-4' placeholder='26' type="number" name="year" onInput={(event) => {
                      if (event.target.value.length > 2) {
                        event.target.value = event.target.value.slice(0, 2)
                      }
                    }}
                      onChange={(event) => {
                        if (event.target.value.length < 3) {
                          setYear(event.target.value)
                        }
                      }} />
                  </div>
                </div>
                <div className='grid'>
                  <label className='text-xs tracking-wider' htmlFor="">CVC</label>
                  <div className=''>
                    <input className='border rounded-md py-2 px-3 mb-4 w-full' placeholder='123' type="number" name="cvc" onInput={(event) => {
                      if (event.target.value.length > 3) {
                        event.target.value = event.target.value.slice(0, 3)
                      }
                    }}
                      onChange={(event) => {
                        if (event.target.value.length < 4) {
                          setCvc(event.target.value)
                        }
                      }} />
                  </div>
                </div>
              </div>
              <input className='text-white rounded-md p-3' id='submit' type="submit" value="Confirm" />
            </form>
          </div>
        </div>
        <script src="./index.js"></script>
      </main>
    </>
  );
}

export default App;

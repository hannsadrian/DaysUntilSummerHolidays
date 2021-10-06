import './App.css'
import './tailwind.css'

function App() {
  return (
    <div className="h-full pb-64 bg-fixed background-beach">
      <header className="container h-full min-h-screen px-3 pb-32 sm:mx-auto">
        <div style={{ height: '20vh' }}></div>
        <div className="p-5 pb-6 mx-auto bg-pink-100 rounded-lg shadow-2xl sm:p-10 sm:pb-12 sm:max-w-lg">
          <h1 className="text-3xl font-bold">
            <span className="text-5xl">🏝</span>
            <br />
            <span className="inline-block h-full leading-tight text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-red-500">
              Days until Summer Holidays
            </span>
          </h1>
          <p className="text-red-400 opacity-75">
            The one question every student (and teacher?) occasionally comes across is finally
            answered!
          </p>
          <hr className="mt-4 mb-3 overflow-hidden bg-pink-200 border-2 border-pink-200 rounded-lg border-1" />
          {/**<h3 className="mb-1 text-lg font-semibold text-red-600">Some Questions first</h3>
          <label className="flex items-center">
            <input type="checkbox" className="text-blue-600 border-0 rounded-md" />
            <span className="ml-2">Do you only go to school on weekdays?</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Does your school have extra days off?</span>
  </label>**/}

          <label className="flex items-center justify-between mt-2">
            <span className="mr-2 text-pink-700">When do your summer holidays start?</span>
            <input
              style={{ maxWidth: '110px' }}
              className="block px-1 placeholder-pink-300 rounded bg-pink-50"
              placeholder="26.07.2020"
            />
          </label>
        </div>
      </header>
    </div>
  )
}

export default App

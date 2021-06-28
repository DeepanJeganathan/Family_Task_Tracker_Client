
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main'
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App container">
      <Provider store={store}>
        <Nav />
        <div className="task-list mt-4">
          <Main className="bg-light" />
        </div>
      </Provider>
    </div>
  );
}

export default App;

import './App.css'
import RouteList from './router/routerIndex';
import { Slider } from 'antd';

function App() {
  // const routes = useRoutes(router);
  return (
    <div className="App">
      <RouteList></RouteList>
    </div>
  );
}

export default App;
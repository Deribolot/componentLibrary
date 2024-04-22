import noop from 'lodash/noop';
import Menu from './components/Menu';

const App = () => (
  <div className='main'>
    <Menu items={{ 'home': '' }} activeKey='home' setActiveKey={noop} />
  </div>
);

export default App;

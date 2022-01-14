import { Route, Switch } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
    
    <Switch>
       <Route path ='/' exact>
        <AllMeetups />
       </Route>
        <Route path ='/new-meeting'>
      <NewMeetup />
       </Route>
      <Route path ='/favourites'>
        <Favourites />
    </Route>
    </Switch>
    </Layout>
      

  );
}

export default App;

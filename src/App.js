import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import FunctionalComponent from "./Components/FunctionalComponent";
import ClassComponent from "./Components/ClassComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import States from "./Components/States";
import Counter from "./Components/Counter";
import Parent from "./Components/Parent";
import ListMap from "./Components/ListMap";
// import Form from "./Components/Form";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import UserData from "./Components/UserData";
import ResetPassword from "./Components/ResetPassword";
import { PostsList } from "./Components/PostsList";
import { EditPostForm } from "./Components/EditPostForms";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "./store/store";
let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      {/* //PersistGate delays the rendering of UI until the persisted state has been retrieved and saved to redux */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/">
              <Route index element={<UserData />} />
              <Route path="class" element={<ClassComponent />} />
              <Route path="resume" element={<Main />} />
              <Route path="function" element={<FunctionalComponent />} />
              <Route path="states" element={<States />} />
              <Route path="Counter" element={<Counter />} />
              <Route path="usememo" element={<Parent />} />
              <Route path="listmap" element={<ListMap />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="post" element={<PostsList />} />
              <Route path="/editPost/:postId" element={<EditPostForm />} />
              <Route path="Login" element={<Login />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

{
  /* 
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes>; 
*/
}

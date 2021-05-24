import { AppHeader } from "./components/AppHeader";
import { NoteShelf } from "./components/Menu/NoteShelf";
import { NoteCreator } from "./components/NoteCreator";
import FloatingActionButton from "./components/FloatingActionButton/FloatingActionButton";
import AddIcon from "./assets/add_icon.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "./StateManager";
import "./App.css";

function App() {
  // for debugging
  const { state, dispatch } = useContext(StateContext);
  return (
    <div className="App">
      <AppHeader logo="" title="Note"></AppHeader>
      <main className="Deck">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <NoteShelf notesList={state.notes}></NoteShelf>
              <FloatingActionButton
                clickHandler={() => dispatch({ type: "create" })}
                color="salmon"
                size="3.75em"
              >
                <img src={AddIcon} alt=""></img>
              </FloatingActionButton>
            </Route>
            <Route path="/notes/:noteId">
              <NoteCreator></NoteCreator>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

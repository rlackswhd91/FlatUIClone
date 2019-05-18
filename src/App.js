import React from "react";
import seedColors from "./seedColors";
import Pallet from "./Pallet";
import { generatePallet } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PalletList from "./PalletList";
import SinglePallet from "./SinglePallet";
import NewPalletForm from "./NewPalletForm";

class App extends React.Component {
  // find pallet with id and pass to component as props in route.
  findPallet(id) {
    return seedColors.find(pallet => pallet.id === id);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/pallet/new" render={() => <NewPalletForm />} />
          <Route
            exact
            path="/"
            render={routeProps => (
              <PalletList {...routeProps} pallets={seedColors} />
            )}
          />
          <Route
            exact
            path="/pallet/:id"
            render={routeProps => (
              <Pallet
                {...routeProps}
                pallet={generatePallet(
                  this.findPallet(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/pallet/:palletId/:colorId"
            render={routeProps => (
              <SinglePallet
                {...routeProps}
                pallet={generatePallet(
                  this.findPallet(routeProps.match.params.palletId)
                )}
                colorId={routeProps.match.params.colorId}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
  // <Pallet {...routeProps} pallet={generatePallet(seedColors[4])} />
}

export default App;

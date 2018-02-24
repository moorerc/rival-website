import * as React from "react";
import "./Hello.css";

import { connect } from "react-redux";
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "../state/actions";

import { Dispatch } from "redux";

import { RootState } from "../state/store";

interface ConnectedProps {
  languageName: string;
  enthusiasmLevel: number;
}

interface ConnectedActions {
    onIncrement: () => void;
    onDecrement: () => void;
}

class Hello extends React.PureComponent<ConnectedProps & ConnectedActions, {}> {
    public render() {
      const { languageName, enthusiasmLevel = 1, onDecrement, onIncrement } = this.props;

      if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
      }

      return (
        <div className="hello">
          <div className="greeting">
            Hello {languageName + getExclamationMarks(enthusiasmLevel)}
          </div>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div>
        </div>
      );
    }
  }

const mapStateToProps = (state: RootState): ConnectedProps => {
    return {
        enthusiasmLevel: state.rivalWebsiteAppState.enthusiasmLevel,
        languageName: state.rivalWebsiteAppState.languageName,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): ConnectedActions => ({
    onDecrement: () => {
        dispatch(DECREMENT_ENTHUSIASM({}));
    },
    onIncrement: () => {
        dispatch(INCREMENT_ENTHUSIASM({}));
    },
});

export const ConnectedHello = connect(mapStateToProps, mapDispatchToProps)(Hello) as React.ComponentClass<{}>;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
}

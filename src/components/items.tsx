import * as React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';


interface OwnProps {
}

interface ConnectedProps {
  items: any,
  hasErrored: any,
  isLoading: any,
  boom: any
}

interface ConnectedActions {
  fetchData: (url: any) => void;
}

interface State {
}

class ItemList extends React.PureComponent<OwnProps & ConnectedProps & ConnectedActions, State>  {
  componentDidMount() {
      this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    return (
      <div>
        {"Four " + this.props.boom}
        <ul>
                {this.props.items.map((item: any, key:number) => (
                    <li key={key}>
                        {item.label}
                    </li>
                ))}
            </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        boom: state.testInteger
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: (url: any) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
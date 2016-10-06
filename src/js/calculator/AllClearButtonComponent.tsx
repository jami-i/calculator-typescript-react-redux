import * as React from 'react';
import * as OperationStore from './OperationStore';
import * as NumberInputState from './NumberInputStateStore';
import * as NumberInputStore from './NumberInputStore';
import * as LeftOperandStore from './LeftOperandStore';
import * as RightOperandStore from './RightOperandStore'

export default class AllClearButton extends React.Component<{}, {}> {

    clicked() {

        LeftOperandStore.instance.dispatch({
            type: NumberInputStore.InputActionType.Reset
        });

        RightOperandStore.instance.dispatch({
            type: NumberInputStore.InputActionType.Reset
        });

        NumberInputState.instance.dispatch({
            type: NumberInputState.ActionType.TO_LEFT
        });

        OperationStore.instance.dispatch({
            type: OperationStore.ActionTypes.UNSET
        });


    }

    render() {
        return <button onClick={this.clicked.bind(this)}>AC</button>
    }
}
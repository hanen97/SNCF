import React from 'react';
import PropTypes from 'prop-types';

export default class ListSncf extends React.Component<any, any> {
    static propTypes = { listStation: PropTypes.array.isRequired };

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.listStation.map((value:any, index:any) => {
                    return <li>{value}</li>
                })}
            </ul>
        );
    }
}

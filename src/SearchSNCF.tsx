import React from 'react';
import ListSncf from "./ListSncf/ListSncf";
import InputSncf from "./InputSncf/InputSncf";

export default class SearchSNCF extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            listStation: []
        };
        this.setGares = this.setGares.bind(this);
    }

    async setGares(gares:any) {
        this.setState({listStation: gares});
    }

    render() {
        return (
            <form className={"mt-3"}>
                <InputSncf setGares={this.setGares}/>
                <ListSncf listStation={this.state.listStation}/>
            </form>
        );

    }
}


import React from 'react';
import {SearchSNCF} from "../apiSncf";

export default class InputSncf extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    async onChangeInput(e:any) {
        let gares = await SearchSNCF(e.target.value) || [];
        this.props.setGares(gares);
    }

    render() {
        return (
            <form className={"mt-3"}>
                <div className={"input-group mb-3"}>
                    <div className={"input-group-prepend"}>
                        <span className={"input-group-text"}>Recherche</span>
                    </div>
                    <input type={"text"} className={"form-control"} id={"input-search"} onChange={this.onChangeInput}/>
                    </div>
            </form>
        )
    }
}

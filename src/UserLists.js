import React from "react";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";

export default class UserLists extends React.Component{
    state = { lists:[] , loading: false}
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = "Token ffbcb7be9ab960f6fe2635185b40e5c2264c1109";

        var url = 'http://127.0.0.1:8000/item/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data.results);
        this.setState({lists: data.results, loading: false});
    }
    render()
    {
        const listsApi = this.state.lists;
        var token = '';
        if(token==='')
           return <LoginComponent/>
        else
            return (
                <div>
                    {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} />)}
                </div>
            )
    }
}
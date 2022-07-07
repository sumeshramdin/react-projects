import React,{ Component } from 'react';

const MyContext = React.createContext();


class MyProvider extends Component {

    state = {
        stage:2
    }


    render(){
        return(
            <>
                <MyContext.Provider value={{
                    state: this.state
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }

}


export {
    MyContext,
    MyProvider
}
import React, { Component } from "react"
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }

    // props inc
    countHandler() {
        ReactDOM.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1} />
            </React.StrictMode>, document.getElementById("renderHere")
        )
    }

    /* Update stage */
    //  @deoricated - 16.3 , use static getDerivedStateFromProps instead; will stop working in React 17
    componentWillReceiveProps(nP) {
        console.log(`depricated-component will update`)
        console.log(`newProps=`, nP)
        if (nP.num >= 10) {
            this.setState({
                view: true
            })
        }
    }

    shouldComponentUpdate(nP, nS) {
        console.log(`should component update or not?`)
        console.log('newProps=', nP)
        console.log('newState=', nS)
        return true;
    }
    //  @deoricated - 16.3 , use getSnapshotBeforeUpdate instead; will stop working in React 17
    componentWillUpdate(nP, nS) {
        console.log(`depricated - component will update`)
        console.log('newProps=', nP)
        console.log('newState=', nS)
    }

    /* Mount methods*/
    componentWillUnmount() {
        console.log(`deprictaed-component will mount called`)
    }
    componentDidMount() {
        console.log(`component did mount called`)
    }
    render() {
        console.log('component rendered')
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">Counter</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-success">Num = {this.props.num}</h1>

                        <div>
                            {
                                this.state.view ?
                                    (<h1 className="text-center text-success">Welcome to react LifeCycle</h1>) :
                                    (
                                        <div>
                                            <h1 className="text-center text-Warning">Need More Counts</h1>
                                            <button onClick={() => this.countHandler()} className="btn btn-dark">Increment props</button>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(oP, oS) {
        console.log(`component did update`)
        console.log('oldProps=', oP)
        console.log('oldState=', oS)
    }

    // unmount
    componentWillUnmount() {
        console.log('component unmounted successfully')
    }
}

export default Counter;
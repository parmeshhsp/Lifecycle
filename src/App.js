import React , {Component} from 'react'
import ReactDom from 'react-dom'
import Counter from './component/Counter'

class App extends Component {
  constructor(props) {
    super(props);
  }

  mount(){
    ReactDom.render(<React.StrictMode>
    <Counter num={0}/>
    </React.StrictMode>,document.getElementById('renderHere'))
  }
  unMount(){
      ReactDom.unmountComponentAtNode(document.getElementById("renderHere"))
  }

  render() { 
    return ( 
      <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='display-1 text-success'>React LifeCycle</h3>
            </div>
          </div>

      <div className='row'>
            <div className='col-md-12'> 
              <button onClick ={()=> this.mount()} className='btn btn-outline-success'>Mount</button>
              <button onClick = {()=> this.unMount()} className='btn btn-outline-danger float-end'>UnMount</button>
            </div>
      </div>
          <section id='renderHere'></section>
      </div> 
     )
  }
}
 
export default App
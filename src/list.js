import { Component } from "react";
import image from './pngwing.com.png'

export class List extends Component{
    state = {
        userInput:'',
        groceryList: [],
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addItem(input){
        if (input===''){
            alert('Enter')
        }
        else{
            let listArray=this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList:listArray, userInput:''})
            console.log(listArray)
        }
    }

    crossedWord(event){
        const li=event.target;
        li.classList.toggle('crossed');

    }


    deleteItem(){
        let listArray=this.state.groceryList;
        listArray=[];
        this.setState({groceryList:listArray})
    }


    onFormSubmit(e){
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input value={this.state.userInput} placeholder="want to buy" type='text' onChange={(e)=>{this.onChangeEvent(e.target.value)}} />
                <button className="green" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
                <ul>
                    {this.state.groceryList.map((item, index)=>(
                        <li onClick={this.crossedWord} key={index}>
                            <img src={image} alt='j' width='30px'/>
                            {item}
                        </li>
                    ))}
                </ul>
                <button className="red" onClick={()=>this.deleteItem()}>Delete</button>
                </form>
            </div>
        )
    }
}
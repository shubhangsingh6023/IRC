import './Addcard.css'
import React,{Component}  from 'react';
import edit from '../images/edit.jpg' ;

export const Addcard =(props)=>{
    
    return(
        <div className="ul2">
            <form>
                <ul >
                    <li><label htmlFor="Uname">University Name</label><br/>
                    <input id="Uname" type="text"  onChange={props.setUname} placeholder="eg:IIT kgp.."  />
                    </li>
                    <li><label htmlFor="Cname">Country</label><br/>
                    <input id="Cname" type="text"  onChange={props.setCname} placeholder="eg:India"/>
                    </li>
                    <li><label htmlFor="Expense">Expenses</label><br/>
                    <input id="Expense" type="text"  onChange={props.setExpense} placeholder="eg:$20"/>
                    </li>
                    <li><label htmlFor="Deadline">Deadline</label><br/>
                    <input id="Deadline" type="date"  onChange={props.setDeadline} placeholder="eg:3rd May ,2021"/>
                    </li><br/>
                    <input  type="button" className="btn" onClick={props.setCount} value="Submit"></input>
                </ul>
            </form>
        </div>
    )
}

export const Cards=(props)=>{
    return(
        <div>
            <div className="edit"><img onClick={props.edit} src={edit} alt="edit" width="100%" height="100%" /></div>
            <div className="Uname"><h2>{props.Uname}</h2></div>
            <div className="Cname"><h3>{props.Cname}</h3></div>
            <div className="Expense"><h4>Expenses : {props.Expense}</h4></div>
            <div className="Deadline"><h4>Deadline : {props.Deadline}</h4></div>
            <div className="apply">Apply</div>
        </div>
    )
}
export default class Card extends Component{
    state={
        cardcount:0,
        value:["","","",""],
        cards:[],
        showtoAdd:true,
        editindex:null,
        message:""

    }
    setValue=(index,field)=>{
    
       this.state.value.splice(index,1,document.getElementById(field).value);
       console.log(this.state.value);
    }
    showToAdd=()=>{
        this.setState({showToAdd:!(this.state.showToAdd)});

    }
    editfn=(index)=>{
        this.setState({editindex:index});
        this.state.value.splice(0,1,this.state.cards[index][0]);
        this.state.value.splice(1,1,this.state.cards[index][1]);
        this.state.value.splice(2,1,this.state.cards[index][2]);
        this.state.value.splice(3,1,this.state.cards[index][3]);
        document.getElementById("Uname").value=this.state.cards[index][0];
        document.getElementById("Cname").value=this.state.cards[index][1];
        document.getElementById("Expense").value=this.state.cards[index][2];
        document.getElementById("Deadline").value=this.state.cards[index][3];

    }
    Count=()=>{

    if(document.getElementById("Uname").value!=="" && document.getElementById("Cname").value!=="" && document.getElementById("Expense").value!=="" && document.getElementById("Deadline").value!=="" && this.state.editindex===null){
        this.state.cards.push(" ");
        let a={...this.state.value};
        this.state.cards.splice(this.state.cardcount,1 ,a);
        let cnt=this.state.cardcount;
        this.setState({cardcount:cnt+1})
        document.getElementById("Uname").value="";
        document.getElementById("Cname").value="";
        document.getElementById("Expense").value="";
        document.getElementById("Deadline").value="";
        this.setState({message:null});
    }
    else if(document.getElementById("Uname").value!=="" && document.getElementById("Cname").value!=="" && document.getElementById("Expense").value!=="" && document.getElementById("Deadline").value!=="" && this.state.editindex!==null){
   
        let a={...this.state.value};
        console.log(a);
        
        this.state.cards.splice(this.state.editindex,1 ,a);
        
        document.getElementById("Uname").value="";
        document.getElementById("Cname").value="";
        document.getElementById("Expense").value="";
        document.getElementById("Deadline").value="";
        this.setState({editindex:null});
        this.setState({message:null});
   
    }
    else if(document.getElementById("Uname").value==="" || document.getElementById("Cname").value==="" || document.getElementById("Expense").value==="" || document.getElementById("Deadline").value===""){
        this.setState({message:"Enter each field!!"});
        setTimeout(()=>{this.setState({message:null});},2000);   
    }
    }
    render(){
        let cardAdd=null;
  
            cardAdd=(
                     <div  className="cardAdd">
                          <Addcard setUname={()=>{this.setValue(0,"Uname")}}
                          setCname={()=>{this.setValue(1,"Cname")}}
                          setExpense={()=>{this.setValue(2,"Expense")}}
                          setDeadline={()=>{this.setValue(3,"Deadline")}}
                          setCount={()=>{this.Count()}}
                          />
                    </div>);
 

          let cards=null;

          if((this.state.cards.length !==0)){                                        // for showing posts
            cards=(
              <div  className="allcards" >
                {this.state.cards.map(( e,index) =>{return (
                                                                  <div className="card">
                                                                  <Cards 
                                                                   Uname={this.state.cards[index][0]}
                                                                   Cname={this.state.cards[index][1]}
                                                                   Expense={this.state.cards[index][2]}
                                                                   Deadline={this.state.cards[index][3]}
                                                                   edit={()=>{this.editfn(index)}} />
                                                                   </div>);
                                                                   })
               }
              
              </div> 
                     );
          } 
                         
        return(
            <div className="appb" >
                 <span className="message">{this.state.message}</span>
                  <div>{cardAdd}{cards}</div>

            </div>
        )
    }
}

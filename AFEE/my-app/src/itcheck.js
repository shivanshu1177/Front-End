export default class MyComponent extends React.Component{
    onSubmit(Check){
        Check.preventDefault();
        var title = this.title;
        console.log(title);
    }

    render(){
        return(
            <form action="">
            <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
            </form>
            
        )
        
    }
}
import React, {Component} from "react";

class Article extends Component {
    state = {
        isOpen: false
    }
    render() {
        const { article } = this.props
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>;
        return (
            <div className="card" style = {{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-end">close</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>    
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



export default Article
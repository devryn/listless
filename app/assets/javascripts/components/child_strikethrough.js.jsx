var ChildStrikethrough = React.createClass({

  getInitialState: function () {
    return {
       className: "isStrikeThrough"
    };
  },

  onHandleClick: function () {
    if (this.state.isStrikeThrough === null) {
      this.setState({isStrikeThrough: "isStrikeThrough"});
    } else {
      this.setState({isStrikeThrough: null});
    }
  },

  render: function() {
    return (
      <li>
        <h6 className={this.state.isStrikeThrough} onClick={this.onHandleClick}>{this.props.child.title}</h6>
        <a className="" href={"/tasks/new?parent_task_id="}>
        <i className="tiny material-icons">clear</i></a>
      </li>
    )
  }
});

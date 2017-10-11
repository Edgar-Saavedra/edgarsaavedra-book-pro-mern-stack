const contentNode = document.getElementById('contents');

class IssueRow extends React.Component {
  render() {
    const borderedStyle = { borderWidth:"1px",borderStyle:"solid",borderColor: "silver",padding:4};
    return (
      <tr>
        <td style={borderedStyle}>{this.props.issue_id}</td>
        <td style={borderedStyle}>{this.props.children}</td>
      </tr>
    );
  }
}

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder fot he issues filter</div>
    );
  }
}


class IssueTable extends React.Component {
  render() {
    const borderedStyle = {borderWidth:"1px",borderStyle:"solid",borderColor: "silver",padding:6};
    return (
      <table style={{borderCollapse:"collapse"}}>
        <thead>
          <tr>
            <th style={borderedStyle}>ID</th>
            <th style={borderedStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow issue_id={1} >Error in console when clicking add</IssueRow>
          <IssueRow issue_id={2} >Missing bottom border on panel</IssueRow>
        </tbody>
      </table>
    );
  }
}


class IssueAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder fot an Issue Add entry form.</div>
    );
  }
}

class IssueList extends React.Component {
  render() {
    return(
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter/>
        <hr/>
        <IssueTable/>
        <hr/>
        <IssueAdd/>
      </div>
    );
  }
}

ReactDOM.render(<IssueList />,contentNode);
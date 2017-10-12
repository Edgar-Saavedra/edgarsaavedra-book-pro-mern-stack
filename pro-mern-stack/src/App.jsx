const contentNode = document.getElementById('contents');


const issues = [
  {
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add',
  }, {
    id: 2, status: 'Assigned', owner: 'Eddie', created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel',
  },
];

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr key={issue.id}>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td> <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.completionDate ? issue.completionDate.toDateString() : ""}</td>
        <td>{issue.title}</td>
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
    const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
    return (
      <table style={{borderCollapse:"collapse"}}>
        <thead>
          <tr>
            <th style={borderedStyle}>ID</th>
            <th style={borderedStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          { issueRows }
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
        <IssueTable issues={issues}/>
        <hr/>
        <IssueAdd/>
      </div>
    );
  }
}

ReactDOM.render(<IssueList />,contentNode);
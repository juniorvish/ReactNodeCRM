import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardData: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('/api/dashboard')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ dashboardData: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { dashboardData, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="container mx-auto px-4">
        <Dashboard data={dashboardData} />
      </div>
    );
  }
}

export default App;
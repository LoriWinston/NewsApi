import React, { Component } from 'react';
import Controls from '../components/display/Controls';
import NewsList from '../components/display/NewsList';
import { fetchNewsByTopic, fetchNews } from '../components/services/newsApi';

export default class NewsContainer extends Component {
    state = {
        loading: true,
        news: [],
        newsName: '',
    };

    async componentDidMount() {
        const news = await fetchNews();
        this.setState({
            loading: false,
            news,
        });
    };

    handleNewsNameChange = ({ target }) => {
        this.setState({ newsName: target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({ loading: true });
        const news = await fetchNewsByTopic(this.state.newsName);
        this.setState({
          loading: false,
          news,
        });
      };

      render() {
        const { loading, news, newsName } = this.state;
    
        if (loading) return <h1>Loading...</h1>;
    
        return (
          <>
            <Controls
              newsName={newsName}
              onNewsNameChange={this.handleNewsNameChange}
              onSubmit={this.handleSubmit}
            />
            <NewsList newsProp={news} />
          </>
        );
      }
    };
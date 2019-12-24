
import { connect } from 'react-redux';
import React, { Component } from 'react';
import _RHelper from '../../helpers/redux';
import { Helmet } from 'react-helmet-async';

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider, graphql } from 'react-apollo'
import { setContext } from 'apollo-link-context'
import { gql } from 'apollo-boost'
//import gql from 'graphql-tag'



class GraphQlPage extends Component {
	
	constructor(props) {
		
		super(props);
		
		this.state = {
            loading: true,
            data: {}
        }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		
		//this.setState(_RHelper.getState(nextProps));
	}

	componentDidMount() {
        
        const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' })

		const authLink = setContext((_, { headers }) => {
		const token = '9ed08685bfa04e8b2b87d5d9a04a83d6c8a7414a'

		return {
			headers: {
				...headers,
				authorization: `Bearer ${token}`
				}
			}
		});

		const link = authLink.concat(httpLink)

		const client = new ApolloClient({
			link: link,
			cache: new InMemoryCache()
		})

		const POPULAR_REPOSITORIES_LIST = gql`
		{
		search(query: "stars:>50000", type: REPOSITORY, first: 10) {
			repositoryCount
			edges {
			node {
				... on Repository {
				name
				owner {
					login
				}
				stargazers {
					totalCount
				}
				}
			}
			}
		}
		}
		`
        var _ = this;
		client.query({ query: POPULAR_REPOSITORIES_LIST }).then(function(props) {
            
            _.setState({
                loading: props.loading,
                data: props.data,
            })
        })
	}
	
	render() {
		
		const {
            data,
            loading
        } = this.state;
        
        return (
            <section className="site_content language.html">
                <Helmet>
                    <title>Language</title>
                </Helmet>
                <ul className="qltest">
                {
                    loading && data ? '' : data.search.edges.map((row, i) => {
                        return <li key={row.node.owner.login + '-' + row.node.name}>
                            {row.node.owner.login} / {row.node.name}: {' '}
                            <strong>
                            {row.node.stargazers.totalCount}
                            </strong>
                        </li>
                    })
                }
                </ul>
                
            </section>
		)
	}
}

const mapStateToProps = (state) => _RHelper.mapStateToProps(state, [
	'GraphQlPage'
]);

export default connect(mapStateToProps)(GraphQlPage);

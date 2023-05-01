import React, { Component } from 'react';
import axios from 'axios';

class DateFact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }
    // state = {
    //     data: null,
    //     loading: true,
    //     error: null,
    // };

    async componentDidMount() {
        try {
            const now = Date.now();
            const response = await axios.get(`http://numbersapi.com/${now.getMonth()}/${now.getDate()}}/date`);
            this.setState({ data: response.data, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Oops, something went wrong: {error.message}</p>;
        }

        return (
            <div>
                {data && (
                    <ul>
                        {data}
                    </ul>
                )}
            </div>
        );
    }
}

export default DateFact;

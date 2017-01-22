import React from 'react';

export default class TextPageView extends React.Component {

    static propTypes = {
        page: React.PropTypes.object.isRequired,
    };

    render() {
        const header = "Page " + (this.props.page.index + 1);
        return (
            <div>
              <h2>{ header }</h2>
              <textarea rows="45" cols="150" defaultValue={ this.props.page.text }>
              </textarea>
            </div>
            );
    }

}
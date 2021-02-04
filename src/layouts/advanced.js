import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

function Form() {
  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  )
}

export default class Advanced extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'page.frontmatter.sections', null), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props} />
                )
            })}
            </Layout>
        );
    }
}

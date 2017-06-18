import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Login } from 'features/common/Login';

describe('common/Login', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Login {...pageProps} />
    );

    expect(
      renderedComponent.find('.common-login').node
    ).to.exist;
  });
});

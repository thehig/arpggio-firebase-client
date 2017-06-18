import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LoginPage } from 'features/common/LoginPage';

describe('common/LoginPage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LoginPage {...pageProps} />
    );

    expect(
      renderedComponent.find('.common-login-page').node
    ).to.exist;
  });
});

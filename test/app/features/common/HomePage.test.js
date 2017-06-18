import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomePage } from 'features/common/HomePage';

describe('common/HomePage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomePage {...pageProps} />
    );

    expect(
      renderedComponent.find('.common-home-page').node
    ).to.exist;
  });
});

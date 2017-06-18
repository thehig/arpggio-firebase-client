import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AboutPage } from 'features/common/AboutPage';

describe('common/AboutPage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AboutPage {...pageProps} />
    );

    expect(
      renderedComponent.find('.common-about-page').node
    ).to.exist;
  });
});

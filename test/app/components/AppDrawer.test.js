import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AppDrawer } from 'src/components';

describe('components/AppDrawer', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <AppDrawer />
    );

    expect(
      renderedComponent.find('.component-app-drawer').node
    ).to.exist;
  });
});

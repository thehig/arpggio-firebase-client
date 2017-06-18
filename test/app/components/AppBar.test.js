import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AppBar } from 'src/components';

describe('components/AppBar', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <AppBar />
    );

    expect(
      renderedComponent.find('.component-app-bar').node
    ).to.exist;
  });
});

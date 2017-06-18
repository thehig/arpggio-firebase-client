import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Logged } from 'src/components';

describe('components/Logged', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Logged />
    );

    expect(
      renderedComponent.find('.component-logged').node
    ).to.exist;
  });
});

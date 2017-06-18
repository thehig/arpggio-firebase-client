import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Login } from 'src/components';

describe('components/Login', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Login />
    );

    expect(
      renderedComponent.find('.component-login').node
    ).to.exist;
  });
});

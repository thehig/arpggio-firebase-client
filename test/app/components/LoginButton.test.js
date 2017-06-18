import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LoginButton } from 'src/components';

describe('components/LoginButton', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <LoginButton />
    );

    expect(
      renderedComponent.find('.component-login-button').node
    ).to.exist;
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AuthenticatedComponent } from 'src/components';

describe('components/AuthenticatedComponent', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <AuthenticatedComponent />
    );

    expect(
      renderedComponent.find('.component-authenticated-component').node
    ).to.exist;
  });
});

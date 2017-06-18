import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ErrorComponent } from 'src/components';

describe('components/ErrorComponent', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ErrorComponent />
    );

    expect(
      renderedComponent.find('.component-error-component').node
    ).to.exist;
  });
});

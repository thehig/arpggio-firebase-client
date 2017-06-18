import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AppErrorDisplay } from 'src/components';

describe('components/AppErrorDisplay', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <AppErrorDisplay />
    );

    expect(
      renderedComponent.find('.component-app-error-display').node
    ).to.exist;
  });
});

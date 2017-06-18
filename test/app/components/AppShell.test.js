import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AppShell } from 'src/components';

describe('components/AppShell', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <AppShell />
    );

    expect(
      renderedComponent.find('.component-app-shell').node
    ).to.exist;
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'features/games/DefaultPage';

describe('games/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      games: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...pageProps} />
    );

    expect(
      renderedComponent.find('.games-default-page').node
    ).to.exist;
  });
});

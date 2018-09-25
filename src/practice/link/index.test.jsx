// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Link from './index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link href="http://www.mercadolibre.com.ar">Mercado Libre</Link>,
  );
  const instance = component.getInstance();
  expect(instance.state.class).toEqual('normal');
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  instance.onMouseEnter();
  // re-rendering
  expect(instance.state.class).toEqual('hovered');
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  instance.onMouseLeave();
  // re-rendering
  expect(instance.state.class).toEqual('normal');
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

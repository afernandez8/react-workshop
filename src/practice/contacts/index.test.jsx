// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import App from './index';

describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks();
    /* eslint-disable-next-line */
    fetch.mockResponse(JSON.stringify({"results":[{"gender":"male","name":{"title":"mr","first":"batur","last":"mayhoş"},"location":{"street":"6627 bağdat cd","city":"bingöl","state":"karaman","postcode":24791,"coordinates":{"latitude":"78.1226","longitude":"-136.2015"},"timezone":{"offset":"+3:00","description":"Baghdad, Riyadh, Moscow, St. Petersburg"}},"email":"batur.mayhoş@example.com","login":{"uuid":"198ad2d2-e195-4716-b876-1cd62f6cfc08","username":"heavygorilla163","password":"liberty","salt":"4eJuEfA9","md5":"468a06216d2c39f4a3172d65299884c0","sha1":"4be263021619f32ca513428004ea247d28194e82","sha256":"18c55f3218ed9f7d0f346b00c1d7bb194cd2ba51d5a89e0b4ee1a78b8794c33a"},"dob":{"date":"1984-09-16T23:25:49Z","age":34},"registered":{"date":"2016-05-28T21:40:08Z","age":2},"phone":"(194)-797-0506","cell":"(651)-720-0821","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/39.jpg","medium":"https://randomuser.me/api/portraits/med/men/39.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/39.jpg"},"nat":"TR"}],"info":{"seed":"2da13d33ca5d1581","results":1,"page":1,"version":"1.2"}}));
  });

  test('App', () => {
    const component = renderer.create(
      <App />,
    );
    // const instance = component.getInstance();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

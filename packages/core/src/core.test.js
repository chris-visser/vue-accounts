import AccountsCore from './core';

test('It should be defined', () => {
  expect(AccountsCore).toBeDefined();
});

test('It should throw when no connector is specified', () => {
  expect(() => new AccountsCore()).toThrowErrorMatchingSnapshot();
});

test('It should throw when the connector is not an object', () => {
  expect(() => new AccountsCore('test')).toThrowErrorMatchingSnapshot();
});

test('It should throw when the connector does not have a dispatch function', () => {
  expect(() => new AccountsCore({})).toThrowErrorMatchingSnapshot();
});

test('It should initialize without errors', () => {
  expect(() => new AccountsCore({
    dispatch() {
    },
  })).not.toThrow();
});

test('It should register the $accounts property to the Vue prototype', () => {
  const Accounts = new AccountsCore({
    dispatch() {
    },
  });

  const VueMock = () => {
  };

  Accounts.install(VueMock);

  expect(VueMock.prototype.$accounts).toEqual({});
});

test('It should allow strategies to add $account methods', () => {
  const Accounts = new AccountsCore({
    dispatch() {
    },
  });

  const VueMock = () => {
  };

  Accounts.install(VueMock);

  Accounts.addStrategy({
    login() {

    },
    register() {

    },
  });

  expect(VueMock.prototype.$accounts.login).toBeDefined();
  expect(VueMock.prototype.$accounts.register).toBeDefined();
});

test('It should call the connector\'s dispatch with method name and given payload', () => {
  const dispatch = jest.fn();

  const Accounts = new AccountsCore({ dispatch });

  const VueMock = () => {
  };

  Accounts.install(VueMock);

  Accounts.addStrategy({
    dummyMethod(payload) {
      this.dispatch('dummy', payload);
    },
  });

  const Vue = new VueMock();

  Vue.$accounts.dummyMethod({ foo: 'bar' });

  expect(dispatch).toHaveBeenCalledWith('dummy', { foo: 'bar' });

});

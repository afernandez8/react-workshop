import React from 'react';

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withLoading = (WrappedComponent, loadingProp) => (
  class extends React.PureComponent {
    static displayName = `withLoading(${getDisplayName(WrappedComponent)})`;

    render() {
      const { [loadingProp]: loading } = this.props;
      if (!loading) return null;
      return <WrappedComponent {...this.props} />;
    }
  }
);

export default withLoading;

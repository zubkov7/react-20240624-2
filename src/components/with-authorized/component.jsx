function withAuthorized(AuthorizedComponent, NotAuthorizedComponent) {
  const Component = (props) => {
    const isAuthorized = true; // call autth hook

    if (!isAuthorized) {
      return <NotAuthorizedComponent />;
    }

    return <AuthorizedComponent {...props} />;
  };

  return Component;
}

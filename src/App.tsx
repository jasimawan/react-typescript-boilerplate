import React, { ReactElement, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

function App(): ReactElement {
  return (
    <div className='app-body'>
      <Suspense fallback={<div>loading....</div>}>
        <Switch>
          {routes.map((r) => {
            const { path, component: Component, exact, layout: Layout } = r;
            return (
              <Route key={path} exact={exact} path={path}>
                <Layout>
                  <Component />
                </Layout>
              </Route>
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

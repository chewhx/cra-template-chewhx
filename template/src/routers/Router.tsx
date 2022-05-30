import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const Router = () => {
	return (
		<Switch>
			{routes.map((e) => (
				<Route key={e.path as string} {...e} />
			))}
		</Switch>
	);
};

export default Router;
